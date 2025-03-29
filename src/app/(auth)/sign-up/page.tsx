"use client"
import SignUpForm from '@/app/components/form/SignUpForm'
import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <div className="w-full h-screen bg-gradient-to-r  from-indigo-100 via-purple-100 to-pink-100 " >
      <div className='text-white backdrop-blur-2xl text-4xl justify-center font-bold text-center pt-40'> Create an account </div>
      <div className='justify-center font-bold text-center'> Already an account ?  <Link href='/sign-in'> <span className='text-lg font-bold text-purple-800'> Signin</span> </Link></div>
     
      <div className='lg:px-44 lg:pb-44 lg:mx-72 lg:rounded-2xl' > 
    
     <SignUpForm/>
     </div>
    </div>
  )
}

export default SignUp
