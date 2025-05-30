"use client";

import Button from "../button";
import Image from "next/image";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { HeroProps } from "../../../../../lib/heroprops";


  const Hero: React.FC<HeroProps> = ({ text }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" "); 

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);

  return (
    <div className="flex flex-col   w-full  md:px-20 md:py-10 lg:px-20 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, staggerChildren: 0.5 }}
        className="flex justify-center"
      >
        <Image src={"/logo.png"} width={300} alt="logo" height={300} />
      </motion.div>

      <p ref={element} className="text-6xl flex flex-wrap  text-purple-800 max-w-full  mx-20 p-30 font-bold ">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, staggerChildren: 0.5 }}
        className="text-2xl text-purple-300 py-14 px-10 text-center"
      >
        These lyrics are breathtaking, They stir something deep within, like a
        whisper from the soul...
      </motion.p>

      <div className="justify-center flex">
        <Link href={"/sign-up"}>
          <Button size="lg" color="purple" width="bold" title={"Get Started"} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span className=" p-2" style={{ opacity }}>
      {children}
    </motion.span>
  );
};
