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

    console.log(props?.filter);

    props?.page && params.append("page", props.page.toString());
    props?.perPage && params.append("perPage", props.perPage.toString());
    props?.filter?.searchBy &&
      params.append("filter[search]", props.filter.searchBy);
    props?.filter?.city && params.append("filter[city]", props.filter.city);
    props?.filter?.uf && params.append("filter[uf]", props.filter.uf);

    const res = await setupHttp.get("/company", {
      params,
    });

    return res.data;
  }
}
