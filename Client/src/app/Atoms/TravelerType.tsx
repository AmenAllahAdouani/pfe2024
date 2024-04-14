import React, { useState } from 'react';
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
import axios from 'axios';

interface TravelerValues {
    foodie: number;
    HistoryBuff: number;
    StyleIcon: number;
    Adventures: number;
    ArtLover: number;
    NightOwl: number;
}

interface TravelerTypeItem {
    icon: JSX.Element;
    label: string;
    type: keyof TravelerValues;
    description: string;
}

const TravelerType: React.FC = () => {
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();

  const [travelerValues, setTravelerValues] = useState<TravelerValues>({
    foodie: 50,
    HistoryBuff: 50,
    StyleIcon: 50,
    Adventures: 50,
    ArtLover: 50,
    NightOwl: 50
  });

  const handleSliderChange = (type: keyof TravelerValues, value: number[]) => {
    setTravelerValues(prevValues => ({
      ...prevValues,
      [type]: value[0]
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/users', {
        Interests: travelerValues
      });
      setProgressValue(68);
      navigate('/Budget');
    } catch (error) {
      console.error('Failed to save traveler types:', error);
    }
  };

  const travelerTypes: TravelerTypeItem[] = [
    { icon: <FastfoodIcon className="text-gray-434343 w-20 h-20" />, label: 'Foodie', type: 'foodie', description: 'Home Dinner - Food tasting...' },
    { icon: <FortIcon className="text-gray-434343 w-20 h-20" />, label: 'History Buff', type: 'HistoryBuff', description: 'Cultural Heritage - Castles - Myths...' },
    { icon: <AutoAwesomeIcon className="text-gray-434343 w-20 h-20" />, label: 'Style Icon', type: 'StyleIcon', description: 'Shopping - thrift markets - traditional...' },
    { icon: <DownhillSkiingIcon className="text-gray-434343 w-20 h-20" />, label: 'Adventures', type: 'Adventures', description: 'Wild life & nature - hiking-biking - road trips...' },
    { icon: <ColorLensIcon className="text-gray-434343 w-20 h-20" />, label: 'Art Lover', type: 'ArtLover', description: 'Architecture - galleries - street art...' },
    { icon: <DarkModeIcon className="text-gray-434343 w-20 h-20" />, label: 'Night Owl', type: 'NightOwl', description: 'Night life - partying - hidden gems' }
  ];

  return (
    <div>
      <Appbar progress={progressValue} />
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-10">What Type of Traveler are you?</h1>
        <div className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
          <div className="flex flex-wrap justify-center md:flex-nowrap md:flex-row lg:flex-row xl:flex-row">
            {travelerTypes.map(item => (
              <div key={item.type} className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                {item.icon}
                <h1 className="text-black font-semibold">{item.label}</h1>
                <p className="text-center text-ss">{item.description}</p>
                <Slider 
                  value={[travelerValues[item.type]]}  // Pass as an array
                  onValueChange={(value) => handleSliderChange(item.type, value)}
                  max={100} 
                  step={1} 
                  className="pt-2" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-16">
        <Button className="w-52 md:mr-20" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default TravelerType;
