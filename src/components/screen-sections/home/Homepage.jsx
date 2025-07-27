import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative pt-16 md:min-h-screen sm:h-[90vh] bg-[#090040] overflow-hidden text-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between font-sans">
      {/* Abstract Background Blobs */}
      <div className="absolute top-[-60px] left-[-40px] w-48 h-48 bg-gradient-to-br from-[#d6b0e6] to-[#090040] rounded-full opacity-40 blur-2xl z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#090040] rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-yellow-400 rounded-full opacity-70 rotate-12 z-0" />
      <div className="absolute bottom-24 right-24 w-3 h-3 bg-yellow-300 rounded-full opacity-80 rotate-45 z-0" />
      {/* Left Section */}
      <div className="relative z-10 md:w-1/2 w-full mt-8 md:mt-0">
        <motion.h1
          initial={{ filter: "blur(20px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl md:text-5xl  font-bold leading-tight text-white"
        >
          Next-Gen AI <br />
          Corporate Training & Talent Development
        </motion.h1>
        <motion.p
          initial={{ filter: "blur(20px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-lg mt-4 text-[#D1BFFF]  max-w-md"
        >
          Leading organizations trust Certed Learning to accelerate workforce
          growth and capability.
        </motion.p>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            type="text"
            placeholder="Name*"
            className="px-4 py-3 w-full sm:w-1/2 rounded-md bg-white/10 border border-white/30 placeholder-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            className="px-4 py-3 w-full sm:w-1/2 rounded-md bg-white/10 border border-white/30 placeholder-white focus:outline-none"
          />
        </div>
        <Button
          size={"lg"}
          className="mt-6 bg-white text-black font-semibold py-3 px-6 rounded-md w-fit"
        >
          Schedule a Call
        </Button>
      </div>

      {/* Right Section */}
      <div className="relative z-10 md:w-1/2 w-full flex justify-center items-center">
        {/* Replace with real assets */}
        {/* <img
          src="/your-assets/certification-card.png"
          alt="Certification"
          className="absolute top-0 left-1/4 w-40 md:w-56 shadow-xl rounded-xl"
        /> */}
        {/* <img
          src="/your-assets/skills-card.png"
          alt="Skills"
          className="absolute top-0 right-0 w-40 md:w-48 shadow-xl rounded-xl"
        />
        <img
          src="/your-assets/role-score.png"
          alt="Role Score"
          className="absolute bottom-0 right-4 w-40 md:w-48 shadow-xl rounded-xl"
        /> */}
        <img
          src="https://netskill.com/wp-content/uploads/2024/05/Home-Banner.webp"
          alt="User"
          className="relative z-10 w-auto md:h-auto h-[44vh] md:w-full"
        />
      </div>
    </div>
  );
};

export default Homepage;
