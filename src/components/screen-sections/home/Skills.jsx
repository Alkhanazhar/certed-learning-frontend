import React from "react";

const Skills = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex flex-row md:gap-6">
          <div className="relative w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64 rounded-xl overflow-hidden">
            {/* <div className="absolute -left-6 top-1 w-40 h-40 bg-indigo-100 rounded-full z-0"></div> */}
            <img
              src="https://netskill.com/wp-content/uploads/2024/05/LMS-Netskill.webp"
              alt="AI Bot"
              className="relative rounded-xl w-auto h-[34vh] md:h-[70vh] object-cover z-10"
            />
          </div>
          <div className="relative w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64 rounded-xl overflow-hidden">
            {/* <div className="absolute -right-6 bottom-1/4 w-40 h-40 bg-indigo-100 rounded-full z-0"></div> */}
            <img
              src="https://netskill.com/wp-content/uploads/2024/05/Netskill-LMS.webp"
              alt="AI Brain"
              className="relative rounded-xl w-auto h-[34vh] md:h-[70vh] object-cover z-10"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Certed LMS
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg max-w-xl">
            Open up the world of curated resources delivered with precision and
            scale for your teams with our AI powered super-trainer!
          </p>

          {/* Bullet points in 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-x-8 text-sm md:text-base text-gray-900 mb-8">
            {[
              "AI-powered management",
              "Blended learning",
              "Automated workflows",
              "Peer enabled learning",
              "Robust evaluation engine",
              "Impeccable UX",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#090040]"
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
                <span className="font-semibold">{point}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
