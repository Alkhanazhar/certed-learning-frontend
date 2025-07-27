import FadeInSection from "@/hooks/fade-animation";
import { useContactForm } from "@/hooks/use-contactt";
import React from "react";

export default function ContactUs() {
  const { formData, handleChange, handleSubmit, loading, response, error } =
    useContactForm();
  const subjects = [
    "Web Development",
    "App Development",
    "Game Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Cloud Computing",
    "DevOps",
    "Cybersecurity",
    "UI/UX Design",
    "Full Stack Development",
    "Front-End Development",
    "Back-End Development",
    "React.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "Django",
    "Flask",
    "Python Programming",
    "Java Programming",
    "C++ Programming",
    "Mobile App Design",
    "Android Development",
    "iOS Development",
    "Database Management",
    "SQL & NoSQL",
    "Blockchain Development",
    "AR/VR Development",
    "Unity Game Development",
    "Unreal Engine",
    "Software Testing",
  ];

  return (
    <div className="w-full bg-[#090040]  ">
      {/* Header */}
      <FadeInSection>
        <div className="bg-[#090040]  py-32 text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </FadeInSection>
      <FadeInSection>
        {/* Content */}
        <div className="px-4 py-10 md:px-20 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Connect With Us */}
            <div className="text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Connect With US</h2>
              <div className="space-y-6 text-sm md:text-base">
                <div>
                  <p>📧 hello@certedtechnology.com</p>
                </div>

                <div>
                  <p className="font-semibold">📍 Madhya Pradesh, India (HQ)</p>
                  <p className="text-gray-500 text-xs">
                    Abhilasha Bhawan, HNo 1, Airport Rode, DD Nagar, Gwalior,
                    Madhya Pradesh 474020
                  </p>
                  <p>📞 +91 +91 8920158923 (India)</p>
                </div>
                {/* 
                <div>
                  <p className="font-semibold">📍 Kolkata, India</p>
                  <p className="text-gray-500 text-xs">
                    Ground Floor, Tower C-1, Candor Kolkata One Tech Space,
                    IT/ITES SEZ, New Town Rajarhat, Kolkata – 700156
                  </p>
                  <p>📞 +91 7411968561 (India)</p>
                </div>

                <div>
                  <p className="font-semibold">📍 San Francisco, USA</p>
                  <p className="text-gray-500 text-xs">
                    7100, Stevenson Blvd, Fremont, CA 94538, United States
                  </p>
                  <p>📞 +1 (620) 678-8807 (USA)</p>
                </div>

                <div>
                  <p className="font-semibold">📍 Dubai, U.A.E</p>
                  <p className="text-gray-500 text-xs">
                    Business Center 1, M Floor, The Meydan Hotel,
                    <br />
                    Nad Al Sheba, Dubai, U.A.E
                  </p>
                  <p>📞 +971-585470072 (Dubai)</p>
                </div> */}
              </div>
            </div>

            {/* Book a Demo Form */}
            <div className="bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 h-fit rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Book a Demo</h2>
              <p className="text-gray-500 text-xs mb-4">
                Want to get in touch with Certed? Fill out the form with your
                inquiry or find the contact details below.
              </p>

              <form className="space-y-4 !h-fit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
                />
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-gray-300 px-2 py-2.5 rounded text-sm">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#090040]"
                  />
                </div>
                <textarea
                  placeholder="Type your message"
                  rows={4}
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#090040]"
                ></textarea>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">Select a Subject</option>
                  {subjects.map((subject, idx) => (
                    <option key={idx} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-[#090040] text-white px-6 py-2 rounded hover:bg-[#090040] transition text-sm"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>

          {/* Bottom 3-Card Contact Box */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 bg-white p-6 rounded-lg shadow-md">
            {/* Phone */}
            <a
              href="tel:+917411968561"
              className="w-full md:w-60 text-center border rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/phone-call.webp"
                alt="Phone"
                className="mx-auto mb-2"
              />
              <p className="text-sm font-medium">+91 7411968561</p>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@certedtechnology.com"
              className="w-full md:w-60 text-center border rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/inbox.webp"
                alt="Mail"
                className="mx-auto mb-2"
              />
              <p className="text-sm font-medium">hello@certedtechnology.com</p>
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/place/Akshay+Tech+Park,+Whitefield,+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-60 text-center border rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src="https://netskill.com/wp-content/uploads/2024/05/map.webp"
                alt="Location"
                className="mx-auto mb-2"
              />
              <p className="text-sm font-medium">Bangalore, India (HQ)</p>
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
