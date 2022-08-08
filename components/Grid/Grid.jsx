import React from "react";
import Row from "../Row/Row";
const Grid = ({ turn, guessArr, ansLength, curGuess }) => {
  return (
    <div className='flex flex-col space-y-1 p-2'>
      {guessArr.map((guess, idx) => {
        if (turn === idx) {
          return <Row key={idx} ansLength={ansLength} curGuess={curGuess} />;
        }
        return <Row key={idx} ansLength={ansLength} guess={guess} />;
      })}
    </div>
  );
};

export default Grid;
