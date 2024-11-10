export type newCompanyCredentials = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  documentType: string;
  document: string;
  phone: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
  cep: string;
};

export type createCompanyErros = {
  errors?: {
    name?: string;
    email?: string;
    password?: string;
  };
  error?: string;
};

export interface ICompany {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  documentType: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CompanyFilter = string;
