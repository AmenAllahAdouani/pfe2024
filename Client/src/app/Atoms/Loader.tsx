"use client"

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Appbar from '../Organs/Appbar';
import { useProgress } from '../Organs/ProgressContext';

const Loader = () => {
  const { progressValue, setProgressValue } = useProgress();
  const navigate = useNavigate();

  useEffect(() => {
    setProgressValue(100);
    const timer = setTimeout(() => {
      navigate('/Overview');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <Appbar progress={progressValue} />
      <div className="flex justify-center items-center pt-40">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default Loader;