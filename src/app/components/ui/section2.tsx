"use client"
import Image from "next/image"
import {motion} from 'framer-motion'



export default function SectionTwo() {

    return <div className="  lg:flex lg:space-x-4 md:w-full w-full backdrop-blur-lg backdrop-saturate-[100%]  rounded-3xl justify-center  bg-cyan-300/10  border-2 border-white  bg-opacity-10 p-2 lg:p-10">
            <div className="  lg:flex lg:space-x-4  backdrop-blur-lg backdrop-saturate-[100%] m-2 rounded-3xl   bg-cyan-100/10 p-2 border-2 border-white  bg-opacity-10 lg:p-10 "> 
             <div className="flex flex-col space-x-3 lg:p-10 p-2">
                <div className="text-4xl text-purple-800 p-5 font-bold ">  Get Insights About  </div>
               
                <div className="lg:flex lg:flex-col space-y-4 "> 
                {[
                
                {
                            
                  title: "Inner world" },{
                            
                    title: "Inspiration" },{
                            
                    title: "Lyrical Interpretation" },
                                  {
                           
                            title: "Thoughts",
                                  },].map((feature, index) => (
                            <motion.div
                              key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                              
                              className="flex flex-col   bg-white bg-opacity-10 border border-opacity-20 border-[#ffffff] items-start p-4 md:p-6 bg-primary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                              
                              <h3 className="text-lg md:text-xl font-lora font-bold mb-2 text-purple-300">{feature.title}</h3>
                                 </motion.div>
                          ))}
                          </div> 
             </div>
             <div className=" invisible md:visible lg:visible md:p-15 md:grid-cols-1 lg:grid-cols-1  md: space-y-4 lg:space-y-7 lg:p-10 bg-white/95 backdrop-blur-md rounded-2xl">
              <div className="invisible md:visible lg:visible grid grid-row-1 md:grid-cols-1 md: space-y-4 lg:grid-cols-2 space-x-7 lg:w-3xl lg:h-3x ">
                <div>
                    <Image alt="pic1" className="rounded-3xl invisible md:visible lg:visible  " width={1200} height={1000}  src={'/pic1.svg'}/>

                </div>
                <div>
                <Image alt="pic1" className="rounded-3xl invisible md:visible lg:visible" width={1000} height={800} src={'/pic2.svg'}/>
                </div>
              </div >
              <div  className="invisible md:visible lg:visible grid grid-row-1 md:grid-cols-1  md: space-y-4 lg:grid-cols-2 space-x-7 lg:w-3xl lg:h-3xl">
                <div>
                <Image alt="pic1" className="rounded-3xl invisible md:visible lg:visible " width={1000} height={800} src={'/pic3.svg'}/>
                </div>
                <div>
                <Image alt="pic1" className="rounded-3xl invisible md:visible lg:visible" width={1200} height={1000} src={'/pic4.svg'}/>
                </div>

              </div>
               
             </div>
    </div>
    </div>
}