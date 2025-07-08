import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RiGalleryView2 } from "react-icons/ri";
import MiniProjects from "../others/MiniProjects";
import Electronics from "../assets/Video/Electronics.mp4";
import Makeup from "../assets/Video/Makeup.mp4";
import Btn from "../others/Btn";
import projects from "../data/projectsData";


const Projects = ({ darkMode, themeColor }) => {

  return (
    <section
      id="project"
      className={`scroll-mt-28 px-4 py-12 transition-colors duration-300 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10" data-aos="fade-up">
        <Btn
          label="Projects"
          icon={RiGalleryView2}
          darkMode={darkMode}
          themeColor={themeColor}
        />

        <h2 className="text-3xl sm:text-4xl font-bold">
          Featured <span style={{ color: themeColor }}>Work</span>
        </h2>
        <p className="text-gray-500">
          A showcase of featured projects that highlight my technical skills, creativity, and real-world problem-solving.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.img} alt={`${project.title} screenshot`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold" style={{ color: themeColor }}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gray-600 text-white hover:scale-105 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-black transition"
                    style={{ backgroundColor: themeColor }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = darkMode ? "black" : "white";
                      e.currentTarget.style.color = themeColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = themeColor;
                      e.currentTarget.style.color = "black";
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="pt-14 text-3xl font-bold" style={{ color: themeColor }}>
          Mini Projects Works
        </h2>

        <p className="text-gray-500 text-justify">
        I’ve built a variety of mini projects using HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. These projects helped me strengthen my frontend skills through hands-on experience, focusing on responsive design, user interaction, and clean UI components. Each project reflects my ability to translate ideas into functional and visually engaging interfaces.
        </p>
        <div className=""grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify"">
            <MiniProjects themeColor={themeColor}/>  
        </div>

        <h2 className="pt-14 text-3xl font-bold" style={{ color: themeColor }}>
          WordPress Projects Works
        </h2>
        <p className="text-gray-500 text-justify">
        A collection of dynamic websites and responsive interfaces developed using WordPress. These projects showcase my experience with custom themes, plugins, content management, and modern design tailored for real-world business needs across industries like manufacturing, non-profit, and real estate.
        </p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 text-justify">
                <div
                  className="bg-zinc-800 border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
                  <video
                    src={Electronics}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold" style={{ color: themeColor }}>
                      Electronics Learning Website - WordPress
                    </h3>
                    <p className="text-sm text-gray-300">A fully responsive educational website built using WordPress for electronics learners. It includes pages for courses, tutorials, blogs, and contact forms. The design focuses on easy navigation, clean UI, and SEO optimization using essential plugins.</p>
                  </div>
                </div>

                <div
                  className="bg-zinc-800 border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
                  <video
                    src={Makeup}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold" style={{ color: themeColor }}>
                      Makeup Artist Website (WordPress)
                    </h3>
                    <p className="text-sm text-gray-300">A professional and responsive portfolio website for a makeup artist built using WordPress. Includes service pages, client gallery, booking form, testimonials, and contact section. Designed for SEO, mobile-friendliness, and easy content updates.</p>
                  </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
