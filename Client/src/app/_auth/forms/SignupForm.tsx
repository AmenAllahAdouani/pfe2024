import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import {
  auth,
  provider,
  db
} from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  GoogleAuthProvider
} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignupValidation } from '@/lib/Validation';
import Logo from '../../../assets/TabaaniLogo.png';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { FirebaseError } from 'firebase/app';
import axios from 'axios';


const SignupForm = () => {   

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
    });

    const subscribeUser = async (email: string, name: string) => {
        try {
            await axios.post('http://localhost:3001/api/subscriber/subscribe', {
                email,
                name
            });
            console.log('Subscription successful');
        } catch (error) {
            console.error('Failed to subscribe user:', error);
        }
    };
    

    const directTo = () =>{
        navigate('/');
    }

    const onSubmit = async (values: z.infer<typeof SignupValidation>) => {
        const { email, password, name, username } = values;
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            // Send email verification
            await sendEmailVerification(user);
            alert("Verification email sent.");
    
            // Save user data to Firestore
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, {
                name,
                username,
                email,
            });

            // Subscribe the user
            await subscribeUser(email, name);

            console.log("User data saved to Firestore with UID as document ID");
    
            navigate('/');
        } catch (error) {
            const firebaseError = error as FirebaseError;
            if (firebaseError && firebaseError.code === "auth/email-already-in-use") {
                alert("The email address is already in use by another account.");
            } else {
                alert("An error occurred during sign up. Please try again.");
            }
            console.error("Error during sign up:", error);
        }
    };

    const [value, setValue] = useState<string>('');
    const googleProvider = new GoogleAuthProvider();

    const handleClick = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            const user = result.user;
            console.log({user})
            const displayName = user.displayName
            const userEmail = user.email;
            const uid = user.uid;
        
            const userRef = doc(db, "users", user.uid); 

            setDoc(userRef, {
                name:displayName,
                username:userEmail,
                email:userEmail,
            }).then(() => {
                localStorage.setItem('auth',"1");
                let data = JSON.stringify({
                "uid": uid,
                "email":userEmail
                });
                localStorage.setItem('user',data);
                navigate('/')
                console.log("User data saved to Firestore with UID as document ID");
            }).catch((error) => {
                console.error("Error saving user data to Firestore:", error);
            });   
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
    );
};

export default SignupForm;


