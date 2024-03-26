import React, { useState } from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from 'next/image';
import { auth, provider } from '@/firebase';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SigninValidation } from "../../../lib/Validation/index";
import Logo from '../../../assets/TabaaniLogo.png';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const SigninForm = () => {
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const logIn = form.handleSubmit((values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
    });
  });

  const [value, setValue] = useState<string>('');
  const provider = new GoogleAuthProvider();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      const email = result.user.email;
      if (email) { // Checking if email is not null or undefined
        setValue(email);
        localStorage.setItem('email', email);
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  };

  return (
    <div className="flex flex-wrap -m-0">
      <div className="w-full md:w-5/12 lg:w-1/3 h-full">
        <Form {...form}>
          <div className="sm:w-420 flex flex-col items-center px-4">
            <Image src={Logo} width={100} height={100} alt="Logo" className="pt-2" />
            <h2 className="font-bold text-center pt-4 sm:pt-8">
              Log in to your account
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Welcome back! Please enter your details.
            </p>
            <form
              onSubmit={logIn}
              className="flex flex-col gap-5 w-full mt-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" type="text" className="shad-input" {...field} />
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
                    <FormLabel className="shad-form_label">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" type="password" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                  Log in
              </Button>

              <p className="text-center mt-2">
                Don&apos;t have an account?
                <a href="#" className="text-amber-500 ml-1">Sign in</a>
              </p>
              <Button onClick={handleClick}>Sign In with Google</Button>
            </form>
          </div>
        </Form>
      </div>

      <div className="hidden md:block md:w-7/12 lg:w-2/3 h-screen bg-custom-image">
      </div>
    </div>
  );
};
export default SigninForm;

