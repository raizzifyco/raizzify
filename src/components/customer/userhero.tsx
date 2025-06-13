"use client";
import 'animate.css';
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Hero5 from "../../../public/images/user1/img1.svg";
import Hero6 from "../../../public/images/user1/appstore.svg";
import Hero7 from "../../../public/images/user1/google.svg";
import Switch from "../switch";

const UserHero = () => {
  // UseMemo prevents warnings and unnecessary re-creation
  const words = useMemo(() => ["One Visit. Endless Returns."], []);
  const wordList = useMemo(() => ["RAIZZIFY"], []);

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      setText(updatedText);
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  const [texts, setTexts] = useState("");
  const [wordIndexs, setWordIndexs] = useState(0);
  const [charIndexs, setCharIndexs] = useState(0);
  const [isDeletings, setIsDeletings] = useState(false);

  useEffect(() => {
    const currentWord = wordList[wordIndexs];
    const timeout = setTimeout(() => {
      const updatedText = isDeletings
        ? currentWord.substring(0, charIndexs - 1)
        : currentWord.substring(0, charIndexs + 1);

      setTexts(updatedText);
      setCharIndexs((prev) => prev + (isDeletings ? -1 : 1));

      if (!isDeletings && charIndexs === currentWord.length) {
        setIsDeletings(true);
      } else if (isDeletings && charIndexs === 0) {
        setIsDeletings(false);
        setWordIndexs((prev) => (prev + 1) % wordList.length);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [charIndexs, isDeletings, wordIndexs, wordList]);

  return (
    <div>
      <Switch />
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-l from-[#F4E4A5] to-[#59E5CE] min-h-screen px-4 md:px-10 py-10">
        
        <div className="w-full max-w-screen-xl">
          <Image
            src={Hero5}
            alt="Hero5"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="absolute top-4 w-full flex justify-center">
          <div className="animate__animated animate__shakeY animate__repeat-2 text-center text-[#416660] text-sm md:text-lg font-extrabold">
            By Team of IITians and ISBians
          </div>
        </div>

        <div className="absolute top-[20%] w-full flex justify-center">
          <h1 className="text-center text-3xl md:text-5xl text-[#416660] font-bold">
            {text}
          </h1>
        </div>

        <div className="absolute md:top-[25%] top-[30%] w-full flex justify-center">
          <div className="text-[40px] md:text-[80px] lg:text-[105px] tracking-[4px] md:tracking-[10px] text-center font-extrabold bg-gradient-to-r drop-shadow-lg from-[#3fb59d] to-[#405E59] bg-clip-text text-transparent leading-tight">
            {texts}
          </div>
        </div>

        <div className="absolute bottom-28 sm:bottom-24 w-full flex justify-center">
          <button className="rounded-full border border-black bg-white py-2 px-6 md:px-10 text-sm md:text-base font-semibold hover:scale-105 transition">
            Download Raizzfy Now
          </button>
        </div>

        <div className="absolute bottom-8 w-full flex justify-center">
          <div className="flex gap-6">
            <a
              href="https://apps.apple.com/in/app/raizzify/id6636553867"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Image alt="App Store" src={Hero6} width={120} height={40} loading="lazy" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.raizzify.hercules&hl=en_IN&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Image alt="Google Play" src={Hero7} width={120} height={40} loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHero;