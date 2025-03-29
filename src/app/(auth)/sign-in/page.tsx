
import SignInForm from '@/app/components/form/SignInForm'
import Link from 'next/link'
import React from 'react'

function SignIn() {
  return (
    <div className="w-full bg-gradient-to-r h-screen from-indigo-100 via-purple-100 to-pink-100 " >
      <div className='text-white backdrop-blur-2xl text-4xl justify-center font-bold text-center pt-40'> Create an account </div>
      <div className='justify-center font-bold text-center'> Do not you have an account?  <Link href='/sign-up'> <span className='text-lg font-bold text-purple-800'> Signup</span> </Link></div>
     
      <div className='lg:px-44 lg:pb-44 lg:mx-72 lg:rounded-2xl' > 
    
     <SignInForm/>
     </div>
    </div>
  )
}

export default SignIn
