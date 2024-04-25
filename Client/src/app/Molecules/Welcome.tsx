import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/TabaaniLogo.png';
import Map from '../../assets/HomeImg/map.webp';
import Adventures from '../../assets/HomeImg/hawaii.png';
import food from '../../assets/HomeImg/Egg.png';

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  return (
    <div>
        {/*<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} height={55} width={55} alt={'Tabaani'} />
                    <span className="self-center text-2xl font-pacifico font-bold not-italic text-amber-500">Tabaani Wonder</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-amber-500 bg-white border-amber-500 hover:bg-gray-300 font-pacifico not-italic rounded-3xl text-base px-4 py-2 text-center mr-4">Community Trips</button>
                    <button type="button" className="text-white bg-amber-500 hover:bg-gray-800 font-pacifico not-italic rounded-3xl text-base px-4 py-2 text-center"><ModeOfTravelIcon className='text-white h-8 w-8'/> Get started</button>
                </div>
            </div>
        </nav>
        
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    contact@tabaani.co
                                </li>
                                <li className="mb-4">
                                    support@tabaani.co
                                </li>
                                <li>
                                    +216 93 649679
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">What is Tabaani</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blogs</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Tabaani Community</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Help center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subscribe to our newsletter</h2>
                            <div className="flex items-center">
                                <Input placeholder='Email address' />
                                <Button className='ml-1'>
                                    <SendIcon className='text-white h-6 w-6'/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div id="blog">
            <div>
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">The only tool youll ever need!</h2>
                    <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                    Say goodbye to the stress of planning and hello to personalized recommendations, efficient itineraries, and seamless dining experiences.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group p-2 sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image src={Map} alt={"art cover"} loading={"lazy"} width={700} height={500} className="h-68 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Optimal Route Planning</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort.
                            </p>
                        </div>
                    </div>
                    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image src={Adventures}
                            alt={"art cover"} loading={"lazy"} width={500} height={900} className="h-94 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Personalize Your Adventure</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Shape your journey by freely adding, editing, or deleting activities from your itinerary.
                            </p>
                        </div>
                    </div>
                    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image src={food} alt={"art cover"} loading={"lazy"} width={700} height={500} className="h-94 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Local Food Recommendations
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}



    </div>
  )
}

export default Welcome