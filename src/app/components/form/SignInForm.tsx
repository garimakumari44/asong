"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'



const formSchema = z.object({
  email: z.string()
    .email("Invalid email address")
    .transform(val => val.toLowerCase().trim()),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters"),
})

function SignInForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const result = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })

      if (result?.error) {
        // Handle specific error messages
        switch (result.error) {
          case 'CredentialsSignin':
            setError('Invalid email or password')
            break
          case 'AccessDenied':
            setError('Account not activated')
            break
          default:
            setError('Authentication failed. Please try again.')
        }
      } else {
        // Redirect on successful login
        router.refresh()
        router.push('/dashboard') // Change to your desired redirect path
      }
    } catch (err) {
      console.error('SignIn error:', err)
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col space-y-4 justify-center text-center p-8 border-2 border-white bg-white/30 mx-10 backdrop-blur-sm rounded-2xl'>
      <div className='text-2xl font-bold'>Sign In</div>
      
      {error && (
        <div>Hi there error </div>
      )}

      <div className='flex justify-center'> 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}  className="w-full space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="email@example.com" 
                      {...field} 
                      type="email"
                      autoComplete="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="••••••••" 
                      {...field} 
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className='w-full bg-purple-800 hover:bg-purple-700'
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SignInForm