
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'





const formSchema = z.object({
  name: z.string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be less than 20 characters"),
  email: z.string()
  .email("Invalid email address")
  .transform(val => val.toLowerCase().trim()),
  password: z.string()
  .min(8, "Password must be at least 8 characters")
  .max(100, "Password must be less than 100 characters"),
 
})


function SignUpForm() {

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      
    },
  })


   const onSubmit = async(values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/user/", {
          method: "POST",
          headers: {
              'Content-Type': "appplication/json"
          },
          body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password
          })
      })
      if(response.ok) {
        router.push('/sign-in')
      } else {
        console.error("Registration failed")
      }
    }
  return (
    <div className='flex flex-col space-y-2 justify-center text-center p-15 border-2 border-white bg-white/30 mx-10 backdrop-blur-2xls rounded-2xl'>

        <div className='text-2xl font-bold'> Signup</div>
        <div className='flex  justify-center'> 
        <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"  className='flex justify-center w-full bg-purple-800'>Signup</Button>
      </form>
      
    </Form>
   
    </div>
    </div>
  )
}

export default SignUpForm
