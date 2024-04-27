import React from 'react';
import Image from 'next/image';
import food from '../../../assets/HomeImg/Egg.png';
import Map from '../../../assets/HomeImg/map.webp';
import Adventures from '../../../assets/HomeImg/hawaii.png';

const blog = () => {
  return (
            <div className="mb-16">
                <div className="mb-12 space-y-2 text-center">
                    <p className="text-amber-500 text-xl pt-4"> AI TRIP MAKER </p>
                    <h2 className="text-3xl font-bold text-gray-800 md:text-5xl dark:text-white">The only tool youll ever need!</h2>
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
  )
}

export default blog