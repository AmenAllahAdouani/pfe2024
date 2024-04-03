import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import Sidebar from './Sidebar';


const Navbar = () => {
  return (
      <div className="flex-1">
        <div className="bg-white py-2 md:py-0 m-0">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Menu Button & Desktop Navigation Links */}
              <div className="flex items-center">
                <div className="md:flex space-x-4">
                  {/* Additional links */}
                  <a href="#" className="text-gray-900 rounded-md text-xl font-bold">Overview</a>
                </div>
              </div>

              {/* Right Section of Navbar - Ensure visibility on mobile */}
              <div className="flex items-center">
                <div className="flex justify-center space-x-2 md:space-x-2">
                  {/* Icons visible on all screen sizes */}
                  <Search color="disabled" style={{ fontSize: 28 }} />
                  <NotificationsIcon color="disabled" style={{ fontSize: 28 }} />
                </div>
                {/* Username visible on all screen sizes, but with responsive padding */}
                <div className="hidden md:flex items-center text-gray-900 px-1 md:px-3 py-1 rounded-md text-sm font-medium">
                  Amen-Allah Adouani
                </div>
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
