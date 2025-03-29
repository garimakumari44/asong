
import React from 'react'
import { Button } from '@/components/ui/button'
import {ReactNode, FC} from 'react'

interface GoogleSignInButtonProps {
  children: ReactNode
}

const GoogleSigninButton: FC<GoogleSignInButtonProps> = ({children}) =>  {
  const loginWithGoogle = () => console.log("login with google")
  return (
    <Button onClick={loginWithGoogle} className='w-full'>{children} </Button>
  )
}

export default GoogleSigninButton
