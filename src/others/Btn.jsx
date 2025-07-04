import React from 'react'

const Btn = ({ label, icon: Icon, darkMode, themeColor }) => {
  return (
    <>
    <button
      className={`px-5 py-2 rounded-full text-xl font-medium border-2 transition-all duration-300 flex items-center`}
      style={{
        borderColor: darkMode ? "black" : "white",
        color: darkMode ? "black" : "white",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = darkMode ? "black" : "white";
        e.currentTarget.style.color = darkMode ? "white" : "black";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = darkMode ? "black" : "white";
      }}
    >
      {Icon && <Icon className="inline-block mr-2" style={{ color: themeColor }} />}
      {label}
    </button>
    </>
  )
}

export default Btn
