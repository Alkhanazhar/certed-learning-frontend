import React from "react";
import {
  BookOpenCheck,
  ClipboardList,
  PencilRuler,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Course Management",
    description:
      "Create, organize, and assign courses to users, facilitating structured learning experiences.",
    icon: <BookOpenCheck size={32} className="text-pink-500" />,
  },
  {
    title: "Course Tracking",
    description:
      "Monitor learner progress and completion of course materials to ensure effective training.",
    icon: <ClipboardList size={32} className="text-pink-500" />,
  },
  {
    title: "Tests/Assessments",
    description:
      "Develop tools to measure learner retention through quizzes and evaluations.",
    icon: <PencilRuler size={32} className="text-pink-500" />,
  },
  {
    title: "Mobile Learning Support",
    description:
      "Access learning materials on mobile devices, enabling learning on-the-go.",
    icon: <Smartphone size={32} className="text-pink-500" />,
  },
];

export default function KeyFeatures() {
  return (
    <section className="px-6 md:px-20 py-10 bg-white w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Key Features of Certed AI-powered Learning
      </h2>

      <div className="grid grid-cols-1 max-w-5xl mx-auto sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
