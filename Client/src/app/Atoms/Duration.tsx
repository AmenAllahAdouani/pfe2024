import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import Appbar from '../Organs/Appbar';
import { useNavigate } from 'react-router-dom';
import { ProgressProvider, useProgress } from '../Organs/ProgressContext';

interface DurationProps {}

interface DurationState {
  date: DateRange | undefined;
  numberOfMonths: number;
  error: string;
}

const Duration: React.FC<DurationProps> = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [numberOfMonths, setNumberOfMonths] = useState<number>(2);
  const [error, setError] = useState<string>('');
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();

  useEffect(() => {
    const updateNumberOfMonths = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setNumberOfMonths(1);
      } else {
        setNumberOfMonths(2);
      }
    };

    window.addEventListener('resize', updateNumberOfMonths);
    updateNumberOfMonths(); // Initialize on mount

    return () => window.removeEventListener('resize', updateNumberOfMonths);
  }, []);

  const handleSubmit = async () => {
    if (!date || !date.from || !date.to) {
      setError('Please select a date range.');
      return;
    }

    // Calculate the difference in days
    const numberOfDays = Math.round((date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    try {
      // Send data to backend
      const response = await axios.post('http://localhost:3001/Preferences', {
        Duration: {
          from: date.from,
          to: date.to,
          numberOfDays: numberOfDays
        }
      });
      console.log('Response:', response.data);

      // Update progress and navigate
      setProgressValue(34);
      navigate('/WithWhom');
    } catch (err) {
      console.error('Failed to save the duration:', err);
      setError('Failed to save the dates. Please try again.');
    }
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

