import React from "react";
import { CheckCircle } from "lucide-react";

const ForLearners = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          {/* Background blob shape (optional) */}
          <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10 left-0 top-1/4"></div>

          {/* Main image block */}
          <div className="relative">
            <img
              src="https://netskill.com/wp-content/uploads/2025/04/Frame-1321318459.png"
              alt="Learner with phone"
              className="max-w-full w-[300px] sm:w-[350px] lg:w-[400px]"
            />

            {/* Chat mockup overlay */}
            {/* <div className="absolute top-10 left-20 bg-white shadow-lg rounded-lg p-4 w-[250px] text-sm">
              <div className="font-semibold text-purple-600 mb-2">
                AI Chatbot Support
              </div>
              <div className="mb-2 text-gray-700">
                Hello there! 👋 Welcome to our course support chat! I'm here to assist you...
              </div>
              <div className="text-gray-500 italic">Learner: Can you explain OOP?</div>
              <div className="mt-2 text-gray-700">
                Sure! Object-oriented programming is a paradigm based on objects...
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            AI Chatbots for Learner Support
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Learning is most effective when support is readily available.
            Certed LMS is equipped with AI-powered chatbots that provide
            instant assistance to learners, answer queries, offer guidance, and
            resolve issues in real time.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "24/7 instant support for learner queries",
              "Smart assistance for assignment deadlines and progress tracking",
              "Automated responses based on course content and FAQs",
              "Real-time troubleshooting for platform-related issues",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300"
              >
                <CheckCircle className="text-purple-600 mt-1" size={20} />
                <span className="text-gray-800 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForLearners;
