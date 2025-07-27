import React from "react";
import CaseStudies from "../home/CaseStudies";

const CoursesAndTrainers = () => {
  return (
    <div className="bg-[#f7f9fc] px-6 sm:px-10 py-12">
      {/* Trainers Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Certified Trainers for 1000+ Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              name: "Murali M",
              role: "Web Developer",
              skills: "(Python, SQL, React.JS, JavaScript)",
              img: "https://www.netskill.com/wp-content/uploads/2025/02/Murali.png",
            },
            {
              name: "Saurab Kumar",
              role: "Business Strategist",
              skills: "(HR, Management, Operations)",
              img: "https://www.netskill.com/wp-content/uploads/2025/02/Saurab.png",
            },
            {
              name: "Swayangjit Parida",
              role: "Marketing Consultant",
              skills: "(SEO, PPC, Growth Hacking, Branding)",
              img: "https://www.netskill.com/wp-content/uploads/2025/02/Swayangjit.png",
            },
            {
              name: "Robert Mathew",
              role: "Web Designer",
              skills: "(Figma, Adobe family, 3D Animation)",
              img: "https://www.netskill.com/wp-content/uploads/2025/02/Robert.webp",
            },
            {
              name: "Catherine",
              role: "Financial Planner",
              skills: "(Personal Finance, Trading, Bitcoin Expert)",
              img: "https://www.netskill.com/wp-content/uploads/2025/02/Catherine.webp",
            },
          ].map((trainer, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-md overflow-hidden text-center"
            >
              <img src={trainer.img} alt={trainer.name} className="w-full" />
              <div className="p-4">
                <h4 className="font-bold text-gray-800">{trainer.name}</h4>
                <p className="text-sm text-gray-600">{trainer.role}</p>
                <p className="text-sm text-gray-600 mt-1">{trainer.skills}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-[#090040] text-white font-medium rounded hover:bg-purple-700">
          Book a trainer for your corporate training
        </button>
      </div>

      <div className="max-w-full px-0 bg-white">
        <CaseStudies />
      </div>

      {/* Courses Section */}
      <div className="text-center pt-8 px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Explore All Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Artificial Intelligence",
              img: "https://netskill.com/wp-content/uploads/2024/06/Artificial-Intelligence-AI.jpg",
            },
            {
              title: "Machine Learning",
              img: "https://netskill.com/wp-content/uploads/2024/06/Machine-Learning.jpg",
            },
            {
              title: "Python",
              img: "https://netskill.com/wp-content/uploads/2024/06/Python.jpg",
            },
            {
              title: "Business Analysis",
              img: "https://netskill.com/wp-content/uploads/2024/07/Business-analysis.jpg",
            },
            {
              title: "Investment Banking",
              img: "https://netskill.com/wp-content/uploads/2024/07/Investment-Banking.jpg",
            },
            {
              title: "Prompt Engineering",
              img: "https://netskill.com/wp-content/uploads/2024/07/Prompt-Engineering-1.jpg",
            },
          ].map((course, i) => (
            <div key={i} className="bg-white rounded shadow overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-medium text-gray-400">
                  Course
                </span>
                <h4 className="font-semibold text-lg text-gray-800 mt-1">
                  {course.title}
                </h4>
                <p className="text-sm text-purple-600 mt-1">Read More →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesAndTrainers;
