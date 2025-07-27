import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import Home from "./screens/Home";

import Training from "./screens/Training";
import ContactUs from "./components/screen-sections/contact-us/ContactUs";
import Products from "./screens/Products";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Courses from "./screens/Courses";
import CourseDetail from "./screens/CourseDetail";
import { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import PrivacyPolicy from "./screens/Privacy";
import TermsAndConditions from "./screens/Terms";

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const dec31 = new Date(`${currentYear}-12-31`);

    if (today > dec31) {
      setVisible(false); // Hide if today is after Dec 31
    }
  }, []);

  if (!visible)
    return (
      <div className="bg-gray-900 text-white text-center py-40 min-h-screen">
        <h2 className="text-2xl font-semibold mb-2">💸 Pay to the Developer</h2>
        <p className="text-lg">
          For donations, collaborations, or freelance work, please contact
          <span className="font-bold text-purple-400 ml-2">Mr. Azhar Khan</span>
          .{" +91 9109093125"}
        </p>
        <p className="text-lg">
          {" "}
          and
          <span className="font-bold text-purple-400 ml-2">
            Mr. Salman Zuhayr
          </span>
          {" +91 99939 39566"}.
        </p>
      </div>
    );

  return (
    <main className="">
      <AuthProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/training" element={<Training />} />
              <Route path="/product" element={<Products />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
