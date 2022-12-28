import React from "react";
import { themeContext, themes } from "../context/themeContext";
import { useContext, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(themeContext);
  return (
    <>
      {!darkMode ? (
        <SunIcon
          className='hover:scale-105 h-6 w-6 dark:text-white transition-all ease-in cursor-pointer'
          onClick={() => {
            setDarkMode((prev) => !prev);
            changeTheme(darkMode ? themes.dark : themes.light);
          }}
        />
      ) : (
        <MoonIcon
          className='hover:scale-105 h-6 w-6 transition-all ease-in cursor-pointer'
          onClick={() => {
            setDarkMode((prev) => !prev);
            changeTheme(darkMode ? themes.dark : themes.light);
          }}
        />
      )}
    </>
  );
};

export default DarkModeBtn;
