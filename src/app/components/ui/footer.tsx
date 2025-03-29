export default function Footer() {
    return <div className="bg-[url('/logo2.png')] w-full  caret-fuchsia-100 z-10  md:px-20 md:py-10 lg:px-20 lg:py-10">
        <div className="backdrop-saturate-[100%] flex justify-center  rounded-3xl  bg-cyan-300/20  lg:p-20  mx-2 lg:mx-20">
          <div className=" rounded-4xl flex font-bold p-10 mt-2 text-2xl ">
                    Get in Touch
          </div>
          <div className="bg-pink-100 text-gray-400 shadow-2xs rounded-4xl px-15 my-10 p-3 text-2xl">
              Subscribe    
          </div>
        
        </div>
        <div className=" flex justify-between border-t pt-8 mt-8 mx-2  border-purple-800">
            <div>
            © 2025 Asong All rights reserved
            </div>
            <div>
                   Made with love by Garima
            </div>

        </div>

    </div>
}