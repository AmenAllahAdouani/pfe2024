import React from 'react'
import Sidebar from '../Organs/Sidebar'
import Navbar from '../Organs/Navbar'
import Trips from '../Atoms/Trips'

const ManageTrips = () => {
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
          <Trips />
        </div>
      </div>
    </div>
  )
}

export default ManageTrips