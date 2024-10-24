"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { LoginCredentials } from "@/interfaces/user.interface";
import { TabsContent } from "@radix-ui/react-tabs";
import { redirect } from "next/navigation";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const LoginCard = () => {
  const { handleSubmit, register } = useForm<LoginCredentials>();
  const { toast } = useToast();
  const { login, user } = useAuth();
  const { mutateAsync } = useMutation(["handleLogin"], login, {
    onSuccess: () => {
      toast({
        title: "Autenticação",
        description: "Login efetuado com sucesso!",
      });
    },
  });

  if (user) {
    redirect("/agenda");
  }

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (data: LoginCredentials) => {
    await mutateAsync(data);
  };

  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Autentique-se para usurfluir do sistema.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Label htmlFor="email">email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                required
                placeholder="johndoe@email.com"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                {...register("password")}
                id="password"
                type="password"
                placeholder="**********"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => formRef.current?.requestSubmit()}
            title="Clique aqui para fazer login."
          >
            Fazer Login
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default LoginCard;
