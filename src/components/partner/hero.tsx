"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Hero1 from "../../../public/images/partner/hero_1.svg";
import Hero2 from "../../../public/images/partner/hero_2.svg";
import Hero3 from "../../../public/images/partner/hero_3.svg";
import Whatsapp from "../../../public/images/partner/whatsapp.svg";
import Switch from "../switch";

const Hero = () => {
  const wordList = useMemo(() => ["RAIZZIFY"], []);

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
    <div className="flex hero flex-col md:justify-center items-center">
      <Switch />
      <div className="relative grid grid-cols-1 gap-1 md:gap-0 md:grid-cols-3 md:h-[90vh] h-[215vh]">
        <div className="relative flex flex-col md:justify-center items-center bg-gradient-to-b from-[#FCFDF8] to-[#59E5CE]">
          <Image alt="Hero1" src={Hero1} loading="lazy" />
          <div className="mb-10 text-center font-bold">
            GET NEW <br />
            CUSTOMERS
          </div>
        </div>

        <div className="relative md:hidden flex flex-col md:justify-center items-center bg-gradient-to-b from-[#FCFDF8] to-[#59E5CE]">
          <div className="left-70 h-150 w-96 object-contain">
            <Image alt="Hero3" src={Hero3} loading="lazy" />
          </div>
          <div className="text-center bottom-2 font-bold">
            GET INCREASED
            <br /> AVERAGE ORDER VALUE
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-gradient-to-t from-[#FCFDF8] to-[#59E5CE]">
          <div className="md:pt-24 pt-4">
            <Image alt="Hero2" src={Hero2} loading="lazy" />
          </div>
        </div>

        <div className="relative hidden md:flex flex-col md:justify-center items-center bg-gradient-to-b from-[#FCFDF8] to-[#59E5CE]">
          <div className="left-70 h-150 w-96 object-contain">
            <Image alt="Hero3" src={Hero3} loading="lazy" />
          </div>
          <div className="text-center bottom-2 font-bold">
            GET INCREASED
            <br /> AVERAGE ORDER VALUE
          </div>
        </div>

        <div className="z-index-20 absolute w-full flex justify-center">
          <div className="md:text-[105px] text-[50px] tracking-[14px] text-center font-extrabold bg-gradient-to-r drop-shadow-lg from-[#3fb59d] to-[#3ab49c] bg-clip-text text-transparent leading-normal">
            {texts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
