"use client";
import LoadingScreen from "@/components/screens/loading";
import RequestsTable from "@/components/tables/requestsTable";
import TopBarRequestMenu from "@/components/topBars/topBarRequestMenu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const RequestsPage = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!user && !loading) {
      redirect("/auth");
    }
  }, [user, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

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
    <div className="w-11/12 mx-auto mt-4">
      <h2 className="text-2xl uppercase font-bold mx-auto mt-4 text-center">
        Solicitações
      </h2>

      <TopBarRequestMenu />

      <div className=" mx-auto mt-6 border rounded">
        <RequestsTable tasks={taskArr} />
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default RequestsPage;
