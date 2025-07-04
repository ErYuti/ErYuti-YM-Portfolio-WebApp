import React from "react";
import Introduction from "../section/Introduction";
import About from "../section/About";
import Resume from "../section/Resume";
import Skills from "../section/Skills";
import Projects from "../section/Projects";
import Contact from "../section/Contact";

const RightSection = ({ darkMode, themeColor }) => {
  return (
    <section className="lg:w-[75%] w-full px-6 py-10 space-y-16 overflow-y-auto scroll-smooth">
      <div id="info" className="scroll-mt-24">
        <Introduction darkMode={darkMode} themeColor={themeColor} />
      </div>

      <div id="about" className="scroll-mt-24">
        <About darkMode={darkMode} themeColor={themeColor} />
      </div>

      <div id="resume" className="scroll-mt-24">
        <Resume darkMode={darkMode} themeColor={themeColor} />
      </div>

      <div id="skill" className="scroll-mt-24">
        <Skills darkMode={darkMode} themeColor={themeColor} />
      </div>

      <div id="project" className="scroll-mt-24">
        <Projects darkMode={darkMode} themeColor={themeColor} />
      </div>

      <div id="contact" className="scroll-mt-24">
        <Contact darkMode={darkMode} themeColor={themeColor} />
      </div>
    </section>
  );
};

export default RightSection;
