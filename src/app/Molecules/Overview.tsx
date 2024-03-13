import React from 'react';
import Navbar from '../Organs/Navbar';
import Sidebar from '../Organs/Sidebar';
import Plans from '../Atoms/Plans';

const Overview = () => {
  return (
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Container for Navbar and the rest of the page content */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          {/* Rest of the page content */}
          <div className="flex-1">
            <Plans />
            {/* You can add more components here as needed */}
          </div>
        </div>
      </div>
  )
}

export default Overview