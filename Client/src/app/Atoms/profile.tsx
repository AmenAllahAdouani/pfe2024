import React, { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth, db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword, User, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";


type UserData = {
  name: string;
  username: string;
  email: string;
};

export const Profile: React.FC = () => {

  const [userData, setUserData] = useState<UserData>({ name: "", username: "", email: "" });
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", "PXVgb2XMaiU3qYfZ0Cue");
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          console.log(auth.currentUser.uid);
          setUserData({
            name: docSnap.data().name || "",
            username: docSnap.data().username || "",
            email: docSnap.data().email || "",
          });
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const updateUserData = async () => {
    if (auth.currentUser) {
      const userDocRef = doc(db, "users", "PXVgb2XMaiU3qYfZ0Cue");
      await updateDoc(userDocRef, {
        ...userData,
      });
    }
  };

  const reauthenticate = async (currentPassword: string) => {
    if (!auth.currentUser || !auth.currentUser.email) return false;
    
    const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      return true;
    } catch (error) {
      console.error("Error during reauthentication:", error);
      return false;
    }
  };

  const handlePasswordSave = async () => {
    if (!auth.currentUser || !newPassword) {
      alert("No user is currently logged in or new password is not provided.");
      return;
    }

    const reauthenticated = await reauthenticate(currentPassword);
    if (!reauthenticated) {
      alert("Reauthentication failed. Please check your current password.");
      return;
    }

    try {
      await updatePassword(auth.currentUser as User, newPassword);
      alert("Password updated successfully! Please log in again.");
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password. You might need to re-login if you haven't done so recently.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Name Input */}
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={userData.name} onChange={handleChange} />
              </div>
              {/* Username Input */}
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" value={userData.username} onChange={handleChange} />
              </div>
              {/* Email Input */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" value={userData.email} onChange={handleChange} />
              </div>
              <CardFooter>
                <Button className="bg-amber-500" type="button" onClick={updateUserData}>
                  Save changes
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
             <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-amber-500">Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};