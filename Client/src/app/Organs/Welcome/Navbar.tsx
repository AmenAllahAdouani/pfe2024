import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/TabaaniLogo.png';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

const Navbar = () => {
  return (
    <div className="mb-28">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} height={55} width={55} alt={'Tabaani'} />
                    <span className="self-center text-2xl font-pacifico font-bold not-italic text-amber-500">Tabaani Wonder</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-amber-500 bg-white border-amber-500 hover:bg-gray-300 font-pacifico not-italic rounded-3xl text-base px-4 py-2 text-center mr-4">Community Trips</button>
                    <button type="button" className="text-white bg-amber-500 hover:bg-gray-800 font-pacifico not-italic rounded-3xl text-base px-4 py-2 text-center"><ModeOfTravelIcon className='text-white h-8 w-8'/> Get started</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar