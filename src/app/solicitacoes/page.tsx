import RequestsTable from "@/components/tables/requestsTable";
import React from "react";

const RequestsPage = () => {
  const taskArr = [
    {
      id: 1,
      title: "Limpeza de caixa d'água",
      time: "10:00",
      category: "limpeza",
      status: "created",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
    {
      id: 2,
      title: "Solda de portão",
      time: "13:00",
      category: "solda",
      status: "incoming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
    {
      id: 3,
      title: "Concertar lampada",
      time: "11:00",
      category: "eletrica",
      status: "started",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
    {
      id: 4,
      title: "Capinar casa da praia",
      time: "09:00",
      category: "capina",
      status: "finished",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam possimus vel, earum necessitatibus sit repellat nihil ad magni sed unde dignissimos, natus, itaque nobis ab aspernatur nostrum expedita velit?",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl uppercase font-bold mx-auto mt-4 text-center">
        Solicitações
      </h2>

      <div className="w-11/12 mx-auto mt-4">
        <RequestsTable tasks={taskArr} />
      </div>
    </div>
  );
};

export default RequestsPage;
