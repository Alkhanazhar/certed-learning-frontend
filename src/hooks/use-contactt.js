import { useState } from "react";
import apiClient from "../../apiClient";
import toast from "react-hot-toast";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await apiClient.post("user/contact", formData);
      setResponse(res.data);
      setFormData(initialFormState); // Reset form after submit
      toast.success("form data submitted successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    response,
    error,
  };
};
