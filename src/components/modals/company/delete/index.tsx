"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICompany } from "@/interfaces/company.inteface";
import { BadgeX } from "lucide-react";
import React, { ReactNode, useState } from "react";

const DeleteCompanyModal = ({
  ButtonT,
  company,
}: {
  ButtonT: ReactNode;
  company: ICompany;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      modal={true}
    >
      <DialogTrigger asChild>{ButtonT}</DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl lg:max-w-4xl md:w-full">
        <DialogHeader>
          <DialogTitle>Deletar empresa</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6">
          <BadgeX className="text-red-600" size={300} />
          <p>
            Tem certeza que deseja excluir a empresa <b>{company.name}</b>,
            associada ao documento: <b>{company.document}</b>?
          </p>
          <p>Caso tenha certeza clique em deletar!</p>
        </div>

        <DialogFooter className="flex gap-2">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-2 items-center"
            variant={"link"}
          >
            Cancelar
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-2 items-center rounded-full"
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCompanyModal;
