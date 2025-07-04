import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import Btn from "../others/Btn";
import Form from "../others/Form";;

const Contact = ({ darkMode, themeColor }) => {
  
  return (
    <section
      id="contact"
      className={`scroll-mt-28 px-4 py-12 transition-colors duration-300 ${
        darkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-10" data-aos="fade-up">
        <Btn
          label="Contact"
          icon={RiMailSendLine}
          darkMode={darkMode}
          themeColor={themeColor}
        />

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2" style={{ color: themeColor }}>
            Let’s Connect
          </h2>
          <p className="text-gray-400 max-w-xl text-justify">
            Whether it's a project idea, collaboration, or just a friendly hello — I'm all ears!
            Use the form or find me online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="mt-1 text-2xl" style={{ color: themeColor }} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">yutimeher@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-2xl" style={{ color: themeColor }} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8208375264</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-2xl" style={{ color: themeColor }} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">Mumbai, India</p>
              </div>
            </div>
          </div>
          <Form
          darkMode={darkMode}
          themeColor={themeColor}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
