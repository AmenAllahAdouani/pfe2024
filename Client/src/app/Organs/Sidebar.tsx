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
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const directTo = () => {
    navigate('/Settings');
  }

  const directToOverview = () => {
    navigate('/Overview');
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-3 text-white z-[100] fixed top-4 right-2 rounded-full bg-amber-500 shadow-lg"
        style={{ fontSize: '16px' }}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`transform top-0 left-0 w-64 bg-gray-800 h-full fixed overflow-auto ease-in-out transition-all duration-300 z-30 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex items-center justify-center mt-4">
          <div className="flex flex-col items-center justify-center">
            <Image src={Logo} alt="Place" width={85} height={85} layout="fixed" />
            <span className="text-gray-400 text-2xl font-semibold">My Trip Maker</span>
          </div>
        </div>

        <nav className="mt-2">
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" onClick={directToOverview}>
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

          <div className="border-b border-gray-400 my-2"></div>
          
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" onClick={directTo}>
            <SettingsIcon></SettingsIcon>
            <span className="mx-4">Profile Settings</span>
          </a>
          
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" href="/#">
            <EmojiEventsIcon></EmojiEventsIcon>
            <span className="mx-4">Achievements</span>
          </a>

          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" onClick={handleLogout}>
            <LogoutIcon></LogoutIcon>
            <span className="mx-4">Logout</span>
          </a>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;