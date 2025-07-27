import React from "react";

const SkillsLxp = () => {
  return (
    <div className="bg-[#f8f9fc] py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Certed LXP
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg max-w-xl">
            Certed, your next-generation Learning Experience Platform (LXP),
            unlocks personalized continuous learning opportunities for every
            employee delivering jet fuel to the glory of organization.
          </p>

          {/* Bullet Points - 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base text-gray-900 mb-8">
            {[
              "AI-powered content library.",
              "Skill with 360° assessments.",
              "Data-driven insights.",
              "Upskilling at scale.",
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

          {/* CTA Button */}
          <button className="bg-[#090040] hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-row md:gap-6 justify-center items-center">
          {/* Left image with blob */}
          <div className="relative w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64 rounded-xl overflow-hidden">
            {/* <div className="absolute -left-6 top-1/3 w-40 h-40 bg-indigo-100 rounded-full z-0"></div> */}
            <img
              src="https://netskill.com/wp-content/uploads/2024/05/Netskill-LXP.webp"
              alt="LXP Data"
              className="relative rounded-xl w-auto h-[34vh] md:h-[70vh] object-cover z-10"
            />
          </div>

          {/* Right image with blob */}
          <div className="relative w-40 sm:w-48 md:w-52 lg:w-56 xl:w-64 rounded-xl overflow-hidden">
            {/* <div className="absolute -right-6 bottom-1/4 w-40 h-40 bg-indigo-100 rounded-full z-0"></div> */}
            <img
              src="https://netskill.com/wp-content/uploads/2024/05/LXP-Netskill.webp"
              alt="LXP User"
              className="relative rounded-xl w-auto h-[34vh] md:h-[70vh] object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsLxp;
