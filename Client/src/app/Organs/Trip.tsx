import React from 'react';
import Image from 'next/image';
import Map from '../../assets/rabat.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Days from './Days';

const Trip = () => {
  return (
    <div className="items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 my-8">
        <div className="flex pl-2 pb-2">
            <div className="bg-amber-500 bg-opacity-30 rounded py-1 px-2">3 Days</div>
            <div className="bg-amber-500 bg-opacity-30 rounded ml-2 py-1 px-2">Morroco</div>
            <div className="bg-amber-500 bg-opacity-30 rounded ml-2 py-1 px-2">Family</div>
        </div>
        <div className="group p-2 sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
                <Image src={Map} alt={"art cover"} loading={"lazy"} width={700} height={400} className="h-54 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div className="relative pt-4">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Discover Rabat: 3 Days Adventure</h3>
                <p className="my-2 text-gray-600 dark:text-gray-300">
                    Description...
                </p>
                <button className="bg-amber-500 bg-opacity-30 rounded px-2 py-1 hover:bg-opacity-80">
                    <FavoriteIcon className="h-6 w-6 text-gray-700" />
                    <span className="ml-2 text-gray-700">Save</span>
                </button>
            </div>
        </div>
        <div className="mt-16">
            <h1 className="text-amber-500 font-bold text-3xl pb-4">Day 01</h1>
            <ol className="border-s border-gray-200 pl-4 space-y-6">
            <li>
                <div className="flex items-center">
                <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
                <div>
                    <time className="block text-sm font-normal leading-none text-gray-900">09:00 AM - Meeting point</time>
                    <h3 className="mt-1 text-lg font-semibold">Main Conference Room</h3>
                    <p className="mt-1 text-base font-normal text-gray-500">We will start the day with a brief introduction and overview of the day's activities.</p>
                </div>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
                <div>
                    <time className="block text-sm font-normal leading-none text-gray-900">12:00 AM - Meeting point</time>
                    <h3 className="mt-1 text-lg font-semibold">Main Conference Room</h3>
                    <p className="mt-1 text-base font-normal text-gray-500">We will start the day with a brief introduction and overview of the day's activities.</p>
                </div>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
                <div>
                    <time className="block text-sm font-normal leading-none text-gray-900">16:00 AM - Meeting point</time>
                    <h3 className="mt-1 text-lg font-semibold">Main Conference Room</h3>
                    <p className="mt-1 text-base font-normal text-gray-500">We will start the day with a brief introduction and overview of the day's activities.</p>
                </div>
                </div>
            </li>
            </ol>
        </div>
    </div>
  )
}

export default Trip