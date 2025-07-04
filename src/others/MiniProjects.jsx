import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import miniprojects from "../data/miniProjects"

const MiniProjects = ({ themeColor }) => {

  return (
    <>
      {miniprojects.map((project, index) => (
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
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-black transition"
                style={{ backgroundColor: themeColor }}              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MiniProjects;
