"use client";
import TaskDetailModal from "@/components/modals/tasks/taskDetailModal";
import TopScheduleMenu from "@/components/topScheduleMenu";
import { Calendar, Pickaxe } from "lucide-react";
import React, { useState } from "react";

const AgendaPage = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  function handlePrevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  }

  function handleNextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  }

  function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const days = getDaysInMonth(month, year);

  const taskArr = [
    {
      id: 1,
      title: "Limpeza de caixa d'água",
      time: "10:00",
      category: "limpeza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
    {
      id: 2,
      title: "Solda de portão",
      time: "13:00",
      category: "solda",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
    {
      id: 3,
      title: "Concertar lampada",
      time: "11:00",
      category: "eletrica",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
    {
      id: 4,
      title: "Capinar casa da praia",
      time: "09:00",
      category: "capina",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
  ];

  return (
    <div className="flex flex-col w-[97%] mx-auto">
      <div className="flex items-center justify-center gap-2 mt-4">
        <h2 className="text-2xl font-bold">Agenda</h2>
        <Calendar />
      </div>
      <TopScheduleMenu
        year={year}
        month={month}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <div className="grid grid-cols-7 gap-x-4 gap-y-4 p-4 mx-auto ">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
          <div key={day} className="font-bold text-center ">
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <div
            key={index}
            className="border p-2 text-center rounded shadow-lg flex flex-col relative h-48 "
          >
            <p className="bg-primary w-8 h-8 font-semibold text-sm text-primary-foreground flex items-center justify-center rounded-full absolute inset-0 -top-2 -left-2 mb-1">
              {day.getDate()}
            </p>
            <div className="flex gap-2 justify-center">
              <h6 className="mb-2 font-bold drop-shadow-sm">Tarefas do dia</h6>
              <Pickaxe />
            </div>
            <div className="overflow-auto scroll-smooth">
              {taskArr.map((task) => {
                return <TaskDetailModal key={task.id} task={task} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaPage;
