"use client";
import React from "react";
import MobileDashboardSidebar from "./mobile";
import {
  Building2,
  CircleGauge,
  ClipboardCheck,
  HandCoins,
  Handshake,
  SmilePlus,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const path = usePathname();

  return (
    <div className="flex ">
      <div className="lg:hidden m-2">
        <MobileDashboardSidebar />
      </div>

      <aside className="hidden lg:flex flex-col p-4 items-center w-64 shadow-lg h-screen">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 items-center justify-center">
            <h3 className="font-semibold text-2xl">Dashboard</h3>
          </div>

          <nav>
            <ul className="flex flex-col gap-5 mt-6">
              <li>
                <Link href="/dashboard/empresas">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/empresas"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <Building2 size={16} />
                    <p>Empresas</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/usuarios-empresas">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/usuarios-empresas"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <Users size={16} />
                    <p>Usuários de Empresas</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/usuarios-solicitantes">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/usuarios-solicitantes"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <SmilePlus size={16} />
                    <p>Usuários Solicitantes</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/usuarios">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/usuarios"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <Handshake size={16} />
                    <p>Usuários</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/tarefas">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/tarefas"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <ClipboardCheck size={16} />
                    <p>Tarefas</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/planos">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/planos"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <HandCoins size={16} />
                    <p>Planos</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/metricas">
                  <div
                    title="Ir para pagina de administração de empresas."
                    className={`flex items-center gap-1 text-sm p-2 rounded-md ${
                      path === "/dashboard/metricas"
                        ? "text-primary-foreground bg-primary"
                        : "hover:text-primary-foreground hover:bg-primary"
                    }  duration-200 cursor-pointer`}
                  >
                    <CircleGauge size={16} />
                    <p>Metricas</p>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default DashboardSidebar;