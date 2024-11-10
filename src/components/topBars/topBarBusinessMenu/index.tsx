/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import React, { useEffect, useState } from "react";
import { Filter, Handshake, RefreshCcw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import NewCompanyModal from "@/components/modals/company/new";
import FilterCompanyModal from "@/components/modals/company/filter";
import { useQuery } from "react-query";
import { CompanyService } from "@/services/companyService";
import { CompanyFilter, ICompany } from "@/interfaces/company.inteface";
import {
  PaginationInputProps,
  PaginatedResult,
} from "@/interfaces/pagination.interface";
import { useDebounce } from "@/hooks/useDebounce";

const TopBarBusinessMenu = () => {
  const query = useSearchParams();
  const params = new URLSearchParams(query.toString());
  const router = useRouter();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const filterQuery = query.get("filter") ? String(query.get("filter")) : "";

  const [paginationFilters, setPaginationFilters] = useState<
    PaginationInputProps<CompanyFilter>
  >({ page: pageQuery, perPage: perPageQuery, filter: filterQuery });

  const [search, setSearch] = useState("");

  const deboundedValue = useDebounce(search);

  const { refetch, isRefetching, isLoading } = useQuery<
    PaginatedResult<ICompany>
  >(["companies", paginationFilters], ({ queryKey }) => {
    const [, params] = queryKey;

    return CompanyService.getAll(params as PaginationInputProps<CompanyFilter>);
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

        <FilterCompanyModal
          ButtonNewTask={
            <Button
              size={"sm"}
              title="Baixar relatorio mensal em xlsx (Microsoft Excel)."
              className="bg-blue-600 hover:bg-blue-700 duration-200 text-primary-foreground"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Filtros</p> <Filter size={16} />
              </div>
            </Button>
          }
        />
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
        <NewCompanyModal
          ButtonNewTask={
            <Button
              size={"sm"}
              title="Adicionar nova Empresa."
              className="bg-primary hover:bg-black duration-200"
            >
              <div className="flex gap-2 items-center capitalize">
                <p>Nova Empresa</p> <Handshake size={16} />
              </div>
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TopBarBusinessMenu;
