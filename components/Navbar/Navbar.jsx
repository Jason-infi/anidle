import React, { useState } from "react";
import howToPlayToast from "../toasts/howToPlayToast";
const Navbar = () => {
  const [darkmode, setDarkMode] = useState(false);
  return (
    <div className='flex justify-between items-center border-solid border-b border-[##d3d6da] dark:border-[#3a3a3c] w-full '>
      <div className='px-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 text-black dark:text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={() => {
            setDarkMode((prev) => !prev);
            const b = document.getElementsByTagName("body")[0];
            b.className = darkmode ? "dark" : "";
          }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        </svg>
      </div>

      <div className='py-4 font-sherif text-3xl font-extrabold text-black dark:text-white'>
        Anidle
      </div>
      <div className='px-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 text-black dark:text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={howToPlayToast}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
