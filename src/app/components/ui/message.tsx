
'use client'
import Image from "next/image"
import { Arrow } from "../icon/arrow"

export default function Message({role, content}: {role: string,content: string}) {
    return <div className="flex w-full ml-80 ">
        <div className={`flex  w-full mb-8 ${role === 'user' && 'items-end' }`}> 
            <div className={`group relative flex max-w-2xl py-3 rounded-4xl ${role === "user" ? 'bg-[#fff]': 'gap-3'}`}>
                <div className={`flex items-center absolute ${role === 'user' ? '-left-6  ': '-left-16  '}`}>
                    {
                        role === 'user' ? (
                            <>
                            <div className="bg-purple-900 p-2  justify-center flex rounded-full"> </div>
                            </>
                        ) : (<> 
                        </>)
                    }

                </div>
                {
                    role == 'user' ? (
                        <span className="text-black px-10 py-2 "> {content} </span>
                    ) : (
                        <div className="space-y-4 w-full overflow-scroll">
                            {content}
                            </div>
                    )
                }
            </div>

        </div>

    </div>
}