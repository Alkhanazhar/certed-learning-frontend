import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Sanjay Vijayan",
    title: "Head of Talent Acquisition, Zee5",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    quote:
      "Certed LMS and LXP platform transformed our new recruits and converted them into capable employees",
    description:
      "We partnered with Certed understood this challenge and designed a customized training program that catered to each of them while supplementing their live training with state-of-the-art mobile LMS.",
  },
  {
    name: "Aarav Sharma",
    title: "L&D Manager, Flipkart",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    quote:
      "The training impact has been tremendous – measurable, engaging, and scalable.",
    description:
      "The level of customization and technical sophistication from Certed really empowered our team to grow faster. Our onboarding KPIs improved by 30%.",
  },
  {
    name: "Meera Kapoor",
    title: "HR Director, Sony India",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    quote:
      "Certed’s platform has helped us unify our learning infrastructure across departments.",
    description:
      "From skill tracking to certification, their platform is now the backbone of our internal talent development strategy.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="bg-cover overflow-hidden bg-center bg-fixed text-white"
      style={{
        backgroundImage: `url('https://netskill.com/wp-content/uploads/2024/05/Netskill-Testimonials.webp')`, // use your correct path here
      }}
    >
      <div className="bg-[#00000080] w-full py-20 px-4 ">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto mx-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="mb-4">
              <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto lg:mx-0">
                ▶
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Trusted by more than 150k <br /> employees across organizations
            </h2>
            <p className="text-sm text-gray-200 mb-6">
              Trusted by teams of all sizes.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 opacity-80">
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/flipkart-001.webp"
                alt="Flipkart"
                className="h-15"
              />
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/Sony-1.webp"
                alt="Sony"
                className="h-14"
              />
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/Samsung-1.webp"
                alt="Samsung"
                className="h-14"
              />
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/zee5-1.webp"
                alt="Zee5"
                className="h-14"
              />
            </div>
          </motion.div>

          {/* Right Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 md:flex hidden"
          >
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-xl bg-purple-700 p-6"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="py-6 px-6 text-white">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full border-2 border-white mr-3"
                      />
                      <span className="text-white font-semibold">
                        {testimonial.name}
                      </span>
                    </div>
                    <h4 className="font-bold text-base leading-snug mb-2">
                      "{testimonial.quote}"
                    </h4>
                    <p className="text-sm leading-relaxed text-white/90">
                      {testimonial.description}
                    </p>
                    <p className="mt-4 text-sm text-white/70">
                      <strong>{testimonial.name}</strong> <br />
                      {testimonial.title}dd
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
