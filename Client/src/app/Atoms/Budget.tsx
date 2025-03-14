"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import SavingsIcon from '@mui/icons-material/Savings';
import DiamondIcon from '@mui/icons-material/Diamond';
import PaidIcon from '@mui/icons-material/Paid';
import Appbar from '../Organs/Appbar';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../Organs/ProgressContext';

type BudgetOption = 'economy' | 'normal' | 'luxury';

const Budget: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<BudgetOption | ''>('');
  const [showError, setShowError] = useState<boolean>(false);
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();

  const handleSelection = (value: BudgetOption) => {
    setSelectedValue(value);
    if (showError) setShowError(false);
  };

  const handleSubmit = async () => {
    if (!selectedValue) {
      setShowError(true);
      return;
    }

    try {
      var tripId=localStorage.getItem('tripID');
      const response = await axios.patch(`http://localhost:3001/api/trips/update/${tripId}`, {
        Budget: selectedValue,
        Situation: 'Under review'
      });
      console.log("Server Response:", response.data);
      setShowError(false);
      setProgressValue(85);
      navigate('/Loader');
    } catch (error) {
      console.error("Failed to save budget:", error);
      alert('Failed to save your selection. Please try again.');
    }
  };

  return (
    <div>
      <Appbar progress={progressValue} />
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
                {option === 'economy' && <SavingsIcon className="text-gray-434343" />}
                {option === 'normal' && <PaidIcon className="text-gray-434343" />}
                {option === 'luxury' && <DiamondIcon className="text-gray-434343" />}
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
