import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaRobot, FaArrowUp } from "react-icons/fa";

const FloatingButtons = ({ darkMode, themeColor }) => {
  const whatsappNumber = "918208375264";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openChatbot = () => {
    alert("Chatbot coming soon!");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      <button
        onClick={openChatbot}
        className="w-14 h-14 flex items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: "#2563EB" }}
        title="Open Chatbot"
      >
        <FaRobot className="text-2xl" />
      </button>

      <button
        onClick={scrollToTop}
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md transition-opacity duration-300 hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
        title="Back to Top"
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: themeColor,
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default FloatingButtons;
