import React from "react";

const BookFreeDemo = () => {
  return (
    <section className="bg-[#0b1031] text-white py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
          Accelerate Workforce Growth with <br/> AI-Powered Learning
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-base md:text-lg mb-10">
          Deliver smarter, faster, and personalized corporate training with
          Certed's AI-driven LMS solutions.
        </p>

        {/* CTA Button */}
        <button className="bg-[#6e3ff3] hover:bg-[#5e31d9] text-white font-semibold text-base px-8 py-3 rounded-md transition duration-300">
          Book a Free Demo
        </button>
      </div>
    </section>
  );
};

export default BookFreeDemo;
