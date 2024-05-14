import Image from "next/image";
import Sidebar from "./Organs/Sidebar";
import Navbar from "./Organs/Navbar";
import { Profile } from "./Atoms/Profile";
import Hosts from "./Atoms/Hosts";
import Destinations from "./Atoms/Destinations";

export default function Home() {
  return (
    <div>
      <Destinations />
    </div>
  );
}
