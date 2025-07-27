import CoursesAndTrainers from "@/components/screen-sections/corporate-training/CoursesAndTrainers";
import Onboarding from "@/components/screen-sections/corporate-training/Onboarding";
import WhyChooseUs from "@/components/screen-sections/corporate-training/WhyChooseUs";
import OurCustomers from "@/components/screen-sections/home/OurCustomers";
import FadeInSection from "@/hooks/fade-animation";
import { Book, Building, User } from "lucide-react";
import React from "react";
// import trainingImg from "../assets/trainingImage.png"; // Replace with actual image name

const Training = () => {
  return (
    <>
      <FadeInSection>
        <div className="bg-[#090040] text-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 pt-12 relative overflow-hidden">
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-6 z-10">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Revolutionize Learning with <br />
                <span className="text-white">
                  AI-Powered Corporate Learning
                </span>
              </h1>
              <p className="text-lg text-gray-200">
                Flexible learning solutions – Online Training, In-Person, or
                Self- Paced on Certed LMS to drive growth, innovation, and
                success.
              </p>
              <button className="bg-white text-[#6a0dad] font-semibold px-5 py-3 rounded-md w-fit hover:bg-gray-100 transition">
                Contact Us
              </button>

              {/* Stats */}
              <div className="bg-[#090040] py-8 text-white">
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

                  {/* <div>
            <div className="text-2xl font-bold">👤 150k+</div>
            <div className="text-base mt-1">Learners</div>
          </div> */}
                  {/* <div>
            <div className="text-2xl font-bold">🏢 300+</div>
            <div className="text-base mt-1">Enterprise Customers</div>
          </div> */}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center my-10 md:mb-0 z-10">
              <img
                src="https://netskill.com/wp-content/uploads/2025/02/c-banner-1.webp"
                alt="Training Woman"
                className="w-[300px] md:w-[400px] lg:w-[580px] object-contain"
              />
            </div>

            {/* Diagonal background overlay */}
            {/* <div className="absolute right-0 top-0 w-full h-full bg-[#6a0dad] transform -skew-y-3 origin-top-right scale-125 z-0"></div> */}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <OurCustomers />
      </FadeInSection>
      <FadeInSection>
        <Onboarding />
      </FadeInSection>
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
      <FadeInSection>
        <CoursesAndTrainers />
      </FadeInSection>
    </>
  );
};

export default Training;
