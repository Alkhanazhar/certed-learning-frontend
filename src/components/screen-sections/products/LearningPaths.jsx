import React from "react";
import { CheckCircle } from "lucide-react";

const LearningPaths = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            AI-Generated Learning Paths
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Every learner has a unique journey, and Certed LMS ensures that their path is optimized for success. Our AI-driven system analyzes a learner’s progress, strengths, weaknesses, and goals to create personalized learning paths that maximize efficiency and retention.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Adaptive course structuring to make learning more easier",
              "Dynamic content delivery to reinforcement in weaker areas",
              "Smart recommendations for additional learning materials",
              "Real-time adjustments to match learner pace & comprehension",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300"
              >
                <CheckCircle className="text-purple-600 mt-1" size={20} />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image Layout */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Large Circle Image */}
          <img
            src="https://netskill.com/wp-content/uploads/2025/04/Frame-132131846011.png"
            alt="Learning Path Visual"
            className=" w-[280px] sm:w-[350px] lg:w-[400px] z-10"
          />

          {/* Overlay Cards */}
          {/* <img
            src="https://yourdomain.com/card1.png"
            alt="Onboarding Module"
            className="absolute top-0 left-8 w-28 sm:w-32 shadow-md rounded-xl"
          />
          <img
            src="https://yourdomain.com/card2.png"
            alt="Progress Stats"
            className="absolute bottom-8 right-2 w-28 sm:w-32 shadow-md rounded-xl"
          />
          <img
            src="https://yourdomain.com/card3.png"
            alt="Learning Paths"
            className="absolute bottom-0 left-2 w-32 sm:w-36 shadow-md rounded-xl"
          /> */}

          {/* Circle background overlay (optional) */}
          {/* <div className="absolute bg-purple-100 rounded-full w-[350px] h-[350px] blur-3xl opacity-30 -z-10"></div> */}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
