import React, { useEffect, useRef } from "react";

const CorporateTraining = () => {
  const containerRef = useRef(null);
  const leafRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      leafRefs.current.forEach((leaf, index) => {
        const speed = (index + 1) * 0.05;
        if (leaf) {
          leaf.style.transform = `translate(${clientX * speed}px, ${
            clientY * speed
          }px)`;
        }
      });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#090040] py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Floating leaves */}
      <img
        ref={(el) => (leafRefs.current[0] = el)}
        src="https://netskill.com/wp-content/uploads/2024/05/shape_b3-1.webp"
        alt="Leaf"
        className="absolute top-6 left-16 w-20 sm:w-16 pointer-events-none transition-transform duration-300"
      />
      <img
        ref={(el) => (leafRefs.current[1] = el)}
        src="https://netskill.com/wp-content/uploads/2024/05/shape_b3-2.webp"
        alt="Leaf change"
        className="absolute bottom-16 left-6 w-16 sm:w-14 pointer-events-none transition-transform duration-300"
      />

      <img
        ref={(el) => (leafRefs.current[2] = el)}
        src="https://netskill.com/wp-content/uploads/2024/05/sgape_four.webp"
        alt="Leaf"
        className="absolute bottom-16 right-28 w-16 sm:w-14 pointer-events-none transition-transform duration-300"
      />
      <img
        ref={(el) => (leafRefs.current[3] = el)}
        src="https://netskill.com/wp-content/uploads/2024/05/sgape_three.webp"
        alt="Leaf"
        className="absolute top-0 right-28 w-16 sm:w-28 pointer-events-none transition-transform duration-300"
      />

      <img
        ref={(el) => (leafRefs.current[4] = el)}
        src="https://netskill.com/wp-content/uploads/2024/05/sgape_five.webp"
        alt="Leaf"
        className="absolute bottom-1/2 right-28 w-16 sm:w-16 pointer-events-none transition-transform duration-300"
      />
      <img
        ref={(el) => (leafRefs.current[5] = el)}
        src="https://netskill.com/wp-content/uploads/2024/05/sgape_two.webp"
        alt="Leaf"
        className="absolute top-1/2 left-16 w-20 sm:w-18 pointer-events-none transition-transform duration-300"
      />

      <div className="bg-white rounded-2xl shadow-lg max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12 gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B6F] mb-4">
            Corporate Training
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-md">
            5000+ courses and 5000+ certified trainers across technology,
            business, creative and other fields. Certed Learning specializes in
            providing comprehensive corporate training for your workforce.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
            Schedule a Call
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full">
          <div className="bg-[#f6f8fc] rounded-xl p-6 py-12 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B6F] mb-4">
              Top Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Tech Development",
                  effect: "hover:scale-105 hover:-translate-y-1",
                  bg: "hover:bg-[#E6F4FF]",
                  text: "hover:text-blue-400 text-black",
                  icon: "hover:text-[#1D4ED8]",
                },
                {
                  title: "UI/UX Design",
                  effect: "hover:rotate-1",
                  bg: "hover:bg-[#FFF0F6]",
                  text: "hover:text-[#BE185D]",
                  icon: "hover:text-[#BE185D]",
                },
                {
                  title: "Business",
                  effect: "hover:translate-x-1",
                  bg: "hover:bg-[#ECFDF5]",
                  text: "hover:text-[#047857]",
                  icon: "hover:text-[#047857]",
                },
                {
                  title: "Marketing",
                  effect: "hover:scale-110",
                  bg: "hover:bg-[#FEF9C3]",
                  text: "hover:text-[#92400E]",
                  icon: "hover:text-[#92400E]",
                },
                {
                  title: "IT & Software",
                  effect: "hover:-rotate-1",
                  bg: "hover:bg-[#F3E8FF]",
                  text: "hover:text-[#6B21A8]",
                  icon: "hover:text-[#6B21A8]",
                },
                {
                  title: "Accounting",
                  effect: "hover:-translate-y-1",
                  bg: "hover:bg-[#FFEDD5]",
                  text: "hover:text-[#C2410C]",
                  icon: "hover:text-[#C2410C]",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm transform transition duration-300 ease-in-out cursor-pointer ${item.effect} ${item.bg}`}
                >
                  <svg
                    className={`w-5 h-5 text-green-500 flex-shrink-0 transition ${item.icon}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className={`text-gray-800 text-sm font-medium transition ${item.text}`}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;
