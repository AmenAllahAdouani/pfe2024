"use client"

import React, { useState } from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import RuleIcon from '@mui/icons-material/Rule';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Logo from '../../assets/TabaaniLogo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';




const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('logged out');
      localStorage.setItem('auth','0');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };


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
            <span className="text-gray-400 text-2xl font-semibold pt-4">Admin space</span>
          </div>
        </div>

        <nav className="mt-2">
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400">
            <AddLocationAltIcon />
            <span className="mx-4">Destinations</span>
          </a>
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400">
            <GroupAddIcon />
            <span className="mx-4">Hosts</span>
          </a>
          
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400">
            <RuleIcon />
            <span className="mx-4">Trips</span>
          </a>

          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400">
            <NewspaperIcon />
            <span className="mx-4">Newsletter</span>
          </a>

          <div className="border-b border-gray-400 my-2"></div>
          
          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400">
            <SettingsIcon />
            <span className="mx-4">Profile Settings</span>
          </a>

          <a className="flex items-center py-4 px-6 text-gray-400 hover:bg-gray-600 hover:text-amber-400 hover:border-l-4 hover:border-amber-400" onClick={handleLogout}> 
            <LogoutIcon />
            <span className="mx-4">Logout</span>
          </a>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;