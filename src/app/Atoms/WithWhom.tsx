import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PersonIcon from '@mui/icons-material/Person';
import Appbar from '../Organs/Appbar';

const WithWhom = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div>
        <div className="flex flex-col items-center justify-center pt-5">
          <h1 className="font-bold text-center text-xl py-4 pb-10">With whom are you traveling ?</h1>
          <div className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
            <ToggleGroup type="single" className="flex flex-col sm:flex-row justify-center items-center">
              <ToggleGroupItem value="a" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <FamilyRestroomIcon className="text-gray-800 w-20 h-20"></FamilyRestroomIcon>
                <h1 className="text-black font-semibold">Family</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="b" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <FavoriteIcon className="text-gray-800 w-20 h-20"></FavoriteIcon>
                <h1 className="text-black font-semibold">Partner</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="c" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <Diversity2Icon className="text-gray-800 w-20 h-20"></Diversity2Icon>
                <h1 className="text-black font-semibold">Friends</h1>
              </ToggleGroupItem>
              <ToggleGroupItem value="d" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border border-slate-300 text-center flex flex-col justify-center items-center">
                <PersonIcon className="text-gray-800 w-20 h-20"></PersonIcon>
                <h1 className="text-black font-semibold">Myself</h1>
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

export default WithWhom