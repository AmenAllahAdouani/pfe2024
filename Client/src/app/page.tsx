"use client"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Duration from "./Atoms/Duration";
import Budget from "./Atoms/Budget";
import WithWhom from "./Atoms/WithWhom";
import TravelerType from "./Atoms/TravelerType";
import Destinations from "./Atoms/Destinations";
import Overview from "./Molecules/Overview";
import Loader from "./Atoms/Loader";
import { ProgressProvider } from './Organs/ProgressContext';
import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import Settings from "./Molecules/Settings";

export default function Home() {
  return (
    <main>
      <ProgressProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Destinations />} />
            <Route path="/Duration" element={<Duration />} />
            <Route path="/TravelerType" element={<TravelerType />} />
            <Route path="/WithWhom" element={<WithWhom />} />
            <Route path="/Budget" element={<Budget />} />
            <Route path="/Loader" element={<Loader />} />
            <Route path="/Overview" element={<Overview />} />  
          </Routes>
        </Router>
      </ProgressProvider>
     
      {/*
      <Settings></Settings>

      <ProgressProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Destinations />} />
            <Route path="/Duration" element={<Duration />} />
            <Route path="/TravelerType" element={<TravelerType />} />
            <Route path="/WithWhom" element={<WithWhom />} />
            <Route path="/Budget" element={<Budget />} />
            <Route path="/Loader" element={<Loader />} />
            <Route path="/Overview" element={<Overview />} />
            
          </Routes>
        </Router>
      </ProgressProvider>



      <Router>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/SignupForm" element={<SignupForm />} />
        </Routes>
      </Router>


      <Profile></Profile>
      <Overview></Overview> -
      <SigninForm></SigninForm>
      <SignupForm></SignupForm>
      <AuthLayout></AuthLayout>

      
      <Sidebar></Sidebar>
      
      */}
    </main>
  );
}
