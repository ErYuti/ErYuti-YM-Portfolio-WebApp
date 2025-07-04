import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { FaSpinner } from "react-icons/fa";

function Form({ darkMode, themeColor }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
    
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-transparent focus:outline-none border"
          style={{
            borderColor: themeColor,
            color: darkMode ? "black" : "white",
            backgroundColor: "transparent",
          }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-transparent focus:outline-none border"
          style={{
            borderColor: themeColor,
            color: darkMode ? "black" : "white",
            backgroundColor: "transparent",
          }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-transparent focus:outline-none border"
          style={{
            borderColor: themeColor,
            color: darkMode ? "black" : "white",
            backgroundColor: "transparent",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-md font-semibold transition-all border flex items-center justify-center gap-2"
        style={{
          backgroundColor: loading ? "#ccc" : themeColor,
          color: loading ? "#666" : "black",
          borderColor: "white",
          cursor: loading ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = darkMode ? "black" : "white";
            e.currentTarget.style.color = themeColor;
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = themeColor;
            e.currentTarget.style.color = "black";
          }
        }}
      >
        {loading && <FaSpinner className="animate-spin" />}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default Form;
