/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  CompanyFilter,
  newCompanyCredentials,
} from "@/interfaces/company.inteface";
import { setupHttp } from "./setupHttp";
import { PaginationInputProps } from "@/interfaces/pagination.interface";

export class CompanyService {
  static async create(credentials: newCompanyCredentials) {
    try {
      const res = await setupHttp.post("/company", credentials);

      return res.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  }

  static async get(idOrEmailOrDocument: string) {
    const res = await setupHttp.get("/company/" + idOrEmailOrDocument);

    return res.data;
  }

  static async getAll(props?: PaginationInputProps<CompanyFilter>) {
    const params = new URLSearchParams();

    props?.page && params.append("page", props.page.toString());
    props?.perPage && params.append("perPage", props.perPage.toString());
    props?.filter && params.append("filter", props.filter);

    const res = await setupHttp.get("/company", {
      params,
    });

    return res.data;
  }
}
