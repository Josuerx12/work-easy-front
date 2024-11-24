/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import React, { useEffect, useState } from "react";
import { RefreshCcw, Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { CompanyService } from "@/services/companyService";
import { CompanyFilter } from "@/interfaces/company.inteface";
import {
  PaginationInputProps,
  PaginatedResult,
} from "@/interfaces/pagination.interface";
import { useDebounce } from "@/hooks/useDebounce";
import {
  CompanyUserFilter,
  ICompanyUser,
} from "@/interfaces/companyUsers.interface";
import CreateCompanyUserModal from "@/components/modals/companyUsers/create";
import { CompanyUsersService } from "@/services/companyUsersService";

const TopBarCompanyUsersMenu = () => {
  const query = useSearchParams();
  const params = new URLSearchParams(query.toString());
  const router = useRouter();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const filterQuery = query.get("filter") ? String(query.get("filter")) : "";

  const [paginationFilters, setPaginationFilters] = useState<
    PaginationInputProps<CompanyUserFilter>
  >({ page: pageQuery, perPage: perPageQuery, filter: filterQuery });

  const [search, setSearch] = useState("");

  const deboundedValue = useDebounce(search);

  const { refetch, isRefetching, isLoading } = useQuery<
    PaginatedResult<ICompanyUser>
  >(["companyUsers", paginationFilters], ({ queryKey }) => {
    const [, params] = queryKey;

    return CompanyUsersService.getAll(
      params as PaginationInputProps<CompanyUserFilter>
    );
  });

  useEffect(() => {
    setPaginationFilters((prev) => ({ ...prev, filter: deboundedValue }));

    params.set("filter", deboundedValue);
    paginationFilters?.page &&
      params.set("page", paginationFilters.page.toString());
    paginationFilters?.perPage &&
      params.set("perPage", paginationFilters.perPage.toString());

    router.push(`?${params.toString()}`);
  }, [deboundedValue]);

  return (
    <div className="hidden lg:block w-fit drop-shadow my-4 bg-secondary ml-auto px-4 py-2 rounded-md">
      <div className="flex gap-4 justify-end items-center">
        <Button
          title="Atualizar lista de empresas"
          onClick={() => refetch()}
          className="group relative"
          size={"sm"}
        >
          <RefreshCcw
            size={16}
            className={`group-hover:rotate-180 duration-300 ${
              isRefetching || isLoading ? "animate-spin" : ""
            }`}
          />
        </Button>
        <form>
          <div className="flex gap-2  p-1 items-center bg-white rounded-md">
            <Search size={16} />
            <input
              value={search}
              className="bg-transparent outline-none"
              placeholder="Buscar por nome"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        <CreateCompanyUserModal
          ButtonNewTask={
            <Button
              size={"sm"}
              title="Adicionar nova Empresa."
              className="bg-primary hover:bg-black duration-200"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Novo usuário</p> <UserPlus size={16} />
              </div>
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TopBarCompanyUsersMenu;
