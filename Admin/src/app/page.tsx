import Image from "next/image";
import Sidebar from "./Organs/Sidebar";
import Navbar from "./Organs/Navbar";
import { Profile } from "./Atoms/Profile";
import Hosts from "./Atoms/Hosts";
import Destinations from "./Atoms/Destinations";
import SigninForm from "./Auth_/Forms/SigninForm";
import Trips from "./Atoms/Trips";

export default function Home() {
  return (
    <div>
      <Trips />
    </div>
  );
}
