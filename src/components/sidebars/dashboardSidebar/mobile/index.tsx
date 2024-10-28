import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building2,
  ChevronRight,
  CircleGauge,
  ClipboardCheck,
  HandCoins,
  Handshake,
  SmilePlus,
  User,
  UserCog,
  Users,
} from "lucide-react";
import Link from "next/link";

const MobileDashboardSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          className="rounded-r-full absolute -left-3"
          size={"icon"}
        >
          <ChevronRight />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Dashboard Menu</SheetTitle>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col gap-5 mt-6">
            <li>
              <Link href="/dashboard/metricas">
                <div
                  title="Ir para pagina de administração de empresas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <CircleGauge size={16} />
                  <p>Metricas</p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/usuarios-empresa">
                <div
                  title="Ir para pagina de administração de empresas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <Users size={16} />
                  <p>Usuários da Empresa</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/clientes-empresa">
                <div
                  title="Ir para pagina de administração de empresas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <Users size={16} />
                  <p>Clientes da Empresa</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usuarios-solicitantes">
                <div
                  title="Ir para pagina de administração de empresas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <SmilePlus size={16} />
                  <p>Usuários Solicitantes</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/empresas">
                <div
                  title="Ir para pagina de administração de empresas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <Building2 size={16} />
                  <p>Empresas</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usuarios">
                <div
                  title="Ir para pagina de administração de empresas."
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
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
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
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
                  className="flex items-center gap-1 text-sm hover:text-neutral-400 duration-200 cursor-pointer"
                >
                  <HandCoins size={16} />
                  <p>Planos</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDashboardSidebar;
