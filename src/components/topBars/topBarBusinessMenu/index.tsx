"use client";
import React from "react";
import { BookmarkPlus, Filter, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewTaskModal from "@/components/modals/tasks/newTaskModal";
import FilterRequestsSidebar from "@/components/sidebars/filterRequestsSidebar";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import NewCompanyModal from "@/components/modals/company/new";

const TopBarBusinessMenu = () => {
  const { user } = useAuth();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="hidden lg:block w-fit drop-shadow-xl my-4 bg-secondary ml-auto px-4 py-2 rounded-md">
      <div className="flex gap-4 justify-end items-center">
        <FilterRequestsSidebar />
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
