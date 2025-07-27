import React from "react";

const Onboarding = () => {
  return (
    <div className="bg-[#090040] text-white px-4 sm:px-8 md:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            How We Onboard You for <br />
            Corporate Training
          </h2>

          <div className="space-y-5 text-sm md:text-base text-white/90">
            <p>
              <strong>✓ Step 1: Understanding Requirements</strong>
              <br />
              We assess your business objectives, skill gaps, and learner groups
              to design a personalized training plan.
            </p>

            <p>
              <strong>✓ Step 2: Syllabus Draft & Iterations</strong>
              <br />A custom syllabus is curated based on your needs, with
              feedback-driven refinements for alignment.
            </p>

            <p>
              <strong>✓ Step 3: Trainer Selection & Customization</strong>
              <br />
              We assign expert trainers and incorporate industry case studies to
              enhance learning relevance.
            </p>

            <p>
              <strong>✓ Step 4: Training Hours & Costing</strong>
              <br />
              Finalizing total training hours, delivery format, and a
              transparent pricing model.
            </p>

            <p>
              <strong>✓ Step 5: Training Delivery & Ongoing Support</strong>
              <br />
              Choose from live virtual sessions, on-site workshops, self-paced
              modules, or blended learning. Ongoing engagement tracking and
              assessments ensure maximum impact.
            </p>
          </div>

          <button className="mt-8 bg-white text-[#5f00d6] font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
            Talk to Our Experts
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://netskill.com/wp-content/uploads/2025/02/full-shot-people-correcting-grammar-mistakes-scaled.jpg"
            alt="Corporate Training Onboarding"
            className="w-full md:h-[110vh] h-[70vh] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
