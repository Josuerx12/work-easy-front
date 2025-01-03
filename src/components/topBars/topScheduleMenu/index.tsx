"use client";

import React from "react";
import {
  BookmarkPlus,
  BookPlus,
  ChevronLeft,
  ChevronRight,
  Plus,
  PlusCircle,
  SquareChartGantt,
} from "lucide-react";
import { months } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NewTaskModal from "@/components/modals/tasks/newTaskModal";

type Props = {
  month: number;
  year: number;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
};

const TopScheduleMenu = ({
  handleNextMonth,
  handlePrevMonth,
  month,
  year,
}: Props) => {
  return (
    <div className="hidden lg:block w-fit drop-shadow mt-4 bg-secondary ml-auto px-4 py-2 rounded-md">
      <div className="flex gap-4 justify-end items-center">
        <div className="flex justify-between w-40 items-center gap-2">
          <Button onClick={handlePrevMonth} title="Mes anterior" size={"icon"}>
            <ChevronLeft size={18} />
          </Button>
          <div className="text-sm text-center">
            <p>{months[month]}</p>
            <p>{year}</p>
          </div>
          <Button onClick={handleNextMonth} title="Mes Seguinte" size={"icon"}>
            <ChevronRight size={18} />
          </Button>
        </div>
        <Button
          title="Baixar relatorio mensal em xlsx (Microsoft Excel)."
          className="bg-green-500 hover:bg-green-600 duration-200 text-primary-foreground"
        >
          <div className="flex gap-2 items-center capitalize">
            <p>relatorio mensal</p> <SquareChartGantt />
          </div>
        </Button>
        <NewTaskModal
          ButtonNewTask={
            <Button
              title="Adicionar nova tarefa."
              className="bg-primary hover:bg-black duration-200"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Nova tarefa</p> <BookmarkPlus />
              </div>
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TopScheduleMenu;
