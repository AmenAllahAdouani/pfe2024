import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from '@/components/ui/button'
import Appbar from '../Organs/Appbar'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const TravelerType = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div>
        <div className="flex flex-col items-center justify-center pt-5">
          <h1 className="font-bold text-center text-xl py-4 pb-10">What Type of Traveler are you?</h1>
          <div className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
            <ToggleGroup type="single" className="flex flex-wrap justify-center md:flex-nowrap md:flex-row lg:flex-row xl:flex-row">
              <ToggleGroupItem value="a" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <FastfoodIcon className="text-gray-800 w-20 h-20"></FastfoodIcon>
                <h1 className="text-black font-semibold">Foodie</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="b" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">
                
                <h1 className="text-black font-semibold">History Buff</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="c" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">
                
                <h1 className="text-black font-semibold">Style Icon</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="d" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">
                
                <h1 className="text-black font-semibold">Adventures</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="e" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <ColorLensIcon className="text-gray-800 w-20 h-20"></ColorLensIcon>
                <h1 className="text-black font-semibold">Art Lover</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="f" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <DarkModeIcon className="text-gray-800 w-20 h-20"></DarkModeIcon>
                <h1 className="text-black font-semibold">Night Owl</h1>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div className="flex md:justify-end justify-center p-4 mt-16">
          <Button className="w-52 mr-20">Next</Button>
        </div>
      </div>
    </div>
  )
}

export default TravelerType