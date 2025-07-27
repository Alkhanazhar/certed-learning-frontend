// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useAuth } from "@/context/AuthContext";
// import { Menu } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AuthButton from "../AuthButton";

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const { user, isLoggedIn, login, logout } = useAuth();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-4 ${
//         scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
//         <img
//           src="https://certedtechnologies.com/uploads/logo/logo_647e49475e8420-66720487-52328278.png"
//           alt="Logo"
//           className="w-fit h-12 mix-blend-multiply cursor-pointer"
//           onClick={() => navigate("/")}
//         />

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6">
//           {[
//             // { label: "Assessment", path: "/assessment" },
//             { label: "Corporate Training", path: "/training" },
//             { label: "Products", path: "/product" },
//             { label: "Contact Us", path: "/contact" },
//             { label: "Courses", path: "/courses" },
//           ].map((item) => (
//             <button
//               key={item.label}
//               onClick={() => navigate(item.path)}
//               className={`text-sm font-light transition-colors ${
//                 scrolled
//                   ? "text-black hover:text-primary"
//                   : "text-white hover:text-[#7b7890]"
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}

//           <AuthButton />

//           <button
//             className="bubbleeffectbtn border-white border"
//             type="button"
//             onClick={() => navigate("/contact")}
//             // className={
//             //   scrolled
//             //     ? "bg-[#090040] font-semibold text-white"
//             //     : "bg-white font-semibold text-[#090040]"
//             // }
//           >
//             <span className="text-sm font-medium"> Schedule a Call</span>
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button className="md:hidden" variant="outline" size="icon">
//               <Menu className="text-black" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent>
//             <div className="flex flex-col gap-4 mt-8 px-4">
//               <Button variant="outline" onClick={() => navigate("/assessment")}>
//                 Assessment
//               </Button>
//               <Button variant="outline" onClick={() => navigate("/training")}>
//                 Corporate Training
//               </Button>
//               <Button variant="outline" onClick={() => navigate("/product")}>
//                 Products
//               </Button>
//               <Button variant="outline" onClick={() => navigate("/contact")}>
//                 Contact Us
//               </Button>
//               <Button variant="outline" onClick={() => navigate("/courses")}>
//                 Courses
//               </Button>
//               {isLoggedIn ? (
//                 <Button variant="outline" onClick={logout}>
//                   Logout
//                 </Button>
//               ) : (
//                 <Button variant="outline" asChild>
//                   <Link to="/login">Login</Link>
//                 </Button>
//               )}
//               <Button
//                 className="bg-[#090040] text-white hover:bg-[#090040]"
//                 onClick={() => navigate("/contact")}
//               >
//                 Schedule a Call
//               </Button>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Menu, X, ArrowRight, Zap, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../AuthButton";

const navItems = [
  { label: "Corporate Training", path: "/training" },
  { label: "Products", path: "/product" },
  { label: "Contact Us", path: "/contact" },
  { label: "Courses", path: "/courses" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? " bg-background/10  shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://certedtechnologies.com/uploads/logo/logo_647e49475e8420-66720487-52328278.png"
                  alt="Logo"
                  className="w-fit h-12 mix-blend-multiply cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { label: "Corporate Training", path: "/training" },
                { label: "Products", path: "/product" },
                { label: "Contact Us", path: "/contact" },
                { label: "Courses", path: "/courses" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className={`text-sm font-light transition-colors ${
                    isScrolled
                      ? "text-black hover:text-primary"
                      : "text-white hover:text-[#7b7890]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <motion.div
              className="hidden items-center space-x-3 lg:flex"
              variants={itemVariants}
            >
              <AuthButton />
              <button
                className="bubbleeffectbtn border-white border"
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
            </motion.div>

            <motion.button
              className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu
                  className="h-6 w-6"
                  color={isScrolled ? "black" : "white"}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="border-border bg-background fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div key={item.label} variants={mobileItemVariants}>
                      <Link
                        to={item.path}
                        className="text-foreground hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="border-border space-y-3 border-t pt-6"
                  variants={mobileItemVariants}
                >
                  <Link
                    href="/login"
                    className="text-foreground hover:bg-muted block w-full rounded-lg py-3 text-center font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-foreground text-background hover:bg-foreground/90 block w-full rounded-lg py-3 text-center font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
