import React from 'react';
import Image from 'next/image';
import Car from '../../../assets/HomeImg/car.png';
import Trip from '../../../assets/HomeImg/Path.png';

const Info = () => {
  return (
        <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Your <span className="text-amber-500">AI-Powered</span> Trip
            </h2>
            <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 ">
                <h3 className="text-3xl text-gray-800 bg-amber-100 font-bold leading-none mb-3">The most optimal</h3>
                <p className="text-gray-600 mb-8 pt-2">
                Craft your perfect itinerary with Tabaani Wonder. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.
                <br />
                <br />
                </p>
            </div>
            <div className="w-full sm:w-1/2 pb-6 pl-56">
                <Image src={Trip} alt={''} height={190} width={270} />
            </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6">
                <Image src={Car} alt={''} height={200} width={250} />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                <h3 className="text-3xl text-gray-800 bg-amber-100 font-bold leading-none mb-3">Get Inspired</h3>
                <p className="text-gray-600 mb-8 pt-2">
                    Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Tabaani Wonder.
                    <br />
                    <br />
                </p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Info