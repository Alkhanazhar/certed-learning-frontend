import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon } from "lucide-react";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="max-w-7xl py-8 mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-500">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="text-gray-500">
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>Corporate Training</li>
            <li>Learning Management System</li>
            <li>Learning Experience Platform</li>
            <li>Frontline Training</li>
            <li>E-Learning Platform</li>
            <li>AI Roleplay</li>
            <li>Certed Learning Co-Author.ai</li>
            <li>AI-Powered Assessment</li>
          </ul>
        </div>

        <div className="text-gray-500">
          <h2 className="text-lg font-semibold mb-3">Contact Details</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> +91 8920158923 (India)
            </li>
            <li className="flex items-center gap-2">
              <MailIcon /> support@certedtechnologies.com
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-3 mb-4 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
            <FaYoutube />
          </div>
          <button
            className="bubbleeffectbtn"
            type="button"
            onClick={() => navigate("/contact")}
            // className={
            //   scrolled
            //     ? "bg-[#090040] font-semibold text-white"
            //     : "bg-white font-semibold text-[#090040]"
            // }
          >
            <span className="text-sm font-medium"> Schedule a Call</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
