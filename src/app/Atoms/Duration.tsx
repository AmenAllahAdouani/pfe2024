"use client"

import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import Appbar from '../Organs/Appbar';

const Duration = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [numberOfMonths, setNumberOfMonths] = useState(2);

  useEffect(() => {
    const updateNumberOfMonths = () => {
      const width = window.innerWidth;
      if (width < 640) { // Adjusting for smaller screens
        setNumberOfMonths(1);
      } else {
        setNumberOfMonths(2); // Ensure there's enough space for two months on larger screens
      }
    };

    window.addEventListener('resize', updateNumberOfMonths);
    updateNumberOfMonths(); // Initialize on mount

    return () => window.removeEventListener('resize', updateNumberOfMonths);
  }, []);

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl pb-8">When do you want to go?</h1>
        <div className="flex items-center justify-center bg-white rounded-lg border-2 border-slate-300 shadow-md mx-4 my-2 md:w-5/6 lg:w-2/3 xl:w-1/2">
          <Popover>
            <PopoverTrigger>
              <div className="w-full"> {/* Adjusting width based on container size */}
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={numberOfMonths}
                />
              </div>
            </PopoverTrigger>
          </Popover>
        </div>
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-16">
        <Button className="w-52 md:mr-20">Next</Button>
      </div>
    </div>
  )
}

export default Duration;