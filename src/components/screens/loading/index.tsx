import { Loader, LoaderCircle, Wrench } from "lucide-react";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen fixed h-full z-50 w-screen flex items-center pt-24 bg-stone-50 flex-col gap-y-4">
      <div className="flex z-50 gap-1 items-center p-2 rounded-md bg-primary text-primary-foreground">
        <div className="w-10 h-10 flex items-center border-2 rounded-full border-teal-400 p-1.5">
          <Wrench className="text-teal-400" size={26} />
        </div>
        <h1 className="text-2xl">WorkEasy</h1>
      </div>

      <div className="flex gap-3 items-center p-4">
        <span className="font-bold md:text-3xl">
          Carregando dados do usuário
        </span>
        <LoaderCircle size={30} className="animate-spin" />
      </div>
    </div>
  );
};

export default LoadingScreen;
