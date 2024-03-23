"use client"

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Appbar from '../Organs/Appbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProgress } from '../Organs/ProgressContext';

type Country = {
  id: string;
  name: string;
};

import menaCountries from './menaCountries.json';

const Destinations: React.FC = () => {
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the target is not our input or dropdown container, hide the dropdown
      if (!event.composedPath().some((el) => typeof el === 'object' && 'id' in el && (el.id === 'searchInput' || el.id === 'dropdownContainer'))) {
        setIsDropdownVisible(false);
      }
    };

    // Add when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const matches = menaCountries.filter((country: Country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(matches);
    setIsDropdownVisible(true);
  };

  const handleSubmit = () => {
    setProgressValue(17);
    navigate('/Duration');
  };

  return (
    <div>
      <Appbar progress={progressValue} />
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-8">Where do you want to go?</h1>
        <div className="w-1/2 mb-8 relative">
          <Input
            id="searchInput" // Added ID for detection
            placeholder="Search by city or town"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsDropdownVisible(true)}
          />
          {isDropdownVisible && (
            <div id="dropdownContainer" className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
              {filteredCountries.map((country) => (
                <div key={country.id} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setSearchQuery(country.name)}>
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <h1 className="font-bold text-center text-xl hidden md:flex">Popular destinations</h1>
        <div className="w-full px-4 mx-auto sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3">
          <div className="flex flex-wrap justify-center md:flex-nowrap hidden md:flex">
            <div className="bg-jordan w-full min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-white text-center text-2xl font-bold flex flex-col justify-end">Jordan</div>
            <div className="bg-tunisia w-full min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-white text-center text-2xl font-bold flex flex-col justify-end">Tunisia</div>
            <div className="bg-egypt w-full min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-white text-center text-2xl font-bold flex flex-col justify-end">Egypt</div>
            <div className="bg-morroco w-full min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-white text-center text-2xl font-bold flex flex-col justify-end">Morocco</div>
            <div className="bg-qatar w-full min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-white text-center text-2xl font-bold flex flex-col justify-end">Qatar</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-16">
        <Button className="w-52 md:mr-20" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  )
}

export default Destinations

