import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";

const colors = [
  { name: "Red", class: "bg-red-400", value: "#F87171" },
  { name: "Orange", class: "bg-orange-400", value: "#FB923C" },
  { name: "Violet", class: "bg-violet-400", value: "#A78BFA" },
  { name: "Green", class: "bg-green-400", value: "#4ADE80" },
  { name: "Blue", class: "bg-blue-400", value: "#60A5FA" },
  { name: "Yellow", class: "bg-yellow-400", value: "#FACC15" },
];

const ColorSelector = ({ themeColor, setThemeColor, darkMode }) => {

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (color) => {
    setThemeColor(color);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center p-2 rounded-full border hover:scale-105 transition-all"
        title="Choose Theme Color"
      >
        <FaPalette className={`${darkMode ? "text-black" : "text-white"} text-lg`} 
        style={{ color: themeColor }}
        />
      </button>

      {open && (
        <div
          className={`absolute right-0 mt-2 p-2 rounded-xl shadow-lg bg-opacity-90 ${
            darkMode ? "bg-white" : "bg-zinc-800"
          } flex gap-3 z-50 transition-all`}
        >
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleSelect(color.value)}
              className={`w-6 h-6 rounded-full border-2 hover:scale-110 transition-all ${
                color.class
              } ${
                themeColor === color.value
                  ? "ring-2 ring-offset-2 ring-white"
                  : "border-white"
              }`}
              title={color.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorSelector;
