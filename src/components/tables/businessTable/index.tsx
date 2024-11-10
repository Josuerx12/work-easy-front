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
import { LoaderCircle, ReceiptText, Trash } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const BusinessTable = () => {
  const query = useSearchParams();

  const pageQuery = query.get("page") ? Number(query.get("page")) : 1;
  const perPageQuery = query.get("perPage") ? Number(query.get("perPage")) : 10;
  const filterQuery = query.get("filter") ? String(query.get("filter")) : "";

  const [paginationFilters, setPaginationFilters] = useState<
    PaginationInputProps<CompanyFilter>
  >({ page: pageQuery, perPage: perPageQuery, filter: filterQuery });

  useEffect(() => {
    setPaginationFilters((prev) => ({
      page: pageQuery,
      perPage: perPageQuery,
      filter: filterQuery,
    }));
  }, [pageQuery, perPageQuery, filterQuery]);

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
                <TableHead>Name</TableHead>
                <TableHead>email</TableHead>
                <TableHead>phone</TableHead>
                <TableHead>document</TableHead>
                <TableHead className="text-right"></TableHead>
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
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Gerenciar</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <div
                              title={`Ver detalhes da empresa ${business.name}`}
                              className="flex items-center cursor-pointer justify-between w-full rounded-md hover:bg-blue-600 duration-200 p-2 hover:text-white"
                            >
                              <span className="font-bold">Detalhes</span>
                              <ReceiptText />
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <div
                              title={`Deletar empresa ${business.name}`}
                              className="flex items-center  cursor-pointer justify-between w-full rounded-md hover:bg-red-600 duration-200 p-2 hover:text-white"
                            >
                              <span className="font-bold">Deletar</span>
                              <Trash />
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
