import React from "react";
import { Play } from "lucide-react";

const HowToUpscale = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url('https://netskill.com/wp-content/uploads/2025/02/intro_video_bg_two-scaled.webp')`, 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/10"></div>

      {/* Center content */}
      <div className="relative z-10 text-center text-white max-w-2xl p-6 border border-white/20 rounded-2xl backdrop-blur-md">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Play className="text-pink-500 fill-pink-500" size={28} />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          How to upskill your diverse <br /> workforce with Certed LMS
        </h2>
      </div>
    </section>
  );
};

export default HowToUpscale;
