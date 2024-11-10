/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CompanyFilter, ICompany } from "@/interfaces/company.inteface";
import {
  PaginationInputProps,
  PaginatedResult,
} from "@/interfaces/pagination.interface";
import { CompanyService } from "@/services/companyService";
import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const BusinessPagination = () => {
  const query = useSearchParams();
  const params = new URLSearchParams(query.toString());
  const router = useRouter();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const filterQuery = query.get("filter") ? String(query.get("filter")) : "";

  const [paginationFilters, setPaginationFilters] = useState<
    PaginationInputProps<CompanyFilter>
  >({ page: pageQuery, perPage: perPageQuery, filter: filterQuery });

  const { refetch, isRefetching, isLoading, data } = useQuery<
    PaginatedResult<ICompany>
  >(["companies", paginationFilters], ({ queryKey }) => {
    const [, params] = queryKey;

    return CompanyService.getAll(params as PaginationInputProps<CompanyFilter>);
  });

  useEffect(() => {
    paginationFilters?.filter && params.set("filter", paginationFilters.filter);
    paginationFilters?.page &&
      params.set("page", paginationFilters.page.toString());
    paginationFilters?.perPage &&
      params.set("perPage", paginationFilters.perPage.toString());

    router.push(`?${params.toString()}`);
  }, [
    paginationFilters.page,
    paginationFilters.perPage,
    paginationFilters.filter,
  ]);
  return (
    <div className="mt-5 flex items-start gap-4 justify-end flex-row">
      <div className="flex items-center gap-3">
        <Button
          size={"sm"}
          type="button"
          title="Página anterior"
          onClick={() =>
            setPaginationFilters((prev) => ({
              ...prev,
              page: prev.page && prev.page <= 1 ? 1 : (prev.page as number) - 1,
            }))
          }
          disabled={paginationFilters.page === 1 || isRefetching || isLoading}
        >
          <ChevronLeft size={14} /> Anterior
        </Button>
        <p className="flex gap-3">
          <b>{paginationFilters.page}</b>-<b>{data?.total}</b>
        </p>
        <Button
          size={"sm"}
          title="Proxima página"
          type="button"
          onClick={() =>
            setPaginationFilters((prev) => ({
              ...prev,
              page:
                prev.page && prev.page === data?.total
                  ? prev.page
                  : (prev.page as number) + 1,
            }))
          }
          disabled={
            paginationFilters.page === data?.total || isRefetching || isLoading
          }
        >
          Proxima <ChevronRight size={14} />
        </Button>
      </div>
      <div className="flex w-fit gap-2">
        <Select
          defaultValue={`${paginationFilters.perPage}`}
          onValueChange={(e) =>
            setPaginationFilters((prev) => ({
              ...prev,
              perPage: Number(e),
            }))
          }
        >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Selecione quantas empresas devem ser listadas" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Quantidade de empresas listadas</SelectLabel>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BusinessPagination;
