import Image from "next/image";
import Sidebar from "./Organs/Sidebar";
import Navbar from "./Organs/Navbar";
import Hosts from "./Atoms/Hosts";
import Destinations from "./Atoms/Destinations";
import SigninForm from "./Auth_/Forms/SigninForm";
import Trips from "./Atoms/Trips";
import ManageHosts from "./Molecules/ManageHosts";
import ManageDestinations from "./Molecules/ManageDestinations";
import ManageProfile from "./Molecules/ManageProfile";
import ManageTrips from "./Molecules/ManageTrips";


export default function Home() {
  return (
    <div>
      <ManageHosts />
    </div>
  );
}
