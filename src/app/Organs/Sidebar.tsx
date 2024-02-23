import React from 'react';

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
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">Overview</span>
        </a>
        {/* Repeat for other links */}
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">My Bookings</span>
        </a>
        {/* Repeat for other links */}
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">My Wish List</span>
        </a>
        {/* Repeat for other links */}
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">Community</span>
        </a>
        {/* Repeat for other links */}
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">Reviews</span>
        </a>
        <div className="border-b border-gray-400 my-4"></div>
        {/* Repeat for other links */}
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">Profile Settings</span>
        </a>
        {/* Repeat for other links */}
        <a className="flex items-center py-4 px-8 text-gray-400 hover:bg-gray-600 hover:text-amber-400" href="/#">
          <span className="mx-4">Achievements</span>
        </a>
      </nav>
    </div>
  )
}

export default Sidebar