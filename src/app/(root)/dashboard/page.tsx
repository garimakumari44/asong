"use client";
import Sidebar from "@/app/components/ui/Sidebar";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PromptBox from "@/app/components/ui/prompt";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function Dashboard() {
  const [prompts, setPrompts] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="left-0 sticky lg:mr-96">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full px-5 justify-center">
        {prompts.length === 0 ? (
          <div className="justify-center md:mx-40  lg:mx-80">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="flex rounded-full"
            >
              <Image
                alt="pic"
                className="flex justify-center rounded-full outline-1 md:mr-30 lg:mr-72 outline-purple-300 border-2 border-purple-200 bg-purple-100 p-1"
                width={60}
                height={60}
                src={"/logo.png"}
              />
            </motion.div>
            <motion.p
              animate={{ scale: 1.2 }}
              className="flex justify-start lg:mr-40 text-3xl text-purple-800 font-bold mt-1.5"
            >
              Asong
            </motion.p>
          </div>
        ) : (
          <div className="flex flex-col space-y-1 overflow-y-auto h-96">
          <div className=" justify-start p-2 lg:mr-96 text-2xl font-sans text-gray-500 font-semibold rounded-full bg-blue-200"> Type your favourite lyrics to get know your inner thoughts  </div>
          <div className="flex flex-col w-full justify-center scroll-mt-32 md:scroll-mt-36  lg:scroll-mt-48 ">
           
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className={`flex `}
              >
                
                {prompt.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                )}
                <div
                  className={`px-4 py-2 text-lg font-semibold  my-2 rounded-2xl max-w-[80%] hover:scale-50 ${
                    prompt.role === "user" ? "bg-gray-200" : "bg-blue-200"
                  }`}
                >
                  <p className="text-md text-gray-500 p-2 tracking-wide">{prompt.content}</p>
                </div>
                {prompt.role === "user" && (
                  <div className=" rounded-full bg-gray-200 flex items-center"></div>
                )}
              </div>
             
            ))}
          </div>
          </div> 
        )}
        <div className={` sticky`}>
          <PromptBox
            setIsLoading={setIsLoading}
            setPrompts={setPrompts}
            prompts={prompts}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}