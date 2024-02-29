import React from "react";
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


export default function Home() {
  return (
    <main>
      <Destinations></Destinations>
      
      {/*
      <Appbar></Appbar> -
      <Navbar></Navbar> -
      <Budget></Budget> -
      <Duration></Duration> -
      <TravelerType></TravelerType> -
      <WithWhom></WithWhom> -
      
      <Sidebar></Sidebar>
      <Days></Days>*/}
    </main>
  );
}
