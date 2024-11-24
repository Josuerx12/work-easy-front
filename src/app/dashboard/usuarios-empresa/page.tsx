import CompanyUsersPagination from "@/components/paginations/companyUsers";
import LoadingScreen from "@/components/screens/loading";
import CompanyUsersTable from "@/components/tables/companyUsersTable";
import TopBarCompanyUsersMenu from "@/components/topBars/topBarCompanyUsersMenu";
import React, { Suspense } from "react";

const DashboardUsuariosEmpresas = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="pr-2 w-11/12">
        <h3 className="font-bold text-2xl py-4 text-secondary-foreground text-center">
          Usuários Empresa
        </h3>

        <TopBarCompanyUsersMenu />
        <CompanyUsersTable />
        <CompanyUsersPagination />
      </div>
    </Suspense>
  );
};

export default DashboardUsuariosEmpresas;
