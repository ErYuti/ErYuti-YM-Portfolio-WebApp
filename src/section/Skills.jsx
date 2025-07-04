import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaChrome,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiMysql } from "react-icons/si";
import { RiBubbleChartFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import Btn from "../others/Btn";


const Skills = ({ darkMode, themeColor }) => {
  return (
    <section
      id="skill"
      className={`scroll-mt-28 px-4 py-12 transition-colors duration-300 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10" data-aos="fade-up">
        <Btn
          label="Skills"
          icon={RiBubbleChartFill}
          darkMode={darkMode}
          themeColor={themeColor}
        />

        <h2 className="text-3xl sm:text-4xl font-bold">
          Technical <span style={{ color: themeColor }}>Expertise</span>
        </h2>

        <h3
          className="text-2xl font-semibold mt-6"
          style={{ color: themeColor }}
        >
          Programming languages
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-xl">
          <div className="flex flex-col items-center gap-2">
            <FaHtml5 className="text-orange-500 text-4xl hover:scale-110 transition" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaCss3Alt className="text-blue-500 text-4xl hover:scale-110 transition" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaJs className="text-yellow-400 text-4xl hover:scale-110 transition" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiMysql className="text-yellow-400 text-4xl hover:scale-110 transition" />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaReact className="text-cyan-400 text-4xl hover:scale-110 transition" />
            <span>React.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTailwindcss className="text-sky-400 text-4xl hover:scale-110 transition" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaBootstrap className="text-purple-600 text-4xl hover:scale-110 transition" />
            <span>Bootstrap</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaWordpress className="text-blue-700 text-4xl hover:scale-110 transition" />
            <span>WordPress</span>
          </div>
        </div>

        <h3
          className="text-2xl font-semibold mt-6"
          style={{ color: themeColor }}
        >
          Development Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-xl">
          <div className="flex flex-col items-center gap-2">
            <BiLogoVisualStudio className="text-blue-500 text-4xl" />
            <span>VS Code</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaChrome className="text-yellow-300 text-4xl" />
            <span>DevTools</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaTerminal className="text-gray-600 text-4xl" />
            <span>Terminal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaTools className="text-zinc-600 text-4xl" />
            <span>FileZilla</span>
          </div>
        </div>

        <h3
          className="text-2xl font-semibold mt-6"
          style={{ color: themeColor }}
        >
          Version Control & UI Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-xl">
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt className="text-orange-600 text-4xl" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGithub className="text-gray-600 text-4xl" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiCanva className="text-indigo-500 text-4xl" />
            <span>Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
