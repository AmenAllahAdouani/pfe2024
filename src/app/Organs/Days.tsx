import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"




const Days = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <Accordion type="single" collapsible className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <AccordionItem value="item-1" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 01</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 02</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 03</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 04</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div> 
  )
}

export default Days