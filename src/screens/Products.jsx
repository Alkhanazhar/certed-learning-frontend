import OurCustomers from "@/components/screen-sections/home/OurCustomers";
import BookFreeDemo from "@/components/screen-sections/products/BookFreeDEmo";
import ForLearners from "@/components/screen-sections/products/ForLearners";
import HowToUpscale from "@/components/screen-sections/products/HowToUpscale";
import KeyFeatures from "@/components/screen-sections/products/KeyFeatures";
import LearningPaths from "@/components/screen-sections/products/LearningPaths";
import PersonalizeCourse from "@/components/screen-sections/products/PersonalizeCourse";
import WhatIsLearning from "@/components/screen-sections/products/WhatIsLearning";
import FadeInSection from "@/hooks/fade-animation";
import { Book, Building, User } from "lucide-react";
import React from "react";

export default function Products() {
  return (
    <>
      {/* Main Hero Section */}
      <FadeInSection>
        <div className="bg-gradient-to-br from-[#090040] pt-12 to-[#0f045c] text-white w-full overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 pt-6 gap-10">
            {/* Left Side - Text */}
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                Transform Learning with AI-
                <br />
                Powered Certed LMS
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80">
                Transform corporate learning with AI-powered, adaptive, and
                personalized training experiences.
              </p>
              <button className="mt-6 bg-white text-[#090040] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
                Book a Free Demo
              </button>

              {/* Stats Section */}
              <div className=" py-8 md:mt-8 text-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                  <div className="flex flex-row justify-between gap-2">
                    <div className="mt-1">
                      <Book />
                    </div>
                    <div className="flex items-start flex-col">
                      <div className="text-2xl font-bold"> 5000+</div>
                      <div className="text-xl ">Courses</div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between gap-2">
                    <div className="mt-1">
                      <User />
                    </div>
                    <div className="flex items-start flex-col">
                      <div className="text-2xl font-bold"> 150k+</div>
                      <div className="text-xl ">Learners</div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between gap-2">
                    <div className="mt-1">
                      <Building />
                    </div>
                    <div className="flex items-start flex-col">
                      <div className="text-2xl font-bold"> 300+</div>
                      <div className="text-xl ">Enterprise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image (replace with actual image if needed) */}
            <div className="md:-mt-8 w-full max-w-[38rem]">
              <img
                src="https://netskill.com/wp-content/uploads/2025/04/ai-powered-learning.webp" // replace with actual image path
                alt="AI LMS Demo Visual"
                className="relative z-10 w-auto md:h-auto h-[44vh] md:w-full"
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <OurCustomers />
      </FadeInSection>
      <FadeInSection>
        <WhatIsLearning />
      </FadeInSection>
      <FadeInSection>
        <KeyFeatures />
      </FadeInSection>
      <FadeInSection>
        <HowToUpscale />
      </FadeInSection>
      <FadeInSection>
        <ForLearners />
      </FadeInSection>
      <FadeInSection>
        <LearningPaths />
      </FadeInSection>
      <FadeInSection>
        <PersonalizeCourse />
      </FadeInSection>
      <FadeInSection>
        <BookFreeDemo />
      </FadeInSection>
    </>
  );
}
