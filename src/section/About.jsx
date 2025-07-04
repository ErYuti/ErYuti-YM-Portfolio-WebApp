import React from "react";
import { RiUserStarLine } from "react-icons/ri";
import Btn from "../others/Btn";

const About = ({ darkMode, themeColor }) => {
  return (
    <section
      id="about"
      className={`scroll-mt-28 px-4 py-12 transition-colors duration-300 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10" data-aos="fade-up">

      <Btn label="About" icon={RiUserStarLine} darkMode={darkMode} themeColor={themeColor}/>

        <h2 className="text-3xl sm:text-4xl font-bold">
          Who <span style={{ color: themeColor }}>I Am</span>
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl text-justify space-y-2">
          I’m{" "}
          <strong>
            Yuti Meher
          </strong>
          , a highly motivated and detail-oriented{" "}
          <strong>Front-End Web Developer</strong> from Mumbai, Maharashtra,
          India. I specialize in building interactive, responsive, and
          user-friendly interfaces using technologies like HTML, CSS,
          JavaScript, React, and Tailwind CSS. I completed my B.Tech in
          Electronics & Telecommunication and am actively seeking full-time or
          internship roles in web development.
        </p>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold" style={{ color: themeColor }}>
            What I Believe In
          </h3>
          <ul className="list-disc pl-6 text-gray-500 space-y-1">
            <li>Clean, semantic code that’s accessible and scalable</li>
            <li>User-first design principles for intuitive UX</li>
            <li>Collaboration, feedback, and continuous improvement</li>
            <li>Proactive learning and adapting to new technologies</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-2xl font-semibold" style={{ color: themeColor }}>
            Co-Curricular Activities
          </h3>
          <ul className="list-disc pl-6 text-gray-500 space-y-1 mt-2">
            <li>DJ Strike Project – 2021</li>
            <li>State-Level Technical Project Competition – Jan 2020</li>
            <li>Robotics Workshop – Aug 2019</li>
            <li>Technical Paper Presentation – Jan 2018</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold" style={{ color: themeColor }}>
            Outside of Tech
          </h3>
          <ul className="list-none space-y-1 text-gray-500 mt-2">
            <li>📸 Photography & Video Editing</li>
            <li>🌏 Traveling & Exploring New Places</li>
            <li>🎬 Creative storytelling through visuals</li>
            <li>🎵 Music for focus and inspiration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
