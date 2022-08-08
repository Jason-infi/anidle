import React, { useState } from "react";
import howToPlayToast from "../toasts/howToPlayToast";
import linkTree from "../toasts/linktree";
const Navbar = () => {
  const [darkmode, setDarkMode] = useState(false);
  return (
    <div className='flex justify-between items-center border-solid border-b border-[##d3d6da] dark:border-[#3a3a3c] w-full '>
      <div className='lg:px-6 px-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='lg:w-8 lg:h-8 w-7 h-7 text-black dark:text-white'
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

      <div className='lg:py-3 py-2 lg:text-3xl text-2xl  text-black dark:text-white heading'>
        Anidle
      </div>
      <div className='flex items-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='lg:w-7 lg:h-7 w-6 h-6 text-black dark:text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            onClick={linkTree}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
            />
          </svg>
        </div>
        <div className='lg:px-6 px-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='lg:w-8 lg:h-8 w-7 h-7 text-black dark:text-white'
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
    </div>
  );
};

export default Navbar;
