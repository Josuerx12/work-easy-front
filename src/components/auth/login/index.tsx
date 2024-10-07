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
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

const LoginCard = () => {
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
          <div className="space-y-1">
            <Label htmlFor="email">email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="**********" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button title="Clique aqui para fazer login.">Fazer Login</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default LoginCard;
