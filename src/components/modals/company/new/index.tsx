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
import React, { ReactNode, useRef, useState } from "react";
import Step1NewCompany from "./steps/step1";
import Step2NewCompany from "./steps/step2";
import Step3NewCompany from "./steps/step3";
import { useForm } from "react-hook-form";
import VerifyCompanyData from "./verifyData";

export type newCompanyCredentials = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  documentType: string;
  document: string;
  phone: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
  cep: string;
};

const NewCompanyModal = ({
  closeNavMobile,
  ButtonNewTask,
}: {
  closeNavMobile?: () => void;
  ButtonNewTask: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [steps, setSteps] = useState(1);

  const { register, reset, setValue, handleSubmit, getValues } =
    useForm<newCompanyCredentials>();

  function onSubmit(data: newCompanyCredentials) {
    console.log(data);
    setSteps(1);
    setIsOpen((prev) => !prev);
    reset();
  }

  function handleCancel() {
    setSteps(1);
    setIsOpen((prev) => !prev);
    reset();
  }

  const formRef = useRef<null | HTMLFormElement>(null);

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

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="min-h-52"
        >
          {steps === 1 && (
            <Step1NewCompany
              register={register}
              reset={reset}
              setValue={setValue}
            />
          )}
          {steps === 2 && (
            <Step2NewCompany
              register={register}
              reset={reset}
              setValue={setValue}
            />
          )}
          {steps === 3 && (
            <Step3NewCompany
              register={register}
              reset={reset}
              setValue={setValue}
            />
          )}
          {steps === 4 && (
            <VerifyCompanyData getValues={getValues} handleStep={setSteps} />
          )}
        </form>

        <DialogFooter className="flex gap-1">
          <Button
            onClick={handleCancel}
            className="flex gap-2 items-center rounded-full bg-stone-200 hover:bg-stone-300 text-secondary-foreground"
          >
            Cancelar
          </Button>
          {steps > 1 && steps <= 3 && (
            <Button
              onClick={() => setSteps((prev) => --prev)}
              className="flex gap-1 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
            >
              <ChevronLeft /> Voltar
            </Button>
          )}
          {steps >= 1 && steps < 4 && (
            <Button
              onClick={() => setSteps((prev) => ++prev)}
              className="flex gap-1 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
            >
              Proximo <ChevronRight />
            </Button>
          )}
          {steps === 4 && (
            <Button
              onClick={() => formRef.current?.requestSubmit()}
              className="flex gap-1 items-center rounded-full bg-slate-600"
            >
              Gravar <Check />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCompanyModal;
