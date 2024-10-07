"use client";

import React, { useState } from "react";

import {
  CalendarCheck,
  Kanban,
  LayoutDashboard,
  Lock,
  Menu,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import NewTaskModal from "../modals/newTaskModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full z-50 flex justify-between items-center h-20 py-4 px-5 md:px-10 bg-primary text-primary-foreground">
        <Link href="/" title="Voltar para pagina inicial">
          <div className="flex z-50 gap-1 items-center">
            <div className="w-10 h-10 flex items-center border-2 rounded-full border-teal-400 p-1.5">
              <Wrench className="text-teal-400" size={26} />
            </div>
            <h1 className="text-2xl">WorkEasy</h1>
          </div>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center">
            <li>
              <NewTaskModal />
            </li>
            <li>
              <Link href="/">
                <div
                  title="Ir para pagina de calendario de tarefas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <CalendarCheck size={16} />
                  <p>Agenda</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div
                  title="Ir para pagina de solitações de tarefas em aberto."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <Kanban size={16} />
                  <p>Solicitações</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/metricas">
                <div
                  title="Ir para o dashboard administrativo."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <LayoutDashboard size={16} />
                  <p>Dashboard</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/auth">
                <div
                  title="Identifique-se para utilizar o app."
                  className="flex items-center bg-teal-400 text-primary font-bold p-2 rounded-md  gap-2 text-sm hover:bg-teal-300 duration-200 cursor-pointer"
                >
                  <Lock size={16} />
                  <p>Autentique-se</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <Button
          className="z-50 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </header>
      <nav
        className={`absolute z-20 w-full h-full duration-300 bg-primary ${
          isOpen ? "top-0 opacity-100" : "-top-full opacity-0"
        }`}
      >
        <ul className="flex gap-6 pt-32 flex-col items-center text-primary-foreground">
          <li>
            <Link onClick={() => setIsOpen((prev) => !prev)} href="/">
              <div
                title="Ir para pagina de calendario de tarefas."
                className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
              >
                <CalendarCheck size={16} />
                <p>Agenda</p>
              </div>
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen((prev) => !prev)} href="/">
              <div
                title="Ir para pagina de solitações de tarefas em aberto."
                className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
              >
                <Kanban size={16} />
                <p>Solicitações</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen((prev) => !prev)}
              href="/dashboard/metricas"
            >
              <div
                title="Ir para o dashboard administrativo."
                className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
              >
                <LayoutDashboard size={16} />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li>
            <NewTaskModal closeNavMobile={() => setIsOpen((prev) => !prev)} />
          </li>
          <li>
            <Link onClick={() => setIsOpen((prev) => !prev)} href="/auth">
              <div
                title="Identifique-se para utilizar o app."
                className="flex items-center bg-teal-400 text-primary font-bold p-2 rounded-md  gap-2 text-sm hover:bg-teal-300 duration-200 cursor-pointer"
              >
                <Lock size={16} />
                <p>Autentique-se</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
