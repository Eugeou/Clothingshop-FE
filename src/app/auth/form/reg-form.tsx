"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema"
import envConfig from "@/config"


const RegForm = () => {

    console.log(process.env.NEXT_PUBLIC_API_ENDPOINT)
    
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
        defaultValues: {
          email: '',
          phone: '',
          fullname: '',
          password: '',
          confirmPassword: '',
        }
    })
     
    const envReg = envConfig.NEXT_PUBLIC_API_ENDPOINT + "/auth/signup"
    console.log(envReg)

    async function onSubmit(values: RegisterBodyType) {
      const result = await fetch(envReg , {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
         },
        method: 'POST'

      }
    ).then((res) => res.json())
      console.log(result)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, (error) => {
          console.log(error)
        })} 
        className="space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" type="email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormDescription>
                  This is your phone number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your full name.
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Type password" type="password" {...field} />
                </FormControl>
                <FormDescription>
                  This is your full name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm your password" type="password" {...field} />
                </FormControl>
                <FormDescription>
                  This is your full name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit"className=" bg-blue-500 w-full" >Submit</Button>
        </form>
      </Form>
    );
}

export default RegForm
