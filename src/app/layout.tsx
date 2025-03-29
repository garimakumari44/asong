import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {Toaster} from 'react-hot-toast'


const Mono = Montserrat({
  variable: "--font-mono-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata: Metadata = {
  title: "Asong",
  description: "AI lyrics",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
     
    <html lang="en">
      
      <body
        className={`${Mono.variable} ${Mono.variable} antialiased`}
      >

        <header> 
          
        </header>
        <Toaster toastOptions={{success: {style:{background: "black", color: "white"}},
         error:{style: {background: "black", color: "white"}}

      }}/> 
      

             
        {children}
      </body>
      
    </html>
   
   
  );
}
