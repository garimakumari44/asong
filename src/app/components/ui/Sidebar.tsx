"use client"
import Image from "next/image"





  

 export default function Sidebar() {

    
    
    
    return <div className="flex flex-col justify-between py-10  bg-white/30 backdrop-blur-md h-screen border-r-2 border-r-white p-4 ">
        <div className="flex flex-col   ">
        <Image alt="logo" width={50} height={50}  src={'/logo.png'}/>
        <div className="text-2xl font-bold text-purple-800 mt-6"> Asong  </div>
             </div>

            <div  className={`flex items-center  hover:bg-white/10 rounded-full justify-center w-full    gap-3 text-white/60 text-sm p-2 mt-2 coursor-pointer`}>
                
                
                 </div>  
            
       
    </div>

 }
    
