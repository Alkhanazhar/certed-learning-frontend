// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    title: "How Certed Helped Kikli Foundation Scale Learning",
    category: "NGO",
    description:
      "Kikli Foundation is a non-profit organization to promoting education.",
    image:
      "https://netskill.com/wp-content/uploads/2024/05/Top-Notch-Corporate-Training-Services-1.webp",
  },
  {
    id: 2,
    title: "How LMS Improved Tech Training for Rural India",
    category: "Technology",
    description:
      "TechUp Foundation brings modern digital learning underserved areas.",
    image: "https://netskill.com/wp-content/uploads/2025/02/zee.webp",
  },
  {
    id: 3,
    title: "Scaling Healthcare Education Across Regions",
    category: "Medical",
    description:
      "Bringing healthcare training to thousands of medical workers.",
    image: "https://netskill.com/wp-content/uploads/2025/02/In-clinic.webp",
  },
  {
    id: 4,
    title: "Scaling Healthcare Education Across Regions",
    category: "Child Care",
    description:
      "Bringing healthcare training to thousands of medical workers.",
    image:
      "https://netskill.com/wp-content/uploads/2025/02/kikli-foundation-child-meeting.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-6 bg-white pb-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-7">
        Case Studies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudies.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Card className="group rounded p-3 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full  h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <CardContent className="p-4">
                <p className="text-sm text-green-600 font-semibold mb-1">
                  {item.category}
                </p>
                <h3 className="text-md font-bold text-black group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
