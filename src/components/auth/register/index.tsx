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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

const RegisterCard = () => {
  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Cadastre-se</CardTitle>
          <CardDescription>
            Cadastre-se para poder testar o sistema e futuramente adquirir um
            plano disponivel para sua empresa.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" required placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="documentType">Tipo do documento</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o tipo do documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipos de documento:</SelectLabel>
                  <SelectItem value="cpf">CPF - Pessoa Fisica</SelectItem>
                  <SelectItem value="cnpj">CNPJ - Pessoa Juridica</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="document">Documento</Label>
            <Input
              id="document"
              type="text"
              required
              placeholder="000.000.000-00 / 000.000.000/0000-00"
            />
          </div>
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

          <div className="space-y-1">
            <Label htmlFor="password">Confirme a Senha</Label>
            <Input id="password" type="password" placeholder="**********" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button title="Clique aqui para cadastrar-se.">Fazer cadastro</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default RegisterCard;
