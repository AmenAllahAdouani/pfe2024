import React from 'react';
import { Button } from '@/components/ui/button';
import Appbar from '../Organs/Appbar';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FortIcon from '@mui/icons-material/Fort';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../Organs/ProgressContext';
import { Slider } from "@/components/ui/slider";


const TravelerType = () => {
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setProgressValue(68);
    navigate('/Budget');
  };

  return (
    <div>
      <Appbar progress={progressValue} />
      <div>
        <div className="flex flex-col items-center justify-center pt-5">
          <h1 className="font-bold text-center text-xl py-4 pb-10">What Type of Traveler are you?</h1>
          <div className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
          <div className="flex flex-wrap justify-center md:flex-nowrap md:flex-row lg:flex-row xl:flex-row">
            <div className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
              <FastfoodIcon className="text-gray-434343 w-20 h-20"></FastfoodIcon>
              <h1 className="text-black font-semibold">Foodie</h1>
              <p className="text-center text-ss">Home Dinner - Food tasting...</p>
              <Slider defaultValue={[50]} max={100} step={1} className="pt-2" />
            </div>
            <div className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
              <FortIcon className="text-gray-434343 w-20 h-20"></FortIcon>
              <h1 className="text-black font-semibold">History Buff</h1>
              <p className="text-center text-ss">Cultural Heritage - Castles - Myths...</p>
              <Slider defaultValue={[50]} max={100} step={1} className="pt-2" />
            </div>
            <div className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
              <AutoAwesomeIcon className="text-gray-434343 w-20 h-20"></AutoAwesomeIcon>
              <h1 className="text-black font-semibold">Style Icon</h1>
              <p className="text-center text-ss">shopping - thrift markets - traditional...</p>
              <Slider defaultValue={[50]} max={100} step={1} className="pt-2" />
            </div>
            <div className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
              <DownhillSkiingIcon className="text-gray-434343"></DownhillSkiingIcon>
              <h1 className="text-black font-semibold">Adventures</h1>
              <p className="text-center text-ss">wild life & nature - hiking-biking - road trips...</p>
              <Slider defaultValue={[50]} max={100} step={1} className="pt-2" />
            </div>
            <div className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
              <ColorLensIcon className="text-gray-434343 w-20 h-20"></ColorLensIcon>
              <h1 className="text-black font-semibold">Art Lover</h1>
              <p className="text-center text-ss">architecture - galleries - street art...</p>
              <Slider defaultValue={[50]} max={100} step={1} className="pt-2" />
            </div>
            <div className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
              <DarkModeIcon className="text-gray-434343 w-20 h-20"></DarkModeIcon>
              <h1 className="text-black font-semibold">Night Owl</h1>
              <p className="text-center text-ss">night life - partying - hidden gems</p>
              <Slider defaultValue={[50]} max={100} step={1} className="pt-2" />
            </div>
          </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end p-4 mt-16">
          <Button className="w-52 md:mr-20" onClick={handleSubmit}>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default TravelerType