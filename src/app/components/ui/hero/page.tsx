"use client"
import Button from "../button";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import React, {useRef, useEffect} from "react";
import Link from "next/link";


export default function Hero({value}) {

     

    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.9', "start 0.25"]
    })
    const words = value.split(" ")

    useEffect(() => {
        scrollYProgress.on("change", e => console.log(e))
    }, [])
    return <div className="flex flex-col justify-center md:px-10 mx-2 lg:px-40 lg:mt-10 ">
        <motion.div initial={{opacity: 0, y:50}} animate={{opacity: 1, y:0 }} transition={{duration: 2, staggerChildren: 0.5}} className="flex justify-center"> <Image src={'/logo.png'} width={300} alt="logo" height={300}/> </motion.div>
        
      
        <p ref={element} className="text-6xl text-purple-800 mt-50  font-bold"> {
            words.map((word, i) => {
                const start = i /words.length;
                const end = start + (1/words.length)
                return <Word key={i} range={[start, end]} progress={scrollYProgress}  >{word} </Word>

            })} </p>
            <motion.p initial={{opacity: 0, y:50}} animate={{opacity: 1, y:0 }} transition={{duration: 2, staggerChildren: 0.5}} className="text-2xl text-purple-300 py-14 px-10 text-center ">These lyrics are breathtaking, aren't they? They stir something deep within, like a whisper from the soul. Let your inner world unfold through the words that resonate with you most—those lines that feel like they were written just for you. Lose yourself in the melody of your favorite lyrics, and let them guide you to places only your heart knows.. </motion.p>
      
          <div className="justify-center flex">
            <Link href={'/sign-up'}> 
         <Button size="lg" color="purple" width="bold" title={"Get Started"}/>
         </Link> 
         </div>
    </div>
}


const Word = ({children, range, progress}:any) => {
    const opacity = useTransform(progress, range, [0,1])
    return (<motion.span className="p-2 "  style={{opacity}} >
          {children}
    </motion.span>)
}