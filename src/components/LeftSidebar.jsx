import React from "react";
import { FaGithub, FaEnvelope, FaLinkedinIn, FaPhoneAlt,} from "react-icons/fa";
import { RiMailUnreadLine } from "react-icons/ri";
import YutiImg from "../assets/images/Yuti.jpg";

const LeftSidebar = ({ darkMode, themeColor }) => {
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/drive/folders/1Vo158w-g_qlwjjOXDWUk5YSuT7nq4owd?usp=sharing",
      "_blank"
    );
  };

  return (
    <aside className="w-full lg:w-[25%] h-auto lg:h-[calc(100vh-80px)] lg:sticky top-20 z-10 flex justify-center px-4 py-7">
      <div
        className={`w-full max-w-xs rounded-2xl border transition-all duration-400 ease-in-out cursor-pointer shadow-md p-6 flex flex-col items-center text-center justify-center ${
          darkMode
            ? "bg-white text-black border-black"
            : "bg-black text-white border-white"
        }`}
        style={{
          boxShadow: `0 0 10px 0 ${themeColor}`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = themeColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = darkMode ? "black" : "white")
        }
      >
        <img
          src={YutiImg}
          alt="Yuti Meher"
          className="w-38 h-40 rounded-full border object-cover object-center mb-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />

        <div className="mb-6">
          <h1
            className="text-3xl font-bold border-b-2 border-transparent transition-all hover:border-current"
            style={{ borderColor: themeColor }}
          >
            Yuti Meher
          </h1>
          <p className="text-lg mt-3 font-medium text-gray-500">
            Fresher Software Developer
          </p>
          <p className="text-lg mt-1 font-medium text-gray-400">
            Available to join immediately
          </p>
        </div>

        <div className="flex justify-center gap-6 text-2xl mb-3">
          <a
            href="tel:+918208375264"
            target="_blank"
            className="transition-all"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = themeColor)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <FaPhoneAlt />
          </a>
          <a
            href="mailto:yutimeher@gmail.com"
            className="transition-all"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = themeColor)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/ErYuti"
            target="_blank"
            className="transition-all"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = themeColor)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yuti-meher-a26519245/"
            target="_blank"
            className="transition-all"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = themeColor)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <FaLinkedinIn />
          </a>
        </div>

        <button
          onClick={handleResumeDownload}
          className="mt-3 flex items-center gap-3 px-6 py-3 rounded-full border font-bold transition-all duration-300"
          style={{
            backgroundColor: themeColor,
            color: darkMode ? "black" : "black",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = darkMode ? "black" : "white";
            e.currentTarget.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = themeColor;
            e.currentTarget.style.color = "black";
          }}
        >
          <RiMailUnreadLine className="text-xl" />
          My Resume
        </button>
      </div>
    </aside>
  );
};

export default LeftSidebar;
