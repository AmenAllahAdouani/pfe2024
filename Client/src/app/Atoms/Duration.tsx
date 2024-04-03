"use client"

import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import Appbar from '../Organs/Appbar';
import { useNavigate } from 'react-router-dom';
import { ProgressProvider, useProgress } from '../Organs/ProgressContext';

const Duration = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [numberOfMonths, setNumberOfMonths] = useState(2);
  const [error, setError] = useState('');
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (!date) {
      setError('Please select a date range.');
      return;
    }
    setProgressValue(34);
    navigate('/WithWhom');
  };

  return (
    <div>
      <ProgressProvider>
        <Appbar progress={progressValue} />
      </ProgressProvider>

      <div className="flex flex-col items-center justify-center pt-1">
        <h1 className="font-bold text-center text-xl pb-4">When do you want to go?</h1>
        <div className={`flex items-center justify-center bg-white rounded-lg border-2 border-slate-300 shadow-md mx-2 my-1 md:w-5/6 lg:w-2/3 xl:w-1/2 ${error ? 'animate-shake' : ''}`} >
          <Popover>
            <PopoverTrigger>
              <div className="w-full">
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
        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-12">
        <Button className="w-52 md:mr-20" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  )
}

export default Duration;