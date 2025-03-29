'use client'
import {motion} from 'framer-motion'
import React from 'react'


export default function SectionOne() {
    return <div className='grid-col-2 mt-40' >
        <div className=" lg:flex justify-center text-center text-4xl border-2 border-gray-200 rounded-4xl md:mx-[200px] mx-20 lg:mx-[600px] text-purple-800 font-bold"> 
        How it works 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 justify-center p-20" >
        
        {[
          {
            
            title: "Get Started",
            description: "Kickstart your journey into the world of lyrical exploration! Simply click the button above to connect with your favorite lyrics and uncover the emotions and stories hidden within." },
          {
            
            title: "Write down",
            description: "Pen down the lyrics that resonate with you the most. Whether it’s a line that tugs at your heart or a verse that inspires you, our platform will dive deep to reveal its insights, emotional depth, and hidden meanings" },
          {
           
            title: "Thematic Analysis",
            description: "Our AI delves into the heart of your lyrics, identifying recurring themes and motifs. From love and heartbreak to rebellion and social commentary, discover the powerful messages woven into the words"
          },].map((feature, index) => (
            <motion.div
              key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
              
              className="flex flex-col backdrop-blur-[4px] backdrop-saturate-[100%] bg-white/10 bg-opacity-10 border border-opacity-20 border-[#ffffff] items-start p-4 md:p-6 bg-primary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-2 md:p-3 bg-purple-200 border-2 border-purple-400 rounded-full mb-3 md:mb-4">
                   
                
              </div>
              <h3 className="text-lg md:text-xl font-lora font-bold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground tracking-wider">{feature.description}</p>
            </motion.div>
          ))}
</div>

    </div>
}