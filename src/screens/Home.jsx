import CaseStudies from "@/components/screen-sections/home/CaseStudies";
import CollegePlatform from "@/components/screen-sections/home/CollegePlatform";
import CorporateTraining from "@/components/screen-sections/home/CorporateTraining";
import Homepage from "@/components/screen-sections/home/Homepage";
import Organization from "@/components/screen-sections/home/Organization";
import OurCustomers from "@/components/screen-sections/home/OurCustomers";
import Skills from "@/components/screen-sections/home/Skills";
import SkillsLxp from "@/components/screen-sections/home/SkillsLxp";
import TestimonialsSection from "@/components/screen-sections/home/TestimonialsSection";
import FadeInSection from "@/hooks/fade-animation";
import React from "react";

const Home = () => {
  return (
    <div>
      <FadeInSection>
        <Homepage />
      </FadeInSection>
      <FadeInSection>
        <OurCustomers />
      </FadeInSection>
      <FadeInSection>
        <Organization />
      </FadeInSection>
      <FadeInSection>
        <CorporateTraining />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <SkillsLxp />
      </FadeInSection>
      <FadeInSection>
        <CaseStudies />
      </FadeInSection>
      <FadeInSection>
        <TestimonialsSection />
      </FadeInSection>
      <FadeInSection>
        <CollegePlatform />
      </FadeInSection>
    </div>
  );
};

export default Home;
