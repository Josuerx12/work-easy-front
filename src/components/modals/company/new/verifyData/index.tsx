"use client";
import React, { useState } from "react";
import { UseFormGetValues } from "react-hook-form";
import { ChevronRight, Info, Pen, PenBox } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createCompanyErros,
  newCompanyCredentials,
} from "@/interfaces/company.inteface";

type Props = {
  handleStep: React.Dispatch<React.SetStateAction<number>>;
  getValues: UseFormGetValues<newCompanyCredentials>;
  errors: createCompanyErros | null;
};

const VerifyCompanyData = ({ getValues, handleStep, errors }: Props) => {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isDocumentCredentialsOpen, setIsDocumentCredentialsOpen] =
    useState(false);
  const [isAddressCredentialsOpen, setIsAddressCredentialsOpen] =
    useState(false);
  return (
    <div>
      <h5 className="text-center font-semibold pb-6">
        Verifique as credenciais e confirme para criar uma nova empresa!
      </h5>

      <div className="w-full flex flex-col gap-2 relative">
        <button
          onClick={() => setIsBasicOpen((prev) => !prev)}
          type="button"
          className="flex w-full justify-between items-center px-4 py-2 bg-gray-100 rounded-md transition-colors duration-300 hover:bg-gray-200"
        >
          <span>Credenciais básicas</span>
          <div className="flex">
            {(errors?.errors?.email ||
              errors?.errors?.name ||
              errors?.errors?.password) && (
              <div title="Verifique as credenciais basicas, para continuar!">
                <Info color="red" />
              </div>
            )}

            <ChevronRight
              className={`transform transition-transform duration-200 ${
                isBasicOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isBasicOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative p-4 bg-gray-50 rounded-b-md shadow-md">
            <div className="absolute right-0 top-0 p-2">
              <Button
                onClick={() => handleStep(1)}
                type="button"
                className="flex bg-blue-600 hover:bg-blue-700 gap-2 items-center justify-center"
              >
                <span>Editar</span>
                <PenBox size={14} />
              </Button>
            </div>
            <p>
              <span
                title={
                  errors?.errors?.name &&
                  "Nome informado não é valido, verifique e tente novamente!"
                }
                className={`text-red-600 font-bold ${
                  errors?.errors?.name ? "cursor-help" : ""
                }`}
              >
                Nome da empresa:
              </span>
              <span className="font-semibold ml-2">{getValues("name")}</span>
            </p>

            <p>
              <span
                title={
                  errors?.errors?.email &&
                  "Nome informado não é valido, verifique e tente novamente!"
                }
                className={`text-red-600 font-bold ${
                  errors?.errors?.email ? "cursor-help" : ""
                }`}
              >
                Email da empresa:
              </span>
              <span className="font-semibold ml-2">{getValues("email")}</span>
            </p>

            {errors?.errors?.password && (
              <p className="w-full text-red-600 bg-neutral-200 p-2 rounded-md text-center">
                {errors.errors.password}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsDocumentCredentialsOpen((prev) => !prev)}
          type="button"
          className="flex w-full justify-between items-center px-4 py-2 bg-gray-100 rounded-md transition-colors duration-300 hover:bg-gray-200"
        >
          <span>Dados importantes</span>
          <ChevronRight
            className={`transform transition-transform duration-200 ${
              isDocumentCredentialsOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isDocumentCredentialsOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative p-4 bg-gray-50 rounded-b-md shadow-md">
            <div className="absolute right-0 top-0 p-2">
              <Button
                onClick={() => handleStep(2)}
                type="button"
                className="flex bg-blue-600 hover:bg-blue-700 gap-2 items-center justify-center"
              >
                <span>Editar</span>
                <PenBox size={14} />
              </Button>
            </div>
            <p>
              Tipo de documento:
              <span className="font-semibold ml-2">
                {getValues("documentType")}
              </span>
            </p>

            <p>
              Documento:
              <span className="font-semibold ml-2">
                {getValues("document")}
              </span>
            </p>

            <p>
              Telefone:
              <span className="font-semibold ml-2">{getValues("phone")}</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsAddressCredentialsOpen((prev) => !prev)}
          type="button"
          className="flex w-full justify-between items-center px-4 py-2 bg-gray-100 rounded-md transition-colors duration-300 hover:bg-gray-200"
        >
          <span>Endereço</span>
          <ChevronRight
            className={`transform transition-transform duration-200 ${
              isAddressCredentialsOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isAddressCredentialsOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative p-4 bg-gray-50 rounded-b-md shadow-md">
            <div className="absolute right-0 top-0 p-2">
              <Button
                onClick={() => handleStep(3)}
                type="button"
                className="flex bg-blue-600 hover:bg-blue-700 gap-2 items-center justify-center"
              >
                <span>Editar</span>
                <PenBox size={14} />
              </Button>
            </div>
            <p>
              Cep:
              <span className="font-semibold ml-2">{getValues("cep")}</span>
            </p>

            <p>
              Rua:
              <span className="font-semibold ml-2">{getValues("street")}</span>
            </p>

            <p>
              Bairro:
              <span className="font-semibold ml-2">
                {getValues("neighborhood")}
              </span>
            </p>
            <p>
              Cidade:
              <span className="font-semibold ml-2">{getValues("city")}</span>
            </p>
            <p>
              Estado:
              <span className="font-semibold ml-2">{getValues("state")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCompanyData;
