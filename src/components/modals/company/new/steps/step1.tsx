import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Step1NewCompany = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full flex gap-4 flex-wrap">
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="title" className="text-left">
          Nome da empresa
        </Label>
        <Input id="title" placeholder="JC Dev Ltda." className="col-span-3" />
      </div>
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="mail" className="text-left">
          Email da empresa
        </Label>
        <Input
          id="mail"
          placeholder="jcdev@email.com"
          type="email"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="title" className="text-left">
          Senha de acesso
        </Label>
        <div className="flex gap-2 items-center ">
          <Input
            id="title"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            className="col-span-3"
          />
          <button
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
      </div>
      <div className="flex grow flex-col gap-2 basis-96">
        <Label htmlFor="confirmPassword" className="text-left">
          Confirme a senha de acesso
        </Label>
        <div className="flex gap-2 items-center">
          <Input
            id="confirmPassword"
            placeholder="********"
            className="col-span-3"
            type={showConfirmPassword ? "text" : "password"}
          />
          <button
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
