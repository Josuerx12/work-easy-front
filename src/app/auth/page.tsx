import LoginCard from "@/components/auth/login";
import RegisterCard from "@/components/auth/register";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

const AuthPage = () => {
  return (
    <div className="w-full pt-20 flex justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Cadastre-se</TabsTrigger>
        </TabsList>
        <LoginCard />
        <RegisterCard />
      </Tabs>
    </div>
  );
};

export default AuthPage;
