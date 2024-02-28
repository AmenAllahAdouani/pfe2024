import React from 'react';
import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Sidebar = () => {
  return (
    <div
      className='transform top-0 left-0 w-64 bg-gray-800 h-full fixed overflow-auto ease-in-out transition-all duration-300 z-30'>
      <div className="flex items-center justify-center mt-10">
        <div className="items-center">
          <img src ='../../assets/TabaaniLogo.png' alt="Logo" className="h-18 w-18 pb-8" />
          <span className="text-gray-400 text-2xl font-semibold">My Trip Maker</span>
        </div>
      </div>

      <nav className="mt-4">
        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <PieChartIcon></PieChartIcon>
          <span className="mx-4">Overview</span>
        </a>

        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <ConfirmationNumberIcon></ConfirmationNumberIcon>
          <span className="mx-4">My Bookings</span>
        </a>
        
        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <FactCheckIcon></FactCheckIcon>
          <span className="mx-4">My Wish List</span>
        </a>
        
        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <Diversity3Icon></Diversity3Icon>
          <span className="mx-4">Community</span>
        </a>
        
        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <ArticleIcon></ArticleIcon>
          <span className="mx-4">Reviews</span>
        </a>

        <div className="border-b border-gray-400 my-4"></div>
        
        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <SettingsIcon></SettingsIcon>
          <span className="mx-4">Profile Settings</span>
        </a>
        
        <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
          <EmojiEventsIcon></EmojiEventsIcon>
          <span className="mx-4">Achievements</span>
        </a>
      </nav>
    </div>
  )
}

export default Sidebar