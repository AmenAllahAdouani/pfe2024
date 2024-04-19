import React, {useState, useEffect} from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

type UserData = {
  username: string;
};


const Navbar = () => {

  const [userData, setUserData] = useState<UserData>({ username: "", });

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          console.log(auth.currentUser.uid);
          setUserData({
            username: docSnap.data().username || "",
          });
        }
      }
    };

    fetchUserData();
  }, []);

  return (
      <div className="flex-1">
        <div className="bg-white py-2 md:py-0 m-0">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="md:flex space-x-4">
                  <a href="#" className="text-gray-900 rounded-md text-xl font-bold">Overview</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center space-x-2 md:space-x-2">
                  <Search color="disabled" style={{ fontSize: 28 }} />
                  <NotificationsIcon color="disabled" style={{ fontSize: 28 }} />
                </div>
                <div className="hidden md:flex items-center text-gray-900 px-1 md:px-3 py-1 rounded-md text-sm font-medium">
                  {userData.username}
                </div>
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
