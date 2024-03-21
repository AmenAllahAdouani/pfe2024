"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SavingsIcon from '@mui/icons-material/Savings';
import DiamondIcon from '@mui/icons-material/Diamond';
import PaidIcon from '@mui/icons-material/Paid';
import Appbar from '../Organs/Appbar';
import { useNavigate } from 'react-router-dom';


type BudgetOption = 'economy' | 'normal' | 'luxury';

const Budget: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<BudgetOption | ''>('');
  const [showError, setShowError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelection = (value: BudgetOption) => {
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
    navigate('/Loader');
  };

  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-10">What is your Budget?</h1>
        <div className={`w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto ${showError ? 'animate-shake' : ''}`}>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            {['economy', 'normal', 'luxury'].map((option) => (
              <div
                key={option}
                className={`min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border text-center flex flex-col justify-center items-center cursor-pointer ${selectedValue === option ? 'border-blue-500 bg-blue-100' : 'border-slate-300'} ${showError && !selectedValue ? 'border-red-500' : ''}`}
                onClick={() => handleSelection(option as BudgetOption)}
              >
                {option === 'economy' && <SavingsIcon className="text-gray-700 w-20 h-20" />}
                {option === 'normal' && <PaidIcon className="text-gray-700 w-20 h-20" />}
                {option === 'luxury' && <DiamondIcon className="text-gray-700 w-20 h-20" />}
                <h1 className="text-black font-semibold">{option.charAt(0).toUpperCase() + option.slice(1)}</h1>
              </div>
            ))}
          </div>
          {showError && <p className="text-red-500 mt-2 text-center">Please select a budget option.</p>}
        </div>
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-16">
        <Button className="w-52 md:mr-20" onClick={handleSubmit}>Let's plan</Button>
      </div>
    </div>
  );
};

export default Budget;