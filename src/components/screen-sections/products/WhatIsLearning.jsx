import React from "react";

export default function WhatIsLearning() {
  return (
    <section className="px-6 md:px-16 py-10 bg-gray-100 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://netskill.com/wp-content/uploads/2025/04/Frame-132131848322.png" // Replace with actual path
            alt="AI Powered Learning"
            className="w-auto h-[60vh] rounded-3xl"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            What is AI-Powered Learning?
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            In today's fast-paced digital learning landscape, Certed LMS
            stands at the forefront of innovation, offering a cutting-edge
            AI-powered learning experience. Our advanced Learning Management
            System integrates artificial intelligence to enhance
            personalization, engagement, and efficiency, ensuring that learners
            receive a tailored educational journey that meets their unique
            needs.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-4 py-2 rounded-md transition">
            Book a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}
