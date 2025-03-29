"use client"

import Image from "next/image";
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/hero/page";
import SectionOne from "./components/ui/section1";
import SectionTwo from "./components/ui/section2";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <div  className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ">
      
       
      <Navbar/>
      
      <Hero value={"Violin's playing and the angels crying  When the Stars aligning I'll be there "}/>
      <SectionOne/>
      <SectionTwo/>
      <Footer/>
      
      </div>
     
   
  );
}
