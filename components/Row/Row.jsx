import React from "react";

const Row = ({ ansLength, guess, curGuess }) => {
  // let darkmode = false;
  // if (typeof window !== "undefined") {
  //   darkmode = document.getElementsByTagName("body")[0].className === "dark";
  // }
  if (curGuess) {
    let letters = [...curGuess];
    return (
      <div className='flex space-x-1'>
        {letters.map((letter, idx) => {
          return (
            <div
              key={idx}
              className={`rowletter dark:text-white text-black border-[#878a8c] ${
                ansLength === 6 ? "px-4" : ""
              } `}
              style={{
                animation: "bounce 0.2s ease-in-out forwards",
              }}
            >
              {letter.toUpperCase()}
            </div>
          );
        })}
        {[...Array(ansLength - letters.length)].map((_, idx) => (
          <div
            key={idx}
            className={`rowletter text-white dark:text-black ${
              ansLength === 6 ? "px-4" : ""
            } `}
          >
            &nbsp;
          </div>
        ))}
      </div>
    );
  }
  if (!guess) {
    return (
      <div className='flex space-x-1'>
        {Array(ansLength)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className={`rowletter text-white dark:text-black ${
                ansLength === 6 ? "px-4" : ""
              } `}
            >
              &nbsp;
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className='flex space-x-1 row'>
      {guess.map((char, idx) => (
        <div
          key={idx}
          className={`rowletter ${ansLength === 6 ? "px-4" : ""} flipCard ${
            char.color
          }`}
          style={{
            animation: "flip 0.5s ease forwards",
            animationDelay: `${idx * 0.2}s`,
            // backgroundColor: `${
            //   darkmode && char.color === "#787c7e" ? "#3a3a3c" : ""
            // }`,
            // borderColor: `${
            //   darkmode && char.color === "#787c7e" ? "#3a3a3c" : ""
            // }`,
          }}
        >
          {char.key.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Row;
