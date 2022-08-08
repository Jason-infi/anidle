import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
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
      <Toaster />
      <Navbar />
      <Wordle answer={answer} ansLength={answer.length} />
    </div>
  );
}
