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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Ban,
  BlocksIcon,
  Check,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import React, { ReactNode, useState } from "react";
import Step1NewCompany from "./steps/step1";
import Step2NewCompany from "./steps/step2";
import Step3NewCompany from "./steps/step3";

const NewCompanyModal = ({
  closeNavMobile,
  ButtonNewTask,
}: {
  closeNavMobile?: () => void;
  ButtonNewTask: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [steps, setSteps] = useState(1);

  console.log(steps);

  const newCompanySteps = [
    {
      email: true,
      name: true,
      password: true,
      confirmPassword: true,
    },
    {
      documentType: true,
      document: true,
      phone: true,
    },
    {
      street: true,
      neighborhood: true,
      number: true,
      city: true,
      state: true,
      cep: true,
    },
  ];

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      modal={true}
    >
      <DialogTrigger asChild>{ButtonNewTask}</DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl lg:max-w-4xl md:w-full">
        <DialogHeader>
          <DialogTitle>Cadastrar Nova Empresa</DialogTitle>
          <DialogDescription>
            Preencha os dados para criar uma nova empresa.
          </DialogDescription>
        </DialogHeader>

        {steps === 1 && <Step1NewCompany />}
        {steps === 2 && <Step2NewCompany />}
        {steps === 3 && <Step3NewCompany />}

        <DialogFooter className="flex gap-1">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-2 items-center"
            variant={"ghost"}
          >
            Cancelar
          </Button>
          {steps > 1 && steps <= 3 && (
            <Button
              onClick={() => setSteps((prev) => --prev)}
              className="flex gap-1 items-center"
            >
              <ChevronLeft /> Voltar
            </Button>
          )}
          {steps >= 1 && steps < 3 && (
            <Button
              onClick={() => setSteps((prev) => ++prev)}
              className="flex gap-1 items-center"
            >
              Proximo <ChevronRight />
            </Button>
          )}
          {steps === 3 && (
            <Button
              variant={"outline"}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex gap-1 items-center"
            >
              Confirmar <Check />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCompanyModal;
