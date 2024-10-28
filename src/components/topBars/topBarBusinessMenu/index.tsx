"use client";
import React from "react";
import { Filter, Handshake, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import NewCompanyModal from "@/components/modals/company/new";
import FilterCompanyModal from "@/components/modals/company/filter";

const TopBarBusinessMenu = () => {
  const { user } = useAuth();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="hidden lg:block w-fit drop-shadow-xl my-4 bg-secondary ml-auto px-4 py-2 rounded-md">
      <div className="flex gap-4 justify-end items-center">
        <FilterCompanyModal
          ButtonNewTask={
            <Button
              title="Baixar relatorio mensal em xlsx (Microsoft Excel)."
              className="bg-blue-600 hover:bg-blue-700 duration-200 text-primary-foreground"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Filtros</p> <Filter />
              </div>
            </Button>
          }
        />
        <form>
          <div className="flex gap-2  p-2 items-center bg-white rounded-md">
            <Search size={16} />
            <input
              className="bg-transparent outline-none"
              placeholder="Buscar por nome"
              type="text"
            />
          </div>
        </form>
        <NewCompanyModal
          ButtonNewTask={
            <Button
              title="Adicionar nova Empresa."
              className="bg-primary hover:bg-black duration-200"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Nova Empresa</p> <Handshake />
              </div>
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TopBarBusinessMenu;
