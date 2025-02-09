import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar({ theme, toggleTheme }) {
  return (
    <div className={`w-full h-16 px-12 flex justify-between items-center ${theme === 'dark' ? 'bg-[#2B3945]' : 'bg-[#FFFFFF]'}`}>
      <h2 className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Where in the world?</h2>

      <div className="flex justify-center items-center gap-2 cursor-pointer" onClick={toggleTheme}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
        <h3 className={`font-bold text-md ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</h3>
      </div>
    </div>
  );
}

export default NavBar;
