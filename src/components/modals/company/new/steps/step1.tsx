import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import {
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import {
  createCompanyErros,
  newCompanyCredentials,
} from "@/interfaces/company.inteface";

type Props = {
  register: UseFormRegister<newCompanyCredentials>;
  reset: UseFormReset<newCompanyCredentials>;
  setValue: UseFormSetValue<newCompanyCredentials>;
  errors: createCompanyErros | null;
};

const Step1NewCompany = ({ register, reset, setValue, errors }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full flex gap-4 flex-wrap">
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="name" className="text-left">
          Nome da empresa
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="JC Dev Ltda."
          className={`col-span-3 ${
            errors?.errors?.name ? "border-red-600 outline-red-600" : ""
          }`}
        />
        {errors?.errors?.name && (
          <p className="w-full text-red-600 bg-neutral-200 p-2 rounded-md text-center">
            <span className="font-bold">Error: </span>
            {errors.errors.name}
          </p>
        )}
      </div>
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="email" className="text-left">
          Email da empresa
        </Label>
        <Input
          id="email"
          {...register("email")}
          placeholder="jcdev@email.com"
          type="email"
          className={`col-span-3 ${
            errors?.errors?.email ? "border-red-600 outline-red-600" : ""
          }`}
        />
        {errors?.errors?.email && (
          <p className="w-full text-red-600 bg-neutral-200 p-2 rounded-md text-center">
            <span className="font-bold">Error: </span>
            {errors.errors.email}
          </p>
        )}
      </div>
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="password" className="text-left">
          Senha de acesso
        </Label>
        <div className="flex gap-2 items-center ">
          <Input
            {...register("password")}
            id="password"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            className={`col-span-3 ${
              errors?.errors?.name ? "border-red-600 outline-red-600" : ""
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={`rounded-full duration-200 w-[30px] h-[30px] p-2 flex items-center justify-center ${
              showPassword
                ? "bg-primary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
        {errors?.errors?.password && (
          <p className="w-full text-red-600 bg-neutral-200 p-2 rounded-md text-center">
            <span className="font-bold">Error: </span>
            {errors.errors.password}
          </p>
        )}
      </div>
      <div className="flex grow flex-col gap-2 basis-96">
        <Label htmlFor="confirmPassword" className="text-left">
          Confirme a senha de acesso
        </Label>
        <div className="flex gap-2 items-center">
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            placeholder="********"
            className="col-span-3"
            type={showConfirmPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className={`rounded-full duration-200 w-[30px] h-[30px] p-2 flex items-center justify-center ${
              showConfirmPassword
                ? "bg-primary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {showConfirmPassword ? <Eye size={15} /> : <EyeOff size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1NewCompany;
