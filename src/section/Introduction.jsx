import React from "react";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Btn from "../others/Btn";

const Introduction = ({ darkMode, themeColor }) => {
  return (
    <section
      id="info"
      className={`scroll-mt-28 px-4 py-10 transition-colors duration-300 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6 items-start" data-aos="fade-up" >

        <Btn label="Introduction" icon={FaHome} darkMode={darkMode} themeColor={themeColor} />

        <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
          Hello!, I'm <span style={{ color: themeColor }}>Yuti Meher</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-medium">
          I’m a{" "}
          <TypeAnimation
            sequence={[
              "Software Web Developer",
              2000,
              "Software Front-End Developer",
              2000,
              "Software UI/UX Developer",
              2000,
              "Software Full Stack Developer",
              2000,
              "Software WordPress Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold bg-gradient-to-r from-rose-600 via-cyan-400 to-purple-700 bg-clip-text text-transparent"
          />
        </h2>

        <p className="text-lg text-gray-500 leading-relaxed max-w-4xl text-justify space-y-2">
          I specialize in creating responsive and user-friendly web interfaces
          using modern technologies like Reactjs, TailwindCSS, and JavaScript.
          With a keen eye for detail and a passion for building accessible
          digital experiences, I’m currently seeking full-time or internship
          opportunities in web development.
        </p>

        <a
          href="#contact"
          className="mt-4 inline-block px-6 py-2 rounded-full font-medium transition"
          style={{
            backgroundColor: themeColor,
            color: "black",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = darkMode
              ? "black"
              : "white";
            e.currentTarget.style.color = themeColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = themeColor;
            e.currentTarget.style.color = "black";
          }}
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default Introduction;
