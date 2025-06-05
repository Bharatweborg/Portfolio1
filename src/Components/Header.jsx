import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { db } from "../firebase"; // your firebase config file
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Header = () => {
  // Toggle the menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null); // null / true / false

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => {
    setContactFormOpen(false);
    setFormData({ name: "", email: "", message: "" });
    setSubmitSuccess(null);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: Timestamp.now(),
      });
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setContactFormOpen(false); // close modal after short delay
      }, 1000); // 1 second delay so user can see success message briefly
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header
      className="absolute w-full  z-50 transition-all duration-300">
      <div
        className="container mx-auto px-4 sm:px-6 
        lg:px-8 flex items-center justify-between h-16
        md:h-20"
      >
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div
            className="h-10 w-10 rounded-xl
              bg-gradient-to-r from-gray-500 to-gray-100
              flex items-center justify-center text-purple-600 
              font-bold text-xl mr-3"
          >
            H
          </div>

          <span
            className="text-xl font-bold 
              bg-gradient-to-r from-gray-300 to-gray-100 
              bg-clip-text text-transparent"
          >
            haranthx
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.name === "Contact") {
                  e.preventDefault(); // prevent page jump
                  openContactForm(); // call your function
                }
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative text text-gray-800 dark:text-gray-200
              hover:text-violet-600 dark:hover:text-violet-400 font-medium 
              transition-colors duration-300 group"
            >
              {item.name}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5
              bg-violet-600 group-hover:w-full transition-all
              duration-300"
              ></span>
            </motion.a>
          ))}
        </nav>

        {/* Social icons - Desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300"
            href="https://github.com/haranathmondal"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/haranathmondal/"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300"
            href="https://x.com/HaranathX"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 
            dark:hover:text-violet-400 transition-colors duration-300"
            href="mailto:haranathx@gmail.com"
          >
            <FiMail className="w-5 h-5" />
          </motion.a>

          {/* Hire Me Button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r
            from-gray-400 to-gray-100 text-violet-700 font-bold 
            hover:from-violet-700 hover:to-purple-700 hover:text-white
            transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-300">
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-gray-900 dark:bg-gray-900 shadow-lg 
                 px-4 py-5 space-y-5"
      >
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                toggleMenu();
                if (item.name === "Contact") {
                  e.preventDefault();
                  openContactForm();
                }
              }}
              className="text-gray-300 font-medium py-2"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social + Button */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/haranathmondal">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/haranathmondal/">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://x.com/HaranathX">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>
            <a href="mailto:haranathx@gmail.com">
              <FiMail className="h-5 w-5 text-gray-300" />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r
             from-gray-400 to-gray-100 text-violet-700 font-bold 
             hover:from-violet-700 hover:to-purple-700 hover:text-white
             transition-all duration-500"
          >
            Hire Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            // onClick={closeContactForm}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-gray-900 rounded-xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeContactForm}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              >
                <FiX size={24} />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-gray-100">Contact Me</h2>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  required
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  required
                />
                <textarea
                  id="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="px-4 py-2 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-md transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitSuccess === true && (
                  <p className="text-green-400 mt-2">Message sent successfully!</p>
                )}
                {submitSuccess === false && (
                  <p className="text-red-400 mt-2">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
