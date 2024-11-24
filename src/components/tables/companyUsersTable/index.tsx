"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CompanyFilter, ICompany } from "@/interfaces/company.inteface";
import {
  PaginatedResult,
  PaginationInputProps,
} from "@/interfaces/pagination.interface";
import { CompanyService } from "@/services/companyService";
import { Info, LoaderCircle, Trash } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import DeleteCompanyModal from "@/components/modals/company/delete";
import DetailCompanyModal from "@/components/modals/company/details";
import { CompanyUsersService } from "@/services/companyUsersService";
import { CompanyUserFilter } from "@/interfaces/companyUsers.interface";

const CompanyUsersTable = () => {
  const query = useSearchParams();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const filterQuery = query.get("filter") ? String(query.get("filter")) : "";

  const [paginationFilters, setPaginationFilters] = useState<
    PaginationInputProps<CompanyUserFilter>
  >({ page: pageQuery, perPage: perPageQuery, filter: filterQuery });

  useEffect(() => {
    setPaginationFilters((prev) => ({
      page: pageQuery,
      perPage: perPageQuery,
      filter: filterQuery,
    }));
  }, [pageQuery, perPageQuery, filterQuery]);

  const { data, isLoading } = useQuery(
    ["companyUsers", paginationFilters],
    ({ queryKey }) => {
      const [, params] = queryKey;
      console.log(params);
      return CompanyUsersService.getAll(
        params as PaginationInputProps<CompanyUserFilter>
      );
    }
  );

  return (
    <>
      {isLoading ? (
        <div className="text-3xl flex gap-4 justify-center items-center w-full">
          <p>Carregando</p>
          <LoaderCircle size={30} className="animate-spin" />
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Avatar</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.items?.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>
                    <Image
                      width={40}
                      height={40}
                      className="min-w-10 min-h-10"
                      alt={`Logo ${data.user?.name}`}
                      src={`https://github.com/shadcn.png`}
                    />
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-1">{data.user?.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-1">{data.user?.email}</span>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2 w-full justify-end">
                      <DetailCompanyModal
                        ButtonT={
                          <span className="line-clamp-1">
                            <div
                              title={`Ver detalhes da empresa ${data.user?.name}`}
                              className="flex items-center cursor-pointer justify-between w-fit rounded-md hover:bg-blue-600 duration-200 p-2 hover:text-white"
                            >
                              <Info size={16} />
                            </div>
                          </span>
                        }
                        company={data as any}
                        key={data.id}
                      />
                      <DeleteCompanyModal
                        key={data.id}
                        ButtonT={
                          <div
                            title={`Deletar empresa ${data.user?.name}`}
                            className="flex items-center cursor-pointer justify-between w-fit rounded-md hover:bg-red-600 duration-200 p-2 hover:text-white"
                          >
                            <Trash size={16} />
                          </div>
                        }
                        company={data as any}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default CompanyUsersTable;
