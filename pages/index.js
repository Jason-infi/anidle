import Head from "next/head";
import { useState, useEffect } from "react";
import solutions from "../lib/data/db";
import Wordle from "../components/Wordle/Wordle";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const newAnswer =
      solutions[Math.floor(Math.random() * solutions.length)].word;
    setAnswer(newAnswer);
  }, [setAnswer]);

  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center pb-10 select-none dark:bg-black'>
      <Head>
        <title>Anidle - A Wordle Clone</title>
        <meta charset='UTF-8'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no'
        ></meta>
        <meta
          property='description'
          content='Wordle, but with anime character names.Guess the name in 6 tries.'
        />
        <meta property='og:title' content='Anidle - A daily word game'></meta>
        <meta
          property='og:description'
          content='Guess the character name in 6 tries. A new puzzle is available each day.'
        ></meta>
      </Head>
      <Toaster />
      <Navbar />
      <Wordle answer={answer} ansLength={answer.length} />
    </div>
  );
}
