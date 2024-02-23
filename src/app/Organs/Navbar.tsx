import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <div className="bg-gray-800 py-0 m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Overview</a>
                {/* More navigation items */}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 w-auto">
            <Input type="search" placeholder="Search" />
            <Button type="submit">Search</Button>
          </div>

          <div className="flex">
            <div className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
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
  );
};

export default Navbar;
