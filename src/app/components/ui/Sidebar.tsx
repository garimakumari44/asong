"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { prisma } from "../../../../lib/db"




  

 export default  function Sidebar() {

   const [userName, setUserName] = useState<string | undefined>();
 
   async function getUser() {
      const userName = await prisma.user.findUnique({
          where: {
              name: Credential.name
          }
      });
      return userName;
  }

  useEffect(() => {
   async function fetchUser() {
      const user = await getUser();
      setUserName(user?.name)
   }
   fetchUser();
  }, [])
  

    
    
    return <div className="flex flex-col justify-between py-10  bg-white/30 backdrop-blur-md h-screen border-r-2 border-r-white p-4 ">
        <div className="flex flex-col   ">
        <Image alt="logo" width={50} height={50}  src={'/logo.png'}/>
        <div className="text-2xl font-bold text-purple-800 mt-6"> Asong  </div>
             </div>

            <div  className={`flex items-center  hover:bg-white/10 rounded-full justify-center w-full    gap-3 text-white/60 text-sm p-2 mt-2 coursor-pointer`}>
             {
               userName && 
               <div>Hi {userName} </div>
             }
                
                 </div>  
            
       
    </div>

 }
    
