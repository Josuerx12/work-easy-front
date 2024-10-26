import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const Step3NewCompany = () => {
  return (
    <div className="w-full flex gap-4 flex-wrap">
      <div className="flex flex-col grow gap-2 basis-32">
        <Label htmlFor="cep" className="text-left">
          CEP
        </Label>
        <div className="flex gap-1 items-center">
          <Input
            id="cep"
            placeholder="00000-000"
            type="text"
            className="col-span-3"
          />
          <button
            title="Buscar seu endereço pelo cep informado!"
            className={`rounded-full duration-200 w-[30px] h-[30px] p-2 flex items-center justify-center bg-primary text-primary-foreground`}
          >
            <Search />
          </button>
        </div>
      </div>
      <div className="flex flex-col grow gap-2 basis-50">
        <Label htmlFor="street" className="text-left">
          Nome da rua
        </Label>
        <Input
          id="street"
          placeholder="Rua projetada x"
          type="tel"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col grow gap-2 basis-50">
        <Label htmlFor="neighborhood" className="text-left">
          Bairro
        </Label>
        <Input
          id="neighborhood"
          placeholder="João 23"
          type="tel"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col grow gap-2 basis-24">
        <Label htmlFor="number" className="text-left">
          Numero
        </Label>
        <Input id="number" placeholder="12" type="tel" className="col-span-3" />
      </div>
      <div className="flex flex-col grow gap-2">
        <Label htmlFor="state" className="text-left">
          Estado
        </Label>
        <Input
          id="state"
          placeholder="Rua projetada x"
          type="tel"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col grow gap-2 basis-40">
        <Label htmlFor="city" className="text-left">
          Cidade
        </Label>
        <Input
          id="city"
          placeholder="Rua projetada x"
          type="tel"
          className="col-span-3"
        />
      </div>
    </div>
  );
};

export default Step3NewCompany;
