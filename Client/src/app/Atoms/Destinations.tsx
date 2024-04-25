import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Appbar from '../Organs/Appbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProgress } from '../Organs/ProgressContext';

type Country = {
  id: string;
  name: string;
  timezone: string;
  currency: string;
  language: string;
  transport: string;
};

import menaCountries from './menaCountries.json';

const Destinations: React.FC = () => {
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().some((el) => typeof el === 'object' && 'id' in el && (el.id === 'searchInput' || el.id === 'dropdownContainer'))) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery && filteredCountries.length > 0) {
      const exactMatch = filteredCountries.find(country => country.name.toLowerCase() === searchQuery.toLowerCase());
      setSelectedCountry(exactMatch ?? null);
    }
  }, [searchQuery, filteredCountries]);

  useEffect(() => {
    setErrorMessage('');
  }, [selectedCountry]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const matches = menaCountries.filter((country: Country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(matches);
    setIsDropdownVisible(true);
  };

  const handleSubmit = async () => {
    if (!selectedCountry) {
      setSearchQuery('');
      setFilteredCountries([]);
      setIsDropdownVisible(false);
      document.getElementById('searchInput')?.classList.add('animate-shake');
      setTimeout(() => {
        document.getElementById('searchInput')?.classList.remove('animate-shake');
      }, 820);
      setErrorMessage('Please select a country.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/users', {
        Destination: {
          name: selectedCountry.name,
          timezone: selectedCountry.timezone,
          currency: selectedCountry.currency,
          language: selectedCountry.language,
          transport: selectedCountry.transport,
        }
      });
      localStorage.setItem('tripID',response.data);
      console.log(localStorage.getItem('tripID'));
      setProgressValue(17);
      navigate('/Duration');
    } catch (error) {
      console.error('Failed to save destination:', error);
      setErrorMessage('Failed to save destination. Please try again.');
    }
  };

  return (
    <div>
      <Appbar progress={progressValue} />
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-8">Where do you want to go?</h1>
        <div className="w-1/2 mb-8 relative">
          <Input
            id="searchInput"
            placeholder="Search by city or town"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsDropdownVisible(true)}
          />
          <p className='text-red-500 mt-2 text-center' >{errorMessage}</p>
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
  );
}

export default Destinations;