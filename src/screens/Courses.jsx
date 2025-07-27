import useCourse from "@/hooks/useCourse";
import React from "react";

import { ShoppingBagIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FadeInSection from "@/hooks/fade-animation";

const Courses = () => {
  const { courses } = useCourse();
  console.log(courses);
  const navigate = useNavigate();
  return (
    <div className=" bg-[#090040] py-24">
      <h2 className="max-w-7xl mx-auto text-3xl font-bold text-white text-center border-b w-fit mb-4">
        Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-4 min-h-screen max-w-7xl mx-auto">
        {courses.map((course) => {
          const nameKey = course.name.split(" ").join("-");
          return (
            <FadeInSection>
              <div
                key={course.id}
                className="flex w-full max-w-2xl border border-neutral-600 h-40 rounded overflow-hidden   shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
              >
                {/* Left section */}
                <div className="bg-[#2A215A] text-white flex flex-col justify-between p-4 w-1/3">
                  <div>
                    <p className="text-xs uppercase tracking-wide opacity-70">
                      Course
                    </p>
                    <h2 className="font-semibold text-lg leading-snug">
                      {course.name}
                    </h2>
                  </div>
                  <p className="text-sm underline underline-offset-4 opacity-80">
                    View all chapters →
                  </p>
                </div>

                {/* Right section */}
                <div className="bg-white flex-1 p-4 flex flex-col justify-between relative">
                  <div>
                    <p className="text-xs uppercase text-gray-500 tracking-wide">
                      {course.chapters} chapters
                    </p>
                    <h3 className="text-lg font-medium text-gray-900">
                      {course.name}
                    </h3>
                    <p className="text-xs uppercase text-gray-500 tracking-wide">
                      {course.duration}hr duration
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="w-32 mb-2 bg-gray-200 h-1 rounded">
                      <div
                        className="bg-[#2A215A] h-1 rounded mb-2"
                        style={{ width: "70%" }} // assuming 6/9 challenges
                      />
                    </div>
                    {/* <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                    6/9 Challenges
                  </span> */}
                  </div>

                  {/* Continue button */}
                  <button
                    onClick={() => {
                      localStorage.setItem(nameKey, JSON.stringify(course));
                      navigate(nameKey);
                    }}
                    className="absolute flex gap-2 items-center justify-center text-sm md:text-base bottom-4 right-4 px-4 py-1.5 bg-[#2A215A] text-white rounded-full shadow-md hover:bg-[#1c173f] transition"
                  >
                    <ShoppingBagIcon className="w-4 h-4" /> View Course
                  </button>
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
