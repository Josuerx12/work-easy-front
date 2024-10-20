import LoginCard from "@/components/auth/login";
import RegisterCard from "@/components/auth/register";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

const AuthPage = () => {
  return (
    <div className="w-full pt-20 flex justify-center">
      <Tabs defaultValue="login" className="max-w-[900px] w-full p-2">
        <TabsList className="grid w-full"></TabsList>
        <LoginCard />
      </Tabs>
    </div>
  );
};

export default AuthPage;
