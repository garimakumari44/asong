"use client"
import Image from "next/image"
import React from "react"
import Form from 'next/form'





export default function Navbar() {
    return <div className=" flex  justify-between lg:px-40 md:px-20 px-10  h-16 w-full sticky left-0 top-0 z-10 backdrop-blur-lg  bg-white/30  ">
        <div className="flex space-x-7">
        <div className="">
           <Image alt="logo" src={'/logo.png'} width={50} height={50}/> 
        </div>
        <div className="text-3xl  flex justify-center mt-1 font-bold font-sans text-purple-900"> Asong </div>

        </div>
         
        
        <div >
           <Form className="flex justify-center text-lg cursor-pointer py-2 px-4 m-2 rounded-4xl text-white bg-purple-700 border-2 border-purple-900" action='/sign-up'> <button type="submit" className="cursor-pointer"> Get Started </button> </Form>
           
        </div>

    </div>
}