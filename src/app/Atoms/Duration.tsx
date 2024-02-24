"use client"

import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"

const Duration = () => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
      })
  return (
    <div className="items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl pb-8">When do you want to go?</h1>
        <div className="flex items-center justify-center bg-white rounded-lg border-slate-300 border-2 w-1/2 mx-auto">
            <Popover>
                <PopoverTrigger>
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverTrigger>
            </Popover>
        </div>
    </div>
  )
}

export default Duration