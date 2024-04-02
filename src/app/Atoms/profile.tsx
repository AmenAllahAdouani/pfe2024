import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

type UserData = {
  name: string;
  username: string;
  email: string;
};

export const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({ name: "", username: "", email: "" });
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        console.log(auth.currentUser.uid);
        console.log(auth.currentUser.email);

        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        console.log(docSnap.data()?.email)
        if (docSnap.exists()) {
          console.log(auth.currentUser.uid);
          setUserData({
            name: docSnap.data()?.name || "",
            username: docSnap.data()?.username || "",
            email: docSnap.data()?.email || "",
          });
        }
      }
    };

    fetchUserData();
  }, []);

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
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name"  />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username"  />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email"  />
              </div>
              <CardFooter>
                <Button className="bg-amber-500" type="submit">
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