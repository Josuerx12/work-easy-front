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
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import DeleteCompanyModal from "@/components/modals/company/delete";
import DetailCompanyModal from "@/components/modals/company/details";

const BusinessTable = () => {
  const query = useSearchParams();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const searchQuery = query.get("filter[search]")
    ? String(query.get("filter[search]"))
    : "";
  const ufQuery = query.get("filter[uf]")
    ? String(query.get("filter[uf]"))
    : "";
  const cityQuery = query.get("filter[city]")
    ? String(query.get("filter[city]"))
    : "";

  const filter = useMemo(
    () => ({
      city: cityQuery,
      searchBy: searchQuery,
      uf: ufQuery,
    }),
    [searchQuery, cityQuery, ufQuery]
  );

  const [paginationFilters, setPaginationFilters] = useState<
    PaginationInputProps<CompanyFilter>
  >({
    page: pageQuery,
    perPage: perPageQuery,
    filter,
  });

  useEffect(() => {
    setPaginationFilters((prev) => ({
      page: pageQuery,
      perPage: perPageQuery,
      filter,
    }));
  }, [pageQuery, perPageQuery, filter]);

  const { data, isLoading } = useQuery<PaginatedResult<ICompany>>(
    ["companies", paginationFilters],
    ({ queryKey }) => {
      const [, params] = queryKey;
      console.log(params);
      return CompanyService.getAll(
        params as PaginationInputProps<CompanyFilter>
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
                <TableHead>Logo</TableHead>
                <TableHead>Nome Empresa</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Documento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.items?.map((business) => (
                <TableRow key={business.id}>
                  <TableCell>
                    <Image
                      width={40}
                      height={40}
                      className="min-w-10 min-h-10"
                      alt={`Logo ${business.name}`}
                      src={`https://github.com/shadcn.png`}
                    />
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-1">{business.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-1">{business.email}</span>
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-1">{business.phone}</span>
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-1">{business.document}</span>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2 w-full justify-end">
                      <DetailCompanyModal
                        ButtonT={
                          <span className="line-clamp-1">
                            <div
                              title={`Ver detalhes da empresa ${business.name}`}
                              className="flex items-center cursor-pointer justify-between w-fit rounded-md hover:bg-blue-600 duration-200 p-2 hover:text-white"
                            >
                              <Info size={16} />
                            </div>
                          </span>
                        }
                        company={business as any}
                      />
                      <DeleteCompanyModal
                        ButtonT={
                          <div
                            title={`Deletar empresa ${business.name}`}
                            className="flex items-center cursor-pointer justify-between w-fit rounded-md hover:bg-red-600 duration-200 p-2 hover:text-white"
                          >
                            <Trash size={16} />
                          </div>
                        }
                        company={business}
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

export default BusinessTable;
