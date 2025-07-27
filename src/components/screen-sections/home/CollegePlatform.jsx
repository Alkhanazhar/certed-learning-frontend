import React from "react";
import { motion } from "framer-motion";
import TestimonialsSection from "./TestimonialsSection";

const CollegePlatform = () => {
  return (
    <div className="bg-[#0c0424] overflow-hidden text-white py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
            College & University
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
            Certed Learning Platform <br className="hidden sm:block" />
            for Colleges
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xl">
            At Certed Learning, we excel at providing the best courses to get
            your students 'job ready' and hired at top companies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#090040] hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Schedule Demo of College Platform
          </motion.button>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="https://netskill.com/wp-content/uploads/2024/05/COLLEGE-UNIVERSITY.webp"
            alt="College Students"
            className="w-full h-auto max-w-lg rounded-xl mx-auto lg:mx-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CollegePlatform;
