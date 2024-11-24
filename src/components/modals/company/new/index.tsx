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
import { Check, ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import React, { ReactNode, useRef, useState } from "react";
import Step2NewCompany from "./steps/step2";
import Step3NewCompany from "./steps/step3";
import { useForm } from "react-hook-form";
import Step1NewCompany from "./steps/step1";
import VerifyCompanyData from "./verifyData";
import {
  createCompanyErros,
  newCompanyCredentials,
} from "@/interfaces/company.inteface";
import { useMutation } from "react-query";
import { CompanyService } from "@/services/companyService";
import { useToast } from "@/hooks/use-toast";
import { revalidatePath } from "next/cache";

const NewCompanyModal = ({
  closeNavMobile,
  ButtonNewTask,
}: {
  closeNavMobile?: () => void;
  ButtonNewTask: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [steps, setSteps] = useState(1);

  const { toast } = useToast();

  const { register, reset, setValue, handleSubmit, getValues, watch } =
    useForm<newCompanyCredentials>({
      defaultValues: {
        documentType: "cpf",
      },
    });

  const {
    mutateAsync,
    reset: resetMutation,
    isLoading,
    error,
  } = useMutation<any, createCompanyErros, newCompanyCredentials>(
    ["createCompany"],
    CompanyService.create,
    {
      onSuccess: (data: any) => {
        Promise.all([
          setSteps(1),
          setIsOpen((prev) => !prev),
          reset(),
          toast({
            title: "Nova empresa cadastrada!",
            description: `Empresa: ${data.name}, cadastrada com sucesso!`,
          }),
        ]);
      },
      onError: (err) => {
        if (err.error) {
          toast({
            title: "Error ao cadastrar nova empresa.",
            description: `Error: ${err.error}!`,
            variant: "destructive",
          });
        }

        if (err.errors) {
          toast({
            title: "Error ao cadastrar nova empresa.",
            description: `Error: Verifique as credenciais informadas!`,
            variant: "destructive",
          });
        }
      },
    }
  );

  async function onSubmit(data: newCompanyCredentials) {
    await mutateAsync(data);
  }

  function handleCancel() {
    setSteps(1);
    setIsOpen((prev) => !prev);
    reset();
    resetMutation();
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
              errors={error}
            />
          )}
          {steps === 2 && (
            <Step2NewCompany
              register={register}
              reset={reset}
              setValue={setValue}
              watch={watch}
              errors={error}
            />
          )}
          {steps === 3 && (
            <Step3NewCompany
              register={register}
              reset={reset}
              setValue={setValue}
              errors={error}
              getValues={getValues}
            />
          )}
          {steps === 4 && (
            <VerifyCompanyData
              getValues={getValues}
              handleStep={setSteps}
              errors={error}
            />
          )}
        </form>

        {error?.error && (
          <p className="w-full text-red-600 bg-neutral-200 p-2 rounded-md text-center">
            <span className="font-bold">Error: </span>
            {error.error}
          </p>
        )}

        <DialogFooter className="flex gap-1">
          <Button
            disabled={isLoading}
            onClick={handleCancel}
            className="flex gap-2 items-center rounded-full bg-stone-200 hover:bg-stone-300 text-secondary-foreground"
          >
            Cancelar
          </Button>
          {steps > 1 && steps <= 3 && (
            <Button
              disabled={isLoading}
              onClick={() => setSteps((prev) => --prev)}
              className="flex gap-1 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
            >
              <ChevronLeft /> Voltar
            </Button>
          )}
          {steps >= 1 && steps < 4 && (
            <Button
              disabled={isLoading}
              onClick={() => setSteps((prev) => ++prev)}
              className="flex gap-1 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
            >
              Proximo <ChevronRight />
            </Button>
          )}
          {steps === 4 && (
            <Button
              disabled={isLoading}
              onClick={() => formRef.current?.requestSubmit()}
              className="flex gap-1 items-center rounded-full bg-slate-600"
            >
              {isLoading ? (
                <>
                  Gravando <LoaderCircle className="animate-spin" />
                </>
              ) : (
                <>
                  Gravar <Check />
                </>
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCompanyModal;
