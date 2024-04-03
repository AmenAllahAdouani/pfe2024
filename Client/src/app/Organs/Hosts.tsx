import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const Hosts = () => {
  return (
    <div className="pt-0 px-0">
      <h1 className="font-bold text-black px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">Explore this trip further with a local of your choice in Morocco</h1>
      <h6 className="text-xs px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">Learn about their personal stories, and find out how you can explore Marrakech together</h6>
      <div className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth">
        <div className="flex gap-4 pl-6 pt-4 min-w-max">
          {/* Card 1 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-1 rounded-xl">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Adil</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-2 rounded-xl">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Fatima</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Tajine Expert</span>
              <button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-3 rounded-xl">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Amine</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">Culture & History</span>
              <button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-4 rounded-xl">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Adel Majid</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-5 rounded-xl">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-xl font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Dallel</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-6 rounded-xl">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-xl font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Amen</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosts