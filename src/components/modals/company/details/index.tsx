"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICompany, newCompanyCredentials } from "@/interfaces/company.inteface";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { ReactNode, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { PenBox, Search } from "lucide-react";
import { ViaCepService } from "@/services/viacepService";

const DetailCompanyModal = ({
  ButtonT,
  company,
}: {
  ButtonT: ReactNode;
  company: newCompanyCredentials;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { register, setValue, watch, getValues } =
    useForm<newCompanyCredentials>({
      defaultValues: company,
    });

  const previewImage = file ? URL.createObjectURL(file) : null;

  const numberRef = useRef<null | HTMLInputElement>(null);

  const handleFindCep = async () => {
    const cep = getValues("cep")
      .replaceAll(" ", "")
      .replaceAll(".", "")
      .replaceAll("-", "");

    const result = await ViaCepService.findByCep(cep);

    setValue("city", result.localidade);
    setValue("neighborhood", result.bairro);
    setValue("street", result.logradouro);
    setValue("state", result.estado);

    numberRef.current?.focus();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      modal={true}
    >
      <DialogTrigger asChild>{ButtonT}</DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl lg:max-w-4xl md:w-full">
        <DialogHeader>
          <DialogTitle>Detalhes empresa</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col mt-5 items-center gap-6">
          <form className="flex gap-4 w-full">
            <div className="flex flex-col gap-4">
              <Avatar className="w-40 h-40 mx-auto">
                <AvatarImage
                  src={
                    previewImage
                      ? previewImage
                      : "https://github.com/shadcn.png"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>WE</AvatarFallback>
              </Avatar>

              {isEditing && (
                <>
                  <label
                    htmlFor="file"
                    title="Alterar logomarca"
                    className="w-full flex justify-center text-sm rounded drop-shadow p-2 bg-blue-600 hover:bg-blue-500 cursor-pointer duration-200 text-primary-foreground"
                  >
                    Alterar Logomarca
                  </label>
                  <div className="flex flex-col">
                    {file && (
                      <Button
                        title="Remover imagem selecionada"
                        type="button"
                        onClick={() => setFile(null)}
                        variant={"link"}
                        size={"sm"}
                      >
                        Remover
                      </Button>
                    )}
                  </div>
                  <Input
                    type="file"
                    multiple={false}
                    onChange={(e) => setFile(e.target.files![0])}
                    name="file"
                    id="file"
                    className="hidden"
                  />
                </>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {!isEditing && (
                <div className="w-full flex justify-end">
                  <Button
                    onClick={() => setIsEditing(true)}
                    type="button"
                    className="flex gap-2 items-center cursor-pointer justify-between w-fit rounded-md bg-blue-700 hover:bg-blue-600 duration-200 p-2 hover:text-white"
                    size={"sm"}
                  >
                    Editar <PenBox size={15} />
                  </Button>
                </div>
              )}
              <div className="flex gap-2 flex-wrap">
                <div className="flex flex-col grow gap-2 basis-48">
                  <Label htmlFor="name" className="text-left">
                    Nome da empresa
                  </Label>
                  <Input
                    disabled={!isEditing}
                    id="name"
                    {...register("name")}
                    placeholder="JC Dev Ltda."
                    className={`col-span-3`}
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-64">
                  <Label htmlFor="email" className="text-left">
                    Email da empresa
                  </Label>
                  <Input
                    disabled
                    id="email"
                    {...register("email")}
                    placeholder="jcdev@email.com"
                    type="email"
                    className={`col-span-3`}
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-48">
                  <Label htmlFor="phone" className="text-left">
                    Telefone
                  </Label>
                  <Input
                    disabled={!isEditing}
                    id="tel"
                    {...register("phone")}
                    placeholder="22997979633"
                    type="tel"
                    className={`col-span-3`}
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-28">
                  <Label htmlFor="documentType" className="text-left">
                    Tipo de documento
                  </Label>
                  <Input
                    disabled
                    id="documentType"
                    {...register("documentType")}
                    placeholder="22997979633"
                    type="text"
                    className={`col-span-3 uppercase`}
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-28">
                  <Label htmlFor="document" className="text-left">
                    Documento
                  </Label>
                  <Input
                    disabled
                    id="document"
                    {...register("document")}
                    placeholder="22997979633"
                    type="text"
                    className={`col-span-3 uppercase`}
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex flex-col grow gap-2 basis-32">
                  <Label htmlFor="cep" className="text-left">
                    CEP
                  </Label>
                  <div className="flex gap-1 items-center">
                    <Input
                      disabled={!isEditing}
                      {...register("cep")}
                      id="cep"
                      type="text"
                      className="col-span-3"
                    />
                    <button
                      disabled={!isEditing}
                      onClick={handleFindCep}
                      type="button"
                      title="Buscar seu endereço pelo cep informado!"
                      className={`rounded-full duration-200 w-[30px] h-[30px] disabled:opacity-80 p-2 flex items-center justify-center bg-primary text-primary-foreground`}
                    >
                      <Search />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col grow gap-2 basis-50">
                  <Label htmlFor="street" className="text-left">
                    Nome da rua
                  </Label>
                  <Input
                    disabled={!isEditing}
                    {...register("street")}
                    id="street"
                    type="tel"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-50">
                  <Label htmlFor="neighborhood" className="text-left">
                    Bairro
                  </Label>
                  <Input
                    disabled={!isEditing}
                    {...register("neighborhood")}
                    id="neighborhood"
                    type="tel"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-24">
                  <Label htmlFor="number" className="text-left">
                    Numero
                  </Label>
                  <Input
                    disabled={!isEditing}
                    {...register("number")}
                    id="number"
                    type="tel"
                    className="col-span-3"
                    ref={numberRef}
                  />
                </div>
                <div className="flex flex-col grow gap-2">
                  <Label htmlFor="state" className="text-left">
                    Estado
                  </Label>
                  <Input
                    disabled={!isEditing}
                    {...register("state")}
                    id="state"
                    type="tel"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col grow gap-2 basis-40">
                  <Label htmlFor="city" className="text-left">
                    Cidade
                  </Label>
                  <Input
                    disabled={!isEditing}
                    {...register("city")}
                    id="city"
                    type="tel"
                    className="col-span-3"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {isEditing && (
          <DialogFooter className="flex gap-2">
            <Button
              onClick={() => {
                setIsEditing(false);
                setFile(null);
              }}
              className="flex gap-2 items-center"
              variant={"link"}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                setIsOpen((prev) => !prev);
                setIsEditing(false);
              }}
              className="flex gap-2 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
            >
              Gravar
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DetailCompanyModal;
