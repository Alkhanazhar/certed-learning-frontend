import React from "react";

const Organization = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-4 bg-gray-50">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        {/* Pink blob background */}
        {/* <div className="absolute -top-8 -left-6 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob"></div> */}

        <img
          src="https://netskill.com/wp-content/uploads/2024/05/end-to-end-training-Netskill.webp"
          alt="Team Presentation"
          className="relative rounded-[3rem] md:ml-12 ml-0 w-auto object-cover max-h-[350px]"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          End-to-End Training & L&D Ecosystem for Your Organization
        </h1>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Certed Learning Ecosystem (Products, Services, Certified Trainers) is
          used by companies to upskill employees and transform the talent to
          meet your business objectives.
        </p>
        <button className="mt-6 bg-[#090040] hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default Organization;
