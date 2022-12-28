import Head from "next/head";
import { useState, useEffect } from "react";
import solutions from "../lib/data/db";
import Wordle from "../components/Wordle/Wordle";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import styles from "../styles/Home.module.css";
import { bgImageState, bgColorState } from "../atoms/bgAtom";
import { useRecoilState } from "recoil";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [bgImage, setBgImage] = useRecoilState(bgImageState);
  // const [bgColor, setBgColor] = useRecoilState(bgColorState);

  useEffect(() => {
    const newAnswer =
      solutions[Math.floor(Math.random() * solutions.length)].word;
    setAnswer(newAnswer);
  }, [setAnswer]);

  return (
    <>
      <div
        className={`${styles.mainBg}`}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className='absolute w-full h-full flex flex-col justify-between items-center pb-10 select-none'>
        <Head>
          <title>Anidle - A Wordle Clone</title>
          <meta charset='UTF-8'></meta>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          ></meta>
          <meta
            name='description'
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
    </>
  );
}
