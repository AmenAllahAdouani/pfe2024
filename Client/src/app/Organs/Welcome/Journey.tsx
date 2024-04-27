import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/TabaaniLogo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Place from '../../../assets/qatar.jpg';
import Place2 from '../../../assets/rabat.jpg';

const Journey = () => {
  return (
    <div className="mb-16">
        <div className="mb-16 space-y-4 p-6 md:px-0">
                <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-5xl"><span className='text-amber-500'>Journey Inspirations</span> from Travelers</h2>
                <p className="text-md text-center text-gray-500 dark:text-gray-300">Dive into unique <span className='text-amber-500'>trip itineraries</span> crafted by our global travelers. Find your next adventure and share your own journey with fellow explorers.</p>
            </div>
        <div className="grid grid-cols-2 gap-8 p-4 mx-8">
        {[Place, Place2, Place, Place2].map((imageSrc, index) => (
            <div key={index} className="relative p-4 border border-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-600/10 dark:shadow-none hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">

            <div className="absolute inset-0 z-0">
                <Image
                src={imageSrc}
                alt={`Background ${index}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="transition-opacity duration-300 ease-in-out"
                />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                    src={Logo}
                    alt="Tabaani Logo"
                    width={48}
                    height={48}
                    quality={100}
                    />
                </div>
                <h6 className="text-lg font-medium text-white ml-2">Flen</h6>
                </div>

                <div className="flex justify-between items-center mt-28">
                <h3 className="text-4xl font-bold text-white">Trip to Destination {index + 1}</h3>
                <div className="flex items-center text-white">
                    <FavoriteIcon className="h-6 w-6 text-red-500" />
                    <span className="ml-2">7</span>
                </div>
                </div>

                <p className="text-sm text-white mt-2">Explore the unique attractions and vibrant culture of Destination {index + 1}. Enjoy a variety of experiences from our curated itinerary.</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Journey