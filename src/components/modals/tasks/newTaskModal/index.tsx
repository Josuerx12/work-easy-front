import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ban, BlocksIcon, Plus } from "lucide-react";

const NewTaskModal = ({ closeNavMobile }: { closeNavMobile?: () => void }) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <Button
          onClick={closeNavMobile}
          className="bg-secondary text-secondary-foreground flex items-center gap-2 duration-200 font-bold hover:bg-teal-400 hover:text-primary"
        >
          <Plus size={18} /> Nova tarefa
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Tarefa</DialogTitle>
          <DialogDescription>
            Preencha os dados para criar uma nova tarefa.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-left">
              Titulo da tarefa
            </Label>
            <Input
              id="title"
              placeholder="Reparo em janela"
              className="col-span-3"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-left">Categoria da tarefa</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a categoria da tarefa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipos de tarefa:</SelectLabel>
                  <SelectItem value="limpeza">Limpeza</SelectItem>
                  <SelectItem value="capina">Capina</SelectItem>
                  <SelectItem value="solda">Solda</SelectItem>
                  <SelectItem value="eletrica">Eletrica</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-left font-semibold">
              Descrição da tarefa
            </Label>
            <Textarea
              id="description"
              placeholder="Alguma descrição sobre a tarefa aqui..."
            />
          </div>
        </div>
        <DialogFooter className="flex gap-2">
          <Button className="flex gap-2 items-center" variant={"destructive"}>
            <Ban size={20} /> Cancelar
          </Button>
          <Button className="flex gap-2 items-center">
            <Plus size={20} /> Criar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewTaskModal;
