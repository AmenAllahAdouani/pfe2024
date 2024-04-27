import React from 'react';
import Image from 'next/image';
import U1 from '../../../assets/hosts/host1.png';
import U2 from '../../../assets/hosts/host2.jpg';
import U3 from '../../../assets/hosts/host3.jpg';
import U4 from '../../../assets/hosts/host4.jpg';
import U5 from '../../../assets/hosts/host5.png';
import U6 from '../../../assets/hosts/host6.jpg';

const Fans = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 mb-16">
        <div className="mb-20 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-5xl">We have <span className="text-amber-500">some fans.</span></h2>
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
    </div>
  )
}

export default Fans