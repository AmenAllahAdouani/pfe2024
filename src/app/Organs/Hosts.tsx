import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const Hosts = () => {
  return (
    <div className="pt-0 px-0">
      <h1 className="font-bold text-black px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">Explore this trip further with a local of your choice in Morocco</h1>
      <h6 className="text-xs px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">Learn about their personal stories, and find out how you can explore Marrakech together</h6>
      <Carousel className="w-full pt-8">
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-wrap justify-center gap-4 p-1">
              <Card className="flex items-center justify-center h-64 w-40 bg-host-1">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-2">
                  <span className="text-md font-semibold text-gray-200">Hello I am</span>
                  <h1 className="text-3xl text-gray-200">Adil</h1>
                  <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
                  <Button className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4">Connect</Button>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-center h-64 w-40 bg-host-2">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-2">
                  <span className="text-md font-semibold text-gray-200">Hello I am</span>
                  <h1 className="text-xxl text-gray-200">Fatima</h1>
                  <span className="font-pacifico font-bold text-xs text-gray-200">The Tajine Expert</span>
                  <Button className="bg-trnasparent border-2 rounded-3xl border-gray-200 text-gray-200 p-1 px-4">Connect</Button>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-center w-40 h-64 bg-host-3">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-2">
                  <span className="text-md font-semibold text-gray-200">Hello I am</span>
                  <h1 className="text-xxl text-gray-200">Amine</h1>
                  <span className="font-pacifico font-bold text-xs text-gray-200">Culture & History</span>
                  <Button className="bg-trnasparent border-2 rounded-3xl border-gray-200 text-gray-200 p-1 px-4">Connect</Button>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-center h-64 w-40 bg-host-4">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-2">
                  <span className="text-md font-semibold text-gray-200">Hello I am</span>
                  <h1 className="text-xxl text-gray-200">Adel Majid</h1>
                  <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
                  <Button className="bg-trnasparent border-2 rounded-3xl border-gray-200 text-gray-200 p-1 px-4">Connect</Button>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-center h-64 w-40 bg-host-5">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-2">
                  <span className="text-xl font-semibold text-gray-200">Hello I am</span>
                  <h1 className="text-xxl text-gray-200">Dallel</h1>
                  <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
                  <Button className="bg-trnasparent border-2 rounded-3xl border-gray-200 text-gray-200 p-1 px-4">Connect</Button>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-center h-64 w-40 bg-host-6">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-2">
                  <span className="text-xl font-semibold text-gray-200">Hello I am</span>
                  <h1 className="text-xxl text-gray-200">Amen</h1>
                  <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
                  <Button className="bg-trnasparent border-2 rounded-3xl border-gray-200 text-gray-200 p-1 px-4">Connect</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hosts