import React from "react";
import { CheckCircle } from "lucide-react";

const PersonalizeCourse = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Image & Cards */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Main Image (person with hologram) */}
          <img
            src="https://netskill.com/wp-content/uploads/2025/04/Frame-1321318461.png"
            alt="Course Recommendation AI"
            className=" w-[280px] sm:w-[350px] lg:w-[400px] z-10"
          />


        </div>

        {/* Right Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Personalized Course Recommendations
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Choosing the right courses can be overwhelming, but with Certed LMS, AI simplifies this process. Our intelligent recommendation engine evaluates user behaviour, previous learning experiences, and industry trends to suggest courses that align with individual learning objectives.
          </p>

          {/* Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "AI-driven course suggestions tailored to learner profiles",
              "Seamless integration with career development goals",
              "Predictive analytics to identify relevant skill-gaps",
              "Continuous updates based on emerging trends and learnings",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300"
              >
                <CheckCircle className="text-purple-600 mt-1" size={20} />
                <span className="text-sm font-medium text-gray-800">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizeCourse;
