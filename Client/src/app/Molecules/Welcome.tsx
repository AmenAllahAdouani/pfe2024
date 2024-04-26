import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/TabaaniLogo.png';
import Map from '../../assets/HomeImg/map.webp';
import Adventures from '../../assets/HomeImg/hawaii.png';
import food from '../../assets/HomeImg/Egg.png';
import U1 from '../../assets/hosts/host1.png';
import U2 from '../../assets/hosts/host2.jpg';
import U3 from '../../assets/hosts/host3.jpg';
import U4 from '../../assets/hosts/host4.jpg';
import U5 from '../../assets/hosts/host5.png';
import U6 from '../../assets/hosts/host6.jpg';

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
                    <p className="text-amber-500 text-xl pt-4"> AI TRIP MAKER </p>
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
        </div>

    <div className="text-gray-600 dark:text-gray-300">
        <div className="mb-20 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">We have some fans.</h2>
            <p className="text-md text-center text-gray-500 dark:text-gray-300">See what our users have to say about revolutionizing their travel experiences with Trip Maker AI.</p>
        </div>
        
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full" src={U1} alt={"user avatar"} width={400} height={400} loading={"lazy"} />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Adil</h6>
                        <p className="text-sm text-amber-500 dark:text-gray-300">Business and Leisure in New York City</p>
                    </div>
                </div>
                <p className="mt-8">I used an AI trip planner for a business and leisure trip to NYC, which expertly chose hotels near my meetings and great spots for client dinners. It also suggested a Broadway show and a helicopter tour, perfectly balancing my work and fun, making this trip particularly memorable.</p>
            </div>

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full" src={U2} alt={"user avatar"} width={400} height={400} loading={"lazy"} />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Fatima</h6>
                        <p className="text-sm text-amber-500 dark:text-gray-300">Cultural Tour of Japan</p>
                    </div>
                </div>
                <p className="mt-8">I ve always been fascinated by Japanese culture and the AI planner put together a phenomenal itinerary that covered everything from the bustling streets of Tokyo to the serene temples of Kyoto. It booked me into traditional ryokans, suggested the best times for cherry blossom viewing, and even included a tea ceremony, which was a highlight for me. The travel plan was detailed and perfectly paced, making my cultural immersion complete.</p>
            </div>

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full" src={U3} alt={"user avatar"} width={400} height={400} loading={"lazy"} />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Adil Majid</h6>
                        <p className="text-sm text-amber-500 dark:text-gray-300">Adventure Travel in Patagonia</p>
                    </div>
                </div>
                <p className="mt-8">Im an avid hiker and wanted an adventurous trip to Patagonia. The AI trip maker customized a trekking tour for me that included both well-known spots and hidden gems. It arranged for local guides who knew the terrain and helped me navigate the more challenging parts of my hikes. The planner even included days for rest and recovery in cozy lodges by the lakes. It was an exhilarating and well-organized trip!</p>
            </div>

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full" src={U4} alt={"user avatar"} width={400} height={400} loading={"lazy"} />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Dallel</h6>
                        <p className="text-sm text-amber-500 dark:text-gray-300">Romantic Getaway to Paris</p>
                    </div>
                </div>
                <p className="mt-8">My partner and I used the AI planner for our anniversary trip to Paris. The AI created a magical experience, including a sunset cruise on the Seine and a day trip to Champagne. It also booked us a table at a rooftop restaurant with views of the Eiffel Tower, which was simply breathtaking.</p>
            </div>

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full" src={U5} alt={"user avatar"} width={400} height={400} loading={"lazy"} />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Salma</h6>
                        <p className="text-sm text-amber-500 dark:text-gray-300">Solo Backpacking in Southeast Asia</p>
                    </div>
                </div>
                <p className="mt-8">I relied on the AI trip planner for my month-long backpacking trip through Southeast Asia. It tailored my journey according to my interests in history and local cuisine. The planner set up my route starting from Vietnam all the way to Indonesia, with budget-friendly stays and authentic eatery recommendations.</p>
            </div>

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full" src={U6} alt={"user avatar"} width={400} height={400} loading={"lazy"} />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">Amen Allah</h6>
                        <p className="text-sm text-amber-500 dark:text-gray-300">Family Vacation to Italy</p>
                    </div>
                </div>
                <p className="mt-8">I used the AI trip planner for our family trip to Italy and it was incredible! The AI suggested a kid-friendly itinerary that included a visit to the Colosseum with a private guide who was fantastic with kids, and even recommended a cooking class in Tuscany where we made pasta from scratch.</p>
            </div>
        </div>
    </div>*/}


</div>
  )
}

export default Welcome;