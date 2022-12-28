import React, { useEffect, useState } from "react";
import letters from "./letters";

const Keypad = ({ usedKeys, handleKeyUpKeypad }) => {
  return (
    <div className='grid grid-cols-10 gap-2 max-w-lg dark:text-white text-black text-sm font-sherif font-medium m-3'>
      {letters.map((char) => {
        const color = usedKeys[char.key];
        let darkmode = false;
        if (typeof window !== "undefined") {
          darkmode =
            document.getElementsByTagName("body")[0].className === "dark";
        }
        if (color === "#FF4D6D" || color === "#7BDFF2" || color === "#787c7e") {
          return (
            <button
              key={char.key}
              className='dark:bg-[#818384] bg-[#d3d6da]  p-2 rounded inline-block text-center shadow-md '
              style={{
                backgroundColor: `${
                  darkmode && color === "#787c7e" ? "#3a3a3c" : color
                }`,
                color: "white",
              }}
              onClick={() => handleKeyUpKeypad(char.key)}
            >
              {char.key.toUpperCase()}
            </button>
          );
        } else {
          return (
            <button
              key={char.key}
              className='dark:bg-[#818384] bg-[#d3d6da] p-2 rounded inline-block text-center shadow-md '
              onClick={() => handleKeyUpKeypad(char.key)}
            >
              {char.key.toUpperCase()}
            </button>
          );
        }
      })}
      <button
        key='enter'
        className='dark:bg-[#818384] bg-[#d3d6da]  p-1 rounded col-span-2 text-center shadow-md'
        onClick={() => handleKeyUpKeypad("Enter")}
      >
        ENTER
      </button>
      <button
        key='backspace'
        className='dark:bg-[#818384] bg-[#d3d6da]  p-1 rounded col-span-2 text-center shadow-md'
        onClick={() => handleKeyUpKeypad("Backspace")}
      >
        BACK
      </button>
    </div>
  );
};

export default Keypad;
