import React from "react";
import {
  Sliders,
  UserCheck,
  Users,
  FileText,
  CalendarCheck,
  Handshake,
} from "lucide-react"; // Using lucide-react icons

const features = [
  {
    icon: <Sliders size={32} className="text-[#090040]" />,
    title: "Customized Solutions",
    desc: "Tailored programs to meet your specific business needs and goals.",
  },
  {
    icon: <UserCheck size={32} className="text-[#090040]" />,
    title: "Expert Trainers",
    desc: "Certified professionals with real-world industry experience.",
  },
  {
    icon: <Users size={32} className="text-[#090040]" />,
    title: "Flexible Learning Options",
    desc: "Choose from in-person, virtual, or hybrid training models.",
  },
  {
    icon: <FileText size={32} className="text-[#090040]" />,
    title: "Cutting-Edge Content",
    desc: "Stay updated with the latest tools, technologies, and trends.",
  },
  {
    icon: <CalendarCheck size={32} className="text-[#090040]" />,
    title: "Proven Results",
    desc: "Focus on measurable outcomes to enhance team performance and ROI.",
  },
  {
    icon: <Handshake size={32} className="text-[#090040]" />,
    title: "Interactive Sessions",
    desc: "Engaging and participatory learning for better retention.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Why Choose Our <br className="sm:hidden" />
          Corporate Training Services?
        </h2>
        <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 flex flex-col items-center text-center shadow hover:shadow-md transition"
            >
              {item.icon}
              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
