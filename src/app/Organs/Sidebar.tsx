"use client"

import React, { useState } from 'react';
import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Logo from '../../assets/TabaaniLogo.png';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle button that appears only on smaller screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-white z-50 fixed top-0 right-0 m-4" // md:hidden hides the button on medium screens and above
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`transform top-0 left-0 w-64 bg-gray-800 h-full fixed overflow-auto ease-in-out transition-all duration-300 z-30 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex items-center justify-center mt-4">
          <div className="flex flex-col items-center justify-center">
            <Image src={Logo} alt="Place" width={100} height={100} layout="fixed" />
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
    </>
  )
}

export default Sidebar