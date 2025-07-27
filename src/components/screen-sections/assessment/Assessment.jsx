import React, { useState } from "react";
import { Computer, Download, Watch } from "lucide-react";
import { saveAs } from "file-saver";
import { FaPeopleArrows } from "react-icons/fa6";

const assessments = [
  {
    title: "Java Programming Assessment",
    pdfUrl: "./pdfs/Java Programming Program.pdf",
    category: "Java",
    description:
      "Master object-oriented programming and build robust, scalable applications.",
  },
  {
    title: "React Native Development Assessment",
    pdfUrl: "./pdfs/React Native Development Program.pdf",
    category: "React Native",
    description:
      "Create cross-platform mobile apps using JavaScript and React Native.",
  },
  {
    title: "JavaScript Programming Assessment",
    pdfUrl: "./pdfs/JavaScript Programming Program.pdf",
    category: "JavaScript",
    description:
      "Learn core JavaScript fundamentals for building dynamic web interfaces.",
  },
  {
    title: "WordPress Website Development Assessment",
    pdfUrl: "./pdfs/WordPress Website Development Program.pdf",
    category: "WordPress",
    description:
      "Design and develop customizable websites using WordPress themes and plugins.",
  },
  {
    title: "Generative AI (Gen-AI) Assessment",
    pdfUrl: "./pdfs/Generative AI (Gen-AI) Program.pdf",
    category: "Generative AI",
    description:
      "Explore tools like ChatGPT and MidJourney to generate text, images, and more.",
  },
  {
    title: "Spring Framework Assessment",
    pdfUrl: "./pdfs/Spring Framework Program.pdf",
    category: "Spring",
    description:
      "Develop Java backend services using Spring Boot, MVC, and Data JPA.",
  },
  {
    title: "iOS Development Assessment",
    pdfUrl: "./pdfs/iOS Development Program.pdf",
    category: "iOS",
    description:
      "Build native iOS applications with Swift and Xcode for Apple devices.",
  },
  {
    title: "2D_3D Interactive Design & Development Assessment",
    pdfUrl: "./pdfs/2D_3D Interactive Design & Development Program.pdf",
    category: "2D/3D Design",
    description:
      "Create interactive visual content using Unity, Blender, and advanced animation.",
  },
  {
    title: "Flutter Development Assessment",
    pdfUrl: "./pdfs/Flutter Development Program.pdf",
    category: "Flutter",
    description:
      "Build performant cross-platform mobile apps using Dart and Flutter widgets.",
  },
  {
    title: "C Programming Assessment",
    pdfUrl: "./pdfs/C Programming Program.pdf",
    category: "C",
    description:
      "Understand low-level programming, memory management, and data structures.",
  },
  {
    title: "C++ for Games Assessment",
    pdfUrl: "./pdfs/C++ for Games Program.pdf",
    category: "C++ for Games",
    description:
      "Build high-performance game logic using C++ with Unreal or custom engines.",
  },
  {
    title: "Android Development Assessment",
    pdfUrl: "./pdfs/Android Development Program.pdf",
    category: "Android",
    description:
      "Develop Android applications using Java, Kotlin, and Android Studio.",
  },
  {
    title: "Power Apps Assessment",
    pdfUrl: "./pdfs/Power Apps Program.pdf",
    category: "Power Apps",
    description:
      "Design low-code/no-code applications using Microsoft Power Platform.",
  },
  {
    title: "Power Automate Assessment",
    pdfUrl: "./pdfs/Power Automate Program.pdf",
    category: "Power Automate",
    description:
      "Automate workflows and integrations using Microsoft Power Automate.",
  },
  {
    title: "Unreal Blueprints Assessment",
    pdfUrl: "./pdfs/Unreal Blueprints Program.pdf",
    category: "Unreal Blueprints",
    description:
      "Design logic for games and simulations visually using Unreal Engine Blueprints.",
  },
  {
    title: "C# Programming Assessment",
    pdfUrl: "./pdfs/C# Programming Program.pdf",
    category: "C#",
    description:
      "Develop desktop and web apps using .NET and C# programming language.",
  },
  {
    title: "GPT Builder Assessment",
    pdfUrl: "./pdfs/GPT Builder Program.pdf",
    category: "GPT",
    description:
      "Build custom GPTs using OpenAI's API and prompt engineering techniques.",
  },
  {
    title: "C++ Programming Assessment",
    pdfUrl: "./pdfs/C++ Programming Program.pdf",
    category: "C++",
    description:
      "Learn advanced programming, OOP, and performance optimization in C++.",
  },
  {
    title: "SwiftUI Development Assessment",
    pdfUrl: "./pdfs/SwiftUI Development Program.pdf",
    category: "SwiftUI",
    description:
      "Design declarative UIs for iOS apps using Apple's SwiftUI framework.",
  },
  {
    title: "Bubble Application Builder Assessment",
    pdfUrl: "./pdfs/Bubble Application Builder Program.pdf",
    category: "Bubble",
    description:
      "Create powerful web apps without coding using Bubble visual editor.",
  },
  {
    title: "Artificial Intelligence Assessment",
    pdfUrl: "./pdfs/Artificial Intelligence Program.pdf",
    category: "Artificial Intelligence",
    description:
      "Explore neural networks, expert systems, and machine intelligence.",
  },
  {
    title: "Dart Programming Assessment",
    pdfUrl: "./pdfs/Dart Programming Program.pdf",
    category: "Dart",
    description:
      "Learn Dart language fundamentals used for building Flutter apps.",
  },
  {
    title: "Data Analysis Assessment",
    pdfUrl: "./pdfs/Data Analysis Program.pdf",
    category: "Data Analysis",
    description:
      "Work with data using tools like Excel, Python, and Tableau for insights.",
  },
  {
    title: "Deep Learning Assessment",
    pdfUrl: "./pdfs/Deep Learning Program.pdf",
    category: "Deep Learning",
    description: "Build and train neural networks with TensorFlow and PyTorch.",
  },
  {
    title: "Go Programming Assessment",
    pdfUrl: "./pdfs/Go Programming Program.pdf",
    category: "Go",
    description:
      "Learn Go’s concurrency model and write efficient backend services.",
  },
  {
    title: "LangChain Assessment",
    pdfUrl: "./pdfs/LangChain Program.pdf",
    category: "LangChain",
    description:
      "Build LLM-powered applications with LangChain and vector databases.",
  },
  {
    title: "Machine Learning Assessment",
    pdfUrl: "./pdfs/Machine Learning Program.pdf",
    category: "Machine Learning",
    description:
      "Train and deploy ML models using scikit-learn, Pandas, and Jupyter.",
  },
  {
    title: "Natural Language Processing Assessment",
    pdfUrl: "./pdfs/Natural Language Processing (NLP) Program.pdf",
    category: "NLP",
    description:
      "Extract insights from text using NLTK, spaCy, and transformers.",
  },
  {
    title: "Python Programming Assessment",
    pdfUrl: "./pdfs/Python Programming Program.pdf",
    category: "Python",
    description:
      "Learn Python basics, scripting, data handling, and automation.",
  },
  {
    title: "R Programming Assessment",
    pdfUrl: "./pdfs/R Programming Program.pdf",
    category: "R",
    description:
      "Analyze statistical data and create visualizations using R language.",
  },
  {
    title: "Unity Programming Assessment",
    pdfUrl: "./pdfs/Unity Program.pdf",
    category: "Unity",
    description:
      "Build interactive 2D/3D games and XR experiences using Unity.",
  },
  {
    title: "Unreal Engine Assessment",
    pdfUrl: "./pdfs/Unreal Engine Program.pdf",
    category: "Unreal Engine",
    description:
      "Develop AAA-quality games with Unreal Engine and Blueprints/C++.",
  },
];

