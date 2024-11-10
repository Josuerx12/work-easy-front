import BusinessPagination from "@/components/paginations/business";
import LoadingScreen from "@/components/screens/loading";
import BusinessTable from "@/components/tables/businessTable";
import TopBarBusinessMenu from "@/components/topBars/topBarBusinessMenu";
import React, { Suspense } from "react";

const DashboardEmpresas = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="pr-2 w-11/12">
        <h3 className="font-bold text-2xl py-4 text-secondary-foreground text-center">
          Empresas
        </h3>

        <TopBarBusinessMenu />

        <BusinessTable />
        <BusinessPagination />
      </div>
    </Suspense>
  );
};

export default DashboardEmpresas;
