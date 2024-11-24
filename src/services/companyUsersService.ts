/* eslint-disable @typescript-eslint/no-unused-expressions */
import { setupHttp } from "./setupHttp";
import {
  PaginatedResult,
  PaginationInputProps,
} from "@/interfaces/pagination.interface";
import {
  CompanyUserCreateCredentials,
  CompanyUserFilter,
  ICompanyUser,
} from "@/interfaces/companyUsers.interface";

export class CompanyUsersService {
  static async create(credentials: CompanyUserCreateCredentials) {
    try {
      const res = await setupHttp.post("/companyUser", credentials);

      return res.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  }

  static async get(id: string): Promise<ICompanyUser> {
    const res = await setupHttp.get("/companyUser/" + id);

    return res.data;
  }

  static async getAll(
    props?: PaginationInputProps<CompanyUserFilter>
  ): Promise<PaginatedResult<ICompanyUser>> {
    const params = new URLSearchParams();

    props?.page && params.append("page", props.page.toString());
    props?.perPage && params.append("perPage", props.perPage.toString());
    props?.filter && params.append("filter", props.filter);

    const res = await setupHttp.get("/companyUser", {
      params,
    });

    return res.data;
  }
}
