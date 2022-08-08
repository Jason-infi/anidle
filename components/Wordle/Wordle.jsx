import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useWordle from "../../hooks/useWordle/useWordle";
import Grid from "../Grid/Grid";
import Keypad from "../Keypad/Keypad";
const Wordle = ({ answer, ansLength }) => {
  const {
    curGuess,
    handleKeyUp,
    guessArr,
    turn,
    isCorrect,
    usedKeys,
    handleKeyUpKeypad,
  } = useWordle(answer, ansLength);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (turn === 6) {
      toast(answer.toUpperCase(), {
        icon: "🙂",
        duration: 5000,
      });
      window.removeEventListener("keyup", handleKeyUp);
    }
    if (isCorrect) {
      toast("congratulations! you won", {
        icon: "👏",
      });
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
  console.log(answer);
  return (
    <>
      <Grid
        ansLength={ansLength}
        curGuess={curGuess}
        guessArr={guessArr}
        turn={turn}
      />
      <Keypad usedKeys={usedKeys} handleKeyUpKeypad={handleKeyUpKeypad} />
    </>
  );
};

export default Wordle;
