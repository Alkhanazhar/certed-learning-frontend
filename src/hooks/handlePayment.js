import toast from "react-hot-toast";
import apiClient from "../../apiClient";

export const handlePayment = async (courseData, mobile) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return toast.error("Please log in first");

    // Step 1: Create Razorpay order
    const { data } = await apiClient.post(
      "course/create-order",
      {
        user_id: user.id,
        course_id: courseData.id,
        name: user.name,
        email: user.email,
        phone: mobile,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const orderData = data.data;

    const { purchase_id, razorpay_order } = orderData;
    const { id: order_id, amount, currency } = razorpay_order;
    // Step 2: Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount,
      currency,
      name: "Your Platform Name",
      description: courseData.name,
      image: "https://yourcdn.com/logo.png",
      order_id,
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      theme: {
        color: "#6366F1",
      },
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data: verifyRes } = await apiClient.post(
            "course/verify-payment",
            {
              razorpay_payment_id,
              razorpay_order_id: order_id,
              razorpay_signature,
              purchase_id,
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );

          if (verifyRes.success) {
            toast.success("✅ Payment successful and verified!");
          } else {
            toast.error("❌ Payment verification failed.");
          }
        } catch (err) {
          console.error("Verification error:", err);
          toast.error(
            err.response.data.message ||
            "Something went wrong during verification."
          );
        }
      },
      modal: {
        ondismiss: () => {
          toast.error("Payment popup closed.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment error:", err);
    toast.error("Something went wrong. Please try again.");
  }
};
