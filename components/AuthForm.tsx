'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form"
import CustomField from './CustomField';
import { Loader2 } from 'lucide-react';
 
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

const AuthForm = ({type}: {type: String}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
    })
     
    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        setIsLoading(false)
    }

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'> 
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row items-center'>
                        <Image src='/icons/logo.svg' alt='logo' width={60} height={60} />
                        <h1 className='sidebar-logo'>&nbsp; Goblin Banks</h1>
                    </div>
                </div>
                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-24 font-semibold text-gray-900'>
                        {user ? 'Link Account' : type === 'sign-in' ? "Sign In" : "Sign Up"}
                    </h1>
                    <p className='text-16 font-semibold text-gray-600'>
                        {user ? 'Link your account to get started' : 'Enter your details here'}
                    </p>
                </div>
            </header>
            {user ? (
                <div className='flex flex-col gap-4'>LINK</div>
            ):(
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            
                            <CustomField form={form} name="email" label="Email" placeholder="Enter your email" />
                            <CustomField form={form} name="password" label="Password" placeholder="Enter your password" password={true} />
                            
                            <div className='flex flex-col gap-4'>
                                <Button type="submit" className='form-btn' disabled={isLoading}>
                                    {isLoading ? (
                                        <div className='flex items-center'>
                                            <Loader2 size={20} className='animate-spin' />&nbsp;Loading...
                                        </div>
                                    ) : type === 'sign-in' ? 
                                        'Sign In' : 'Sign Up'
                                    }
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className='flex justify-center gap-1 mt-2'> 
                        <p className='text-14 font-normal text-gray-600'>
                            {type === 'sign-in' ? ('Don\'t have an account?') :('Already have an account?')}
                        </p>
                        <Link className= 'form-link' href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
                            {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                        </Link>
                    </footer>
                </div>
            )}

        </section>
    )
}

export default AuthForm