import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <div className="bg-white py-2 md:py-0 m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Toggle visibility of the navigation links on smaller screens */}
            <div className="block md:hidden">
              {/* Mobile Menu Button Placeholder: Implement onClick for actual functionality */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                {/* Icon for Menu (could be replaced with an actual icon component) */}
                <span className="sr-only">Open main menu</span>
                {/* Example: Hamburger Icon */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {/* Navigation Links for Desktop */}
                <a href="#" className="text-gray-900 rounded-md text-xl font-medium">Overview</a>
                {/* Add more navigation links here */}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-center">
              <Search color="disabled" style={{ fontSize: 28, marginRight: '4px' }} />
              <NotificationsIcon color="disabled" style={{ fontSize: 28 }} />
            </div>
            <div className="hidden md:flex text-gray-900 px-3 py-1 pl-4 rounded-md text-sm font-medium">
              Amen-Allah Adouani
            </div>
            <Avatar className="h-8 w-8 ml-2">
              {/* Assuming AvatarImage and AvatarFallback are correctly implemented */}
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
