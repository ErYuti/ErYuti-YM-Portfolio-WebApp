import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSection from "./components/RightSection";
import FloatingButtons from "./others/FloatingButtons"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("#1ED760"); 


  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  return (
    <div className={`${darkMode ? "bg-white text-black" : "bg-black text-white"} min-h-screen`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} themeColor={themeColor} setThemeColor={setThemeColor}/>

      <main className="pt-[80px] flex flex-col lg:flex-row">
        
        <LeftSidebar darkMode={darkMode} themeColor={themeColor}/>

        <RightSection darkMode={darkMode} themeColor={themeColor}/>

      </main>

      <FloatingButtons darkMode={darkMode} themeColor={themeColor}/>
    </div>
  );
};

export default App;
