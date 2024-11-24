"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { CompanyUserCreateCredentials } from "@/interfaces/companyUsers.interface";
import { CompanyUsersService } from "@/services/companyUsersService";
import { Ban, Eye, EyeOff, Plus } from "lucide-react";
import React, { ReactNode, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation, useQueryClient } from "react-query";

const CreateCompanyUserModal = ({
  ButtonNewTask,
}: {
  ButtonNewTask: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const query = useQueryClient();

  const { register, handleSubmit, reset } =
    useForm<CompanyUserCreateCredentials>({});
  const { mutateAsync, isLoading } = useMutation(
    ["CreateCompanyUser"],
    CompanyUsersService.create,
    {
      onSuccess: () => {
        Promise.all([
          reset(),
          toast({
            title: "Usuários da Empresa",
            description: "Usuário criado com sucesso!",
          }),
          setShowPassword(false),
          setIsOpen((prev) => !prev),
          query.invalidateQueries("companyUsers"),
        ]);
      },
    }
  );

  async function onSubmit(data: CompanyUserCreateCredentials) {
    await mutateAsync(data);
  }

  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      modal={true}
    >
      <DialogTrigger asChild>{ButtonNewTask}</DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl lg:max-w-4xl md:w-full">
        <DialogHeader>
          <DialogTitle>Novo Usuário Empresa</DialogTitle>
          <DialogDescription>
            Preencha os dados para criar um novo usuário da empresa
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          className="flex flex-col gap-4 flex-wrap"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="text-left">
              Nome do usuário
            </Label>
            <Input
              {...register("user.name")}
              disabled={isLoading}
              title="Nome do usuário"
              placeholder="John Doe"
              className="col-span-3"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input
              {...register("user.email")}
              disabled={isLoading}
              title="Email do usuário"
              type="email"
              placeholder="johndoe@email.com"
              className="col-span-3"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-left">
              Senha de acesso
            </Label>
            <div className="flex gap-2 items-center ">
              <Input
                {...register("user.password")}
                disabled={isLoading}
                placeholder="********"
                type={showPassword ? "text" : "password"}
                className={`col-span-3`}
              />
              <button
                disabled={isLoading}
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className={`rounded-full duration-200 w-[30px] h-[30px] p-2 flex items-center justify-center ${
                  showPassword
                    ? "bg-primary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>
        </form>

        <DialogFooter className="flex gap-2">
          <Button
            disabled={isLoading}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-2 items-center rounded-full bg-stone-200 hover:bg-stone-300 text-secondary-foreground"
          >
            <Ban size={20} /> Cancelar
          </Button>
          <Button
            onClick={() => formRef.current?.requestSubmit()}
            className="flex gap-1 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
          >
            <Plus size={20} /> Criar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCompanyUserModal;
