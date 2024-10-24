import BusinessTable from "@/components/tables/businessTable";
import TopBarBusinessMenu from "@/components/topBars/topBarBusinessMenu";
import React from "react";

const DashboardEmpresas = () => {
  return (
    <div className="pr-2 w-11/12">
      <h3 className="font-bold text-2xl py-4 text-secondary-foreground text-center">
        Empresas
      </h3>

      <TopBarBusinessMenu />

      <BusinessTable
        business={[
          {
            id: 1,
            document: "123123213123123",
            email: "teste@gmail.com",
            name: "teste123",
            phone: "22997979633",
          },
          {
            id: 2,
            document: "123123213123123",
            email: "teste1@gmail.com",
            name: "teste1234",
            phone: "22997979632",
          },
          {
            id: 3,
            document: "123123213123123",
            email: "teste2@gmail.com",
            name: "teste1236",
            phone: "22997979631",
          },
          {
            id: 4,
            document: "123123213123123",
            email: "teste3@gmail.com",
            name: "teste1237",
            phone: "22997979634",
          },
        ]}
      />
    </div>
  );
};

export default DashboardEmpresas;
