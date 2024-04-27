import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/TabaaniLogo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Place from '../../assets/qatar.jpg';
import Place2 from '../../assets/rabat.jpg';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Fans from '../Organs/Welcome/Fans';
import Navbar from '../Organs/Welcome/Navbar';
import Footer from '../Organs/Welcome/Footer';
import Info from '../Organs/Welcome/Info';
import Blog from '../Organs/Welcome/blog';
import Journey from '../Organs/Welcome/Journey';


const Welcome = () => {
  return (
    <div>
        <Navbar />
        <Info />
        <Blog />
        <Journey />
        <Fans />
        <Footer />
    </div>
  )
}

export default Welcome;