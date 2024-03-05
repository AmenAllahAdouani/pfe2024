import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


const Hosts = () => {
  return (
    <div>
      <h1>Explore this trip further with a local of your choice in Morocco</h1>
      <h6>Learn about their personal stories, and find out how you can explore Marrakech together</h6>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Hosts