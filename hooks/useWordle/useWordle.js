import { useState } from "react";
import toast from "react-hot-toast";

const useWordle = (answer, ansLength) => {
  const pink_color = "#FF4D6D";
  const cyan_color = "#7BDFF2";
  const gray_color = "#787c7e";

  const [turn, setTurn] = useState(0);
  const [curGuess, setCurGuess] = useState("");
  const [guessArr, setGuessArr] = useState([...Array(6)]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [history, setHistory] = useState([]);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    const hashmap = new Map();
    const Answer = [...answer];

    const forGuess = [...Array(answer.length)];
    const Guess = [...curGuess];

    for (let i = 0; i < Answer.length; i++) {
      if (hashmap.get(Answer[i]) === undefined) {
        hashmap.set(Answer[i], 1);
      } else {
        hashmap.set(Answer[i], hashmap.get(Answer[i]) + 1);
      }
    }

    Guess.forEach((char, idx) => {
      if (char === Answer[idx]) {
        forGuess[idx] = { key: char, color: "#FF4D6D" };
        hashmap.set(char, hashmap.get(char) - 1);
      }
    });
    Guess.forEach((char, idx) => {
      if (char !== Answer[idx] && hashmap.get(char) > 0) {
        forGuess[idx] = { key: char, color: "#7BDFF2" };
        hashmap.set(char, hashmap.get(char) - 1);
      } else if (char !== Answer[idx]) {
        forGuess[idx] = { key: char, color: "#787c7e" };
      }
    });

    return forGuess;
  };

  const addNewGuess = (forGuess) => {
    if (curGuess === answer) {
      setIsCorrect(true);
    }
    setGuessArr((prev) => {
      const newArr = [...prev];
      newArr[turn] = forGuess;
      return newArr;
    });
    setHistory((prev) => {
      return [...prev, curGuess];
    });
    setTurn((prev) => prev + 1);

    setCurGuess("");

    setUsedKeys((prev) => {
      const newUsedKeys = { ...prev };

      forGuess.forEach((letter) => {
        const currentColor = newUsedKeys[letter.key];

        if (letter.color === pink_color) {
          newUsedKeys[letter.key] = pink_color;
          return;
        }
        if (letter.color === cyan_color && currentColor !== pink_color) {
          newUsedKeys[letter.key] = cyan_color;
          return;
        }
        if (
          letter.color === gray_color &&
          currentColor !== pink_color &&
          currentColor !== cyan_color
        ) {
          newUsedKeys[letter.key] = gray_color;
          return;
        }
      });
      return newUsedKeys;
    });
  };

  const handleKeyUp = (e) => {
    if (e.getModifierState("CapsLock")) {
      toast.error("CAPSLOCK is on");
      return;
    }
    if (e.key === "Backspace") {
      setCurGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (e.key === "Enter") {
      if (turn > 5) {
        return;
      }
      if (history.includes(curGuess)) {
        toast.error("Word Already Used");
        return;
      }
      if (curGuess.length !== ansLength) {
        toast.error("Not Enough Letters");
        return;
      }
      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (/^[A-Za-z]$/.test(e.key)) {
      if (curGuess.length < ansLength) {
        setCurGuess((prev) => {
          return prev + e.key;
        });
      }
    }
  };
  // keyboard buttons event listener
  const handleKeyUpKeypad = (value) => {
    if (isCorrect) {
      return;
    }
    if (value === "Backspace") {
      setCurGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (value === "Enter") {
      if (turn > 5) {
        return;
      }
      if (history.includes(curGuess)) {
        toast.error("Word Already Used");
        return;
      }
      if (curGuess.length !== ansLength) {
        toast.error("Not Enough Letters");
        return;
      }
      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (/^[A-Za-z]$/.test(value)) {
      if (curGuess.length < ansLength) {
        setCurGuess((prev) => {
          return prev + value;
        });
      }
    }
  };

  return {
    turn,
    curGuess,
    guessArr,
    isCorrect,
    handleKeyUp,
    usedKeys,
    handleKeyUpKeypad,
  };
};

export default useWordle;
