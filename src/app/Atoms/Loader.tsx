"use client"

import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Appbar from '../Organs/Appbar';

const Loader = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Overview');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center pt-40">
        <BallTriangle
          height={150}
          width={150}
          color="#FFAF20"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          wrapperClass="w-full h-full"
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loader;