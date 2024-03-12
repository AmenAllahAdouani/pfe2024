import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from '@/components/ui/button'
import SavingsIcon from '@mui/icons-material/Savings';
import DiamondIcon from '@mui/icons-material/Diamond';
import PaidIcon from '@mui/icons-material/Paid';
import Appbar from '../Organs/Appbar';

const Budget = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div>
        <div className="flex flex-col items-center justify-center pt-5">
          <h1 className="font-bold text-center text-xl py-4 pb-10">What is your Budget?</h1>
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
            <ToggleGroup type="single" className="flex flex-col sm:flex-row justify-center items-center">
              <ToggleGroupItem value="a" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <SavingsIcon className="text-gray-700 w-20 h-20"></SavingsIcon>
                <h1 className="text-black font-semibold">Economy</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="b" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <PaidIcon className="text-gray-700 w-20 h-20"></PaidIcon>
                <h1 className="text-black font-semibold">Normal</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="c" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <DiamondIcon className="text-gray-700 w-20 h-20"></DiamondIcon>
                <h1 className="text-black font-semibold">Luxury</h1>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div className="flex md:justify-end justify-center p-4 mt-16">
          <Button className="w-52 mr-20">Lets plan</Button>
        </div>
      </div>
    </div>
  )
}

export default Budget