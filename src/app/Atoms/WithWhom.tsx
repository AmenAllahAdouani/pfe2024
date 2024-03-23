"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PersonIcon from '@mui/icons-material/Person';
import Appbar from '../Organs/Appbar';
import { useNavigate } from 'react-router-dom';


type TravelWithOption = 'family' | 'partner' | 'friends' | 'myself';

const WithWhom: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<TravelWithOption | ''>('');
  const [showError, setShowError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelection = (value: TravelWithOption) => {
    setSelectedValue(value);
    if (showError) setShowError(false); 
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      setShowError(false);
      setTimeout(() => setShowError(true), 10);
      return;
    }
    console.log("Selected Value: ", selectedValue);
    setShowError(false);
    navigate('/TravelerType');
  };

  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-10">With whom are you traveling?</h1>
        <div className={`w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto ${showError ? 'animate-shake' : ''}`}>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            {['family', 'partner', 'friends', 'myself'].map((option) => (
              <div
                key={option}
                className={`min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border text-center flex flex-col justify-center items-center cursor-pointer ${selectedValue === option ? 'border-blue-500 bg-blue-100' : 'border-slate-300'} ${showError && !selectedValue ? 'border-red-500' : ''}`}
                onClick={() => handleSelection(option as TravelWithOption)}
              >
                {option === 'family' && <FamilyRestroomIcon className="text-gray-434343" />}
                {option === 'partner' && <FavoriteIcon className="text-gray-434343" />}
                {option === 'friends' && <Diversity2Icon className="text-gray-434343" />}
                {option === 'myself' && <PersonIcon className="text-gray-434343" />}
                <h1 className="text-black font-semibold">{option.charAt(0).toUpperCase() + option.slice(1)}</h1>
              </div>
            ))}
          </div>
          {showError && <p className="text-red-500 mt-2 text-center">Please select an option.</p>}
        </div>
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-16">
        <Button className="w-52 md:mr-20" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default WithWhom;