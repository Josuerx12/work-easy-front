"use client";
import React from "react";
import { BookmarkPlus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewTaskModal from "@/components/modals/tasks/newTaskModal";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

const TopBarRequestMenu = () => {
  const { user } = useAuth();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="hidden lg:block w-fit drop-shadow mt-4 bg-secondary ml-auto px-4 py-2 rounded-md">
      <div className="flex gap-4 justify-end items-center">
        <NewTaskModal
          ButtonNewTask={
            <Button
              title="Adicionar nova tarefa."
              className="bg-primary hover:bg-black duration-200"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Nova Solicitação</p> <BookmarkPlus />
              </div>
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TopBarRequestMenu;
