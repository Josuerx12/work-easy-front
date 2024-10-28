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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import React, { ReactNode, useState } from "react";

const FilterCompanyModal = ({
  ButtonNewTask,
}: {
  ButtonNewTask: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      modal={true}
    >
      <DialogTrigger asChild>{ButtonNewTask}</DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl lg:max-w-4xl md:w-full">
        <DialogHeader>
          <DialogTitle>Filtrar Empresa</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label className="text-left">Estado</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estados:</SelectLabel>
                  <SelectItem value="rj">RJ</SelectItem>
                  <SelectItem value="sp">SP</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="mg">MG</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-left">Cidade</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cidades:</SelectLabel>
                  <SelectItem value="limpeza">Campos dos Goytacazes</SelectItem>
                  <SelectItem value="capina">Rio de Janeiro</SelectItem>
                  <SelectItem value="solda">Nova Iguaçu</SelectItem>
                  <SelectItem value="eletrica">Macaé</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
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
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-2 items-center bg-teal-500 hover:bg-teal-600 rounded-full"
          >
            Aplicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterCompanyModal;
