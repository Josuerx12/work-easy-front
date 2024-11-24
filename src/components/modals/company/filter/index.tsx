/* eslint-disable @typescript-eslint/no-unused-expressions */
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
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationInputProps } from "@/interfaces/pagination.interface";
import { CompanyFilter } from "@/interfaces/company.inteface";
type LocationFilter = {
  city?: string;
  uf?: string;
};

const FilterCompanyModal = ({
  ButtonNewTask,
}: {
  ButtonNewTask: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const query = useSearchParams();
  const params = new URLSearchParams(query.toString());
  const router = useRouter();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const searchQuery = query.get("filter[search]")
    ? String(query.get("filter[search]"))
    : "";
  const ufQuery = query.get("filter[uf]")
    ? String(query.get("filter[uf]"))
    : "";
  const cityQuery = query.get("filter[city]")
    ? String(query.get("filter[city]"))
    : "";

  const { handleSubmit, setValue, reset, watch } = useForm<LocationFilter>({
    defaultValues: {
      city: cityQuery,
      uf: ufQuery,
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: LocationFilter) {
    data.city && data.city.length > 0
      ? params.set("filter[city]", data.city)
      : params.delete("filter[city]");
    data.uf && data.uf.length > 0
      ? params.set("filter[uf]", data.uf)
      : params.delete("filter[uf]");
    pageQuery && params.set("page", String(pageQuery));
    perPageQuery && params.set("perPage", String(perPageQuery));
    searchQuery && params.set("filter[search]", String(searchQuery));

    router.push(`?${params}`);

    setIsOpen((prev) => !prev);
  }

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
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label className="text-left">Estado</Label>
              <Select onValueChange={(v) => setValue("uf", v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue={watch("uf")}>
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
              <Select onValueChange={(v) => setValue("city", v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione uma cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue={watch("city")}>
                    <SelectLabel>Cidades:</SelectLabel>
                    <SelectItem value="campos dos goytacazes">
                      Campos dos Goytacazes
                    </SelectItem>
                    <SelectItem value="rio de janeiro">
                      Rio de Janeiro
                    </SelectItem>
                    <SelectItem value="nova iguacu">Nova Iguaçu</SelectItem>
                    <SelectItem value="macae">Macaé</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {(ufQuery || cityQuery) && (
              <Button
                type="button"
                onClick={() => {
                  setValue("uf", "");
                  setValue("city", "");
                }}
                variant={"link"}
              >
                Limpar filtros
              </Button>
            )}
          </div>
        </form>

        <DialogFooter className="flex gap-2">
          <Button
            onClick={() => {
              setIsOpen((prev) => !prev);
              reset();
            }}
            className="flex gap-2 items-center"
            variant={"link"}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => formRef.current?.requestSubmit()}
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
