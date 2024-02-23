import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./Organs/Navbar";
import Sidebar from "./Organs/Sidebar";
import Appbar from "./Organs/Appbar";


export default function Home() {
  return (
    <main>
      <Appbar></Appbar>
      {/*<Navbar></Navbar>
      <Sidebar></Sidebar>
      <h1 className="text-4xl">AI Trip Maker</h1>
      <Button variant="destructive" className="px-10">Delete</Button>*/}
    </main>
  );
}
