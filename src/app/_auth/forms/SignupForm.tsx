import React, {useState} from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignupValidation } from '@/lib/Validation';
import Logo from '../../../assets/TabaaniLogo.png';



const SignupForm = () => {

// 1. Define your form.
const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
        name: '',
        username: '',
        email: '',
        password: '',
        },
})


// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof SignupValidation>, e: any) {
    console.log(values);
    e.preventDefault(); 
    const { email, password } = values; 
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      }); 
}

return (
    <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
            <Image src={Logo} width={100} height={100} alt="Logo" />
            <h2 className="pt-5 sm:pt-12">Create a new account</h2>
            <p className="text-gray-500">To use Tabaani Wonder, please enter your details</p>
        
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="Username" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Email" type="email" {...field} />
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
                            <Input placeholder="Password" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit">
                    Sign up
                </Button>

                <p className="mt-2 text-center">
                    Already have an account? <a href="#" className="text-amber-500">Log in</a>
                </p>
            </form>
        </div>
    </Form>
  )
}

export default SignupForm


