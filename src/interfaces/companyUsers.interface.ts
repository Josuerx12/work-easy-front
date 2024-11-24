import { ICompany } from "./company.inteface";
import { IUser } from "./user.interface";

export type CompanyUserCreateCredentials = {
  companyId: string;
  user: {
    name: string;
    email: string;
    password: string;
  };
  lat: string;
  long: string;
};

export interface ICompanyUser {
  id: string;
  companyId: string;
  userId: string;
  lat: string;
  long: string;
  user?: IUser;
  company?: ICompany;
  tasks?: any[];
  companyUserRoles?: any[];
}

export type CompanyUserFilter = string;
