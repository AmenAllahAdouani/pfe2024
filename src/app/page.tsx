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
import Hosts from "./Atoms/Hosts";


export default function Home() {
  return (
    <main>
      <Sidebar></Sidebar>

      {/*
      <Appbar></Appbar> -
      <Navbar></Navbar> -
      <Budget></Budget> -
      <Duration></Duration> -
      <TravelerType></TravelerType> -
      <WithWhom></WithWhom> -
      <Destinations></Destinations> -
      <Days></Days> -

      <Hosts></Hosts>
      
      
      */}
    </main>
  );
}
