import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Appbar from '../Organs/Appbar'
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/Duration');
  };

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-8">Where do you want to go?</h1>
        <div className="w-1/2 mb-8">
          <Input placeholder="Search by city or town"/>
        </div>
        <h1 className="font-bold text-center text-xl">Popular destinations</h1>
        <div className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
          <ToggleGroup type="single" className="flex flex-wrap justify-center md:flex-nowrap md:flex-row lg:flex-row xl:flex-row">
            <ToggleGroupItem value="a" className="bg-jordan min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-white text-center text-2xl font-bold  flex flex-col justify-end">Jordan</ToggleGroupItem>
            <ToggleGroupItem value="b" className="bg-tunisia min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-white text-center text-2xl font-bold flex flex-col justify-end">Tunisia</ToggleGroupItem>
            <ToggleGroupItem value="c" className="bg-egypt min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-white text-center text-2xl font-bold flex flex-col justify-end">Egypt</ToggleGroupItem>
            <ToggleGroupItem value="d" className="bg-morroco min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-white text-center text-2xl font-bold flex flex-col justify-end">Morocco</ToggleGroupItem>
            <ToggleGroupItem value="e" className="bg-qatar min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-white text-center text-2xl font-bold flex flex-col justify-end">Qatar</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="flex justify-center md:justify-end p-4 mt-16">
        <Button className="w-52 md:mr-20" onClick={handleSubmit}>Next</Button>
      </div>
    </div>
  )
}

export default Destinations

