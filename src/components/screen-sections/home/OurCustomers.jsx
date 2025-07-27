import React from "react";

const OurCustomers = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Our Customers
      </h2>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10 text-lg text-black font-medium">
        <p>
          <span className="font-bold text-lg">5000+</span> Courses
        </p>
        <p>
          <span className="font-bold text-lg">150k+</span> Learners
        </p>
        <p>
          <span className="font-bold text-lg">300+</span> Enterprises Customers
        </p>
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 px-4">
        <img
          src="https://netskill.com/wp-content/uploads/2024/05/Sony.webp"
          alt="Sony"
          className="h-10 md:h-12 object-contain"
        />
        <img
          src="https://netskill.com/wp-content/uploads/2024/05/Samsung.webp"
          alt="Samsung"
          className="h-10 md:h-14 object-contain"
        />
        <img
          src="https://netskill.com/wp-content/uploads/2024/05/Flipkart.webp"
          alt="Flipkart"
          className="h-10 md:h-14 object-contain"
        />
        <img
          src="https://netskill.com/wp-content/uploads/2024/05/Zee.webp"
          alt="Zee5"
          className="h-10 md:h-14 object-contain"
        />
        <img
          src="https://netskill.com/wp-content/uploads/2024/09/nep.webp"
          alt="NephroPlus"
          className="h-10 md:h-14 object-contain"
        />
      </div>
    </section>
  );
};

export default OurCustomers;