const Assessment = () => {
  const [selectedCourse, setSelectedCourse] = useState("All");

  const filteredAssessments =
    selectedCourse === "All"
      ? assessments
      : assessments.filter((a) => a.category === selectedCourse);

  return (
    <div className="bg-white text-gray-800">
      {/* Top Purple Section */}
      <div className="bg-[#090040] text-white px-6 pt-26 pb-10 md:px-16">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Unlock Actionable Insights from Your Data
            </h2>
            <p className="text-base md:text-lg mb-6 max-w-2xl">
              Leverage data to make smarter business decisions. Master analysis,
              visualization, and BI skills to transform raw data into real-world
              impact.
            </p>

            {/* Dropdown + Avatars */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              {/* Dropdown */}
              <div className="bg-white rounded w-fit">
                <select
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="text-black rounded p-1.5 w-54  border focus:outline-none"
                >
                  <option value="All">Select a Course</option>
                  {[...new Set(assessments.map((a) => a.category))].map(
                    (category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Certified Trainers */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?img=${i + 1}`}
                      alt="trainer"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-white font-medium text-sm">
                  5,000+ Certified Trainers 🎓
                </span>
              </div>
            </div>

            {/* Access Modes */}
            <div className="bg-white backdrop-blur-3xl text-gray-800 rounded-xl shadow-md py-2 px-3 max-w-2xl relative z-10">
              <h4 className="font-semibold ml-3 text-xl text-[#090040] mb-4">
                Access to 3 training modes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-[#090040] text-xl mb-2">
                    <Computer />
                  </div>
                  <div className="font-semibold">Online Training</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[#090040] text-xl mb-2">
                    <FaPeopleArrows />
                  </div>
                  <div className="font-semibold">In-Person Training</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[#090040] text-xl mb-2">
                    <Watch />
                  </div>
                  <div className="font-semibold">Placed on Certed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1">
            <img
              src="https://netskill.com/wp-content/uploads/2024/09/nlorem-img.webp"
              alt="Data Business Insights"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Assessments List */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center text-[#090040]">
          Assessment Downloads
        </h3>
        <div className="grid gap-6">
          {filteredAssessments.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition"
            >
              <div className="text-base sm:text-lg font-medium text-gray-800">
                <h2>{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button
                onClick={() => saveAs(item.pdfUrl)}
                className="flex items-center gap-2 bg-[#090040] hover:bg-[#090040] text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                <Download size={16} />
                Download PDF
              </button>
            </div>
          ))}
          {filteredAssessments.length === 0 && (
            <p className="text-center text-gray-500">No assessments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
