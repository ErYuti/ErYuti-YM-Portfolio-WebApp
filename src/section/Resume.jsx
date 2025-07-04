import React from "react";
import {
  FaGraduationCap,
  FaCode,
  FaTools,
  FaCertificate,
  FaUserCheck,
} from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import Btn from "../others/Btn";


const Resume = ({ darkMode, themeColor }) => {
  return (
    <section
      id="resume"
      className={`scroll-mt-28 px-4 py-12 transition-colors duration-300 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10" data-aos="fade-up">
        <Btn
          label="Resume"
          icon={RiProfileLine}
          darkMode={darkMode}
          themeColor={themeColor}
        />

        <h2 className="text-3xl sm:text-4xl font-bold">
          My <span style={{ color: themeColor }}>Resume</span>
        </h2>

        <div>
          <h3
            className="text-2xl font-semibold mb-5"
            style={{ color: themeColor }}
          >
            <FaGraduationCap className="inline-block mr-2" />
            Education
          </h3>

          <ul
            className={`space-y-10 ${darkMode ? "text-black" : "text-white"}`}
          >
            <li>
              <h4 className="text-xl font-medium mb-2">
                B.Tech in Electronics & Telecommunication
              </h4>
              <p>
                SVKM's DJ Sanghvi College, Mumbai –{" "}
                <span style={{ color: themeColor }} className="font-semibold">
                  CGPA: 8.61
                </span>
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                Diploma in Electronics & Telecommunication
              </h4>
              <p>
                St. John College of Engineering, Palghar –{" "}
                <span style={{ color: themeColor }} className="font-semibold">
                  92.12%
                </span>
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">SSC (10th Grade)</h4>
              <p>
                Bhuvanesh Kirtane Vidyalaya –{" "}
                <span style={{ color: themeColor }} className="font-semibold">
                  82.20%
                </span>
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3
            className="text-2xl font-semibold mb-5"
            style={{ color: themeColor }}
          >
            <FaCode className="inline-block mr-2" />
            Internships & Experience
          </h3>
          <div
            className={`space-y-10 ${darkMode ? "text-black" : "text-white"}`}
          >
            <div>
              <h4 className="text-lg font-semibold">
                Web Developer Intern @ OTET Infosystem Software Consultancy
                Services Pvt Ltd
              </h4>
              <p className="text-gray-600 italic font-bold">
                7 Months <br />
                Mumbai, Maharashtra, India · Remote
              </p>
              <ul className="list-disc pl-6 text-gray-500 mt-2">
                <li>
                  Responsively designed and developed industry-specific websites
                  utilising WordPress.
                </li>
                <li>
                  Created websites for manufacturing, charity, real estate
                </li>
                <li>
                  Updated website content using HTML, CSS, JavaScript and
                  ReactJS via FileZilla, ensuring seamless user experience and
                  functionality.
                </li>
                <li>
                  Solved problems efficiently, gained practical knowledge, and
                  learned new skills.
                </li>
                <li>
                  Acquired practical experience in web development, honing
                  skills in HTML, CSS, JavaScript, ReactJS, Web design, and
                  WordPress.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Trainee Engineer @ Adani Dahanu Thermal Power Station
              </h4>
              <p className="text-gray-600 italic font-bold">Ex-Internship</p>
              <p className="text-gray-500">
                • Gained industry exposure in operational processes
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Operational Trainee @ P.M. Electro-Auto Pvt Ltd
              </h4>
              <p className="text-gray-600 italic font-bold">Ex-Internship</p>
              <p className="text-gray-500">
                • Worked on electrical systems and PCB repairs
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3
            className="text-2xl font-semibold mb-8"
            style={{ color: themeColor }}
          >
            <FaCertificate className="inline-block mr-2" />
            Certifications
          </h3>

          <div className={`space-y-10 ${darkMode ? "text-black" : "text-gray-300"}`}>
          <div>
          <h4 className="text-xl font-semibold mb-4">➣ HTML Course, <span className="text-lg" style={{ color: themeColor }}> @Great Learning – Jan 2024</span></h4>
          <h4 className="text-xl font-semibold mb-4">➣ CSS Course, <span className="text-lg" style={{ color: themeColor }}> @Great Learning – Feb 2024</span></h4>
          <h4 className="text-xl font-semibold mb-4">➣ Responsive Web Design, <span className="text-lg" style={{ color: themeColor }}> @freeCodeCamp – Mar 2024</span></h4>
          <h4 className="text-xl font-semibold mb-4">➣ JavaScript Course With Certification: Unlocking the Power of JavaScript, <span className="text-lg" style={{ color: themeColor }}> @Scaler – Aug 2024</span></h4>
          <h4 className="text-xl font-semibold mb-4">➣ React Free Course, <span className="text-lg" style={{ color: themeColor }}> @Scaler – Sep 2024</span></h4>
          <h4 className="text-xl font-semibold mb-4">➣ JavaScript Specialist Certification, <span className="text-lg" style={{ color: themeColor }}> @Infosys Springboard – Mar 2025</span></h4>
          <h4 className="text-xl font-semibold mb-16">➣ ReactJS Certification, <span className="text-lg" style={{ color: themeColor }}> @Infosys Springboard – Apr 2025</span></h4>
          </div>
          </div>
        </div>

        <div>
          <h3
            className="text-2xl font-semibold mb-8"
            style={{ color: themeColor }}
          >
            <FaUserCheck className="inline-block mr-2" />
            Soft Skills
          </h3>
          <h4 className="text-xl font-semibold mb-4">➣ Team Collaboration</h4>
          <h4 className="text-xl font-semibold mb-4">➣ Time Management</h4>
          <h4 className="text-xl font-semibold mb-4">➣ Problem-Solving Attitude</h4>
          <h4 className="text-xl font-semibold mb-4">➣ Adaptability & Willingness to Learn</h4>
        </div>
      </div>
    </section>
  );
};

export default Resume;
