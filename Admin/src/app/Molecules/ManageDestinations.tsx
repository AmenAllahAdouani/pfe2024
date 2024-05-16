import React from 'react'
import Sidebar from '../Organs/Sidebar'
import Navbar from '../Organs/Navbar'
import Destinations from '../Atoms/Destinations'

const ManageDestinations = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>
  
      <div className="flex-1 flex flex-col">
        <div className="hidden md:flex">
          <Navbar />
        </div>
        <div className="flex-1">
          <Destinations />
        </div>
      </div>
    </div>
  )
}

export default ManageDestinations