"use client"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "./Organs/Navbar";
import Sidebar from "./Organs/Sidebar";
import Appbar from "./Organs/Appbar";
import Duration from "./Atoms/Duration";
import Budget from "./Atoms/Budget";
import WithWhom from "./Atoms/WithWhom";
import TravelerType from "./Atoms/TravelerType";
import Days from "./Organs/Days";
import { Calendar } from "lucide-react";
import Destinations from "./Atoms/Destinations";
import GeneralInfo from "./Organs/GeneralInfo";
import Plans from "./Atoms/Plans";
import Overview from "./Molecules/Overview";
import Loader from "./Atoms/Loader";


export default function Home() {
  return (
    <main>
      <Overview></Overview>

      {/*

      <Router>
        <Routes>
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Loader" element={<Loader />} />
          <Route path="/Duration" element={<Duration />} />
          <Route path="/TravelerType" element={<TravelerType />} />
          <Route path="/WithWhom" element={<WithWhom />} />
          <Route path="/" element={<Destinations />} />
          <Route path="/Overview" element={<Overview />} />
        </Routes>
      </Router>



      <Overview></Overview> -

      <Sidebar></Sidebar>
      
      */}
    </main>
  );
}
