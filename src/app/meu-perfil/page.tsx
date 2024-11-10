"use client";
import LoadingScreen from "@/components/screens/loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Lock, PenBox } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const MeuPerfilPage = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!user && !loading) {
      redirect("/auth");
    }
  }, [user, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center ">
      <h4 className="mt-4 font-bold text-xl">Perfil do Usuário</h4>

      <div className="mt-6 border p-5 w-11/12 md:w-6/12  rounded">
        <Avatar className="w-40 h-40 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>WE</AvatarFallback>
        </Avatar>

        <div className="mt-6">
          <h4 className="text-xl font-bold">Dados:</h4>
          <p>
            <span className="font-semibold">Nome:</span> {user?.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p>
            <span className="font-semibold">Roles:</span>
            {user?.support && <span className="font-bold"> *Suporte* </span>}
            {user?.moderator && (
              <span className="font-bold"> *Moderador* </span>
            )}
            {user?.admin && (
              <span className="font-bold"> *Administrador* </span>
            )}
          </p>

          <div className="flex gap-2 mt-4">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <span>Alterar Senha</span> <Lock size={18} />
            </Button>
            <Button className="flex items-center gap-2 ">
              <span>Editar Usuário</span> <PenBox size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeuPerfilPage;
