import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step2NewCompany = () => {
  return (
    <div className="w-full flex gap-4 flex-wrap">
      <div className="flex flex-col grow gap-2 basis-30">
        <Label className="text-left">Categoria da tarefa</Label>
        <Select defaultValue="cpf">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o tipo de documento" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tipos de tarefa:</SelectLabel>
              <SelectItem value="cpf">CPF</SelectItem>
              <SelectItem value="cnpj">CNPJ</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col grow gap-2 basis-96">
        <Label htmlFor="document" className="text-left">
          Nº Documento
        </Label>
        <Input
          id="document"
          placeholder="000.000.000-00 ou 00.000.000/0000-00"
          type="text"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col grow gap-2 basis-40">
        <Label htmlFor="document" className="text-left">
          Telefone para contato
        </Label>
        <Input
          id="document"
          placeholder="(22) 99797-9633"
          type="tel"
          className="col-span-3"
        />
      </div>
    </div>
  );
};

export default Step2NewCompany;
