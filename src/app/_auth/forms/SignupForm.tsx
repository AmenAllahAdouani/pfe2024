import React, {useState} from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';
import { auth, provider } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignupValidation } from '@/lib/Validation';
import Logo from '../../../assets/TabaaniLogo.png';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';



const SignupForm = () => {

const navigate = useNavigate();
const directTo = () =>{
    navigate('/');
}

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
    const { email, password, name, username } = values;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Upon successful authentication, save user data (except password) to Firestore
            const user = userCredential.user;
            addDoc(collection(db, "users"), {
                uid: user.uid, // Store the user ID for reference
                name,
                username,
                email,
            }).then(() => {
                console.log("User data saved to Firestore");
            }).catch((error) => {
                console.error("Error saving user data to Firestore:", error);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

const [value, setValue] = useState<string>('');
const googleProvider = new GoogleAuthProvider();

const handleClick = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        const email = result.user.email;
        if (email) {
            setValue(email);
            localStorage.setItem('email', email);
        }
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

return (
    <div className="flex flex-wrap -m-0">
        <div className="hidden md:block md:w-7/12 lg:w-2/3 h-screen bg-custom-image"></div>

        <div className="w-full md:w-5/12 lg:w-1/3 h-full">
            <Form {...form}>
                <div className="sm:w-420 flex flex-col items-center px-4">
                    <Image src={Logo} width={100} height={100} alt="Logo" className="pt-2" />
                    <h2 className="pt-4 sm:pt-8">Create a new account</h2>
                    <p className="text-gray-500">To use Tabaani Wonder, please enter your details</p>
                
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
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
                                <FormControl>
                                    <Input placeholder="Password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button type="submit">
                            <h1 className="font-semibold text-xl">Sign up</h1>
                        </Button>

                        <p className="mt-2 text-center">
                            Already have an account? <a onClick={directTo} className="text-amber-500">Log in</a>
                        </p>
                        <Button onClick={handleClick}>
                            <GoogleIcon className="text-white w-8 h-8 mr-2"></GoogleIcon>
                            <h1 className="font-semibold text-xl">Sign Up with Google</h1>
                        </Button>
                    </form>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default SignupForm


