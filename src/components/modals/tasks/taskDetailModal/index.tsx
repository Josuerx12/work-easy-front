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
import { Ban, BlocksIcon, Pen, Plus, Trash } from "lucide-react";

type Props = {
  task: { title: string; time: string; category: string; description: string };
};

const TaskDetailModal = ({ task }: Props) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <div
          title="Ver dados da tarefa"
          className="flex justify-between gap-1 cursor-pointer hover:bg-neutral-300 p-1 rounded-md duration-200"
        >
          <p className="line-clamp-1 text-start">{task.title}</p>
          <p className="font-semibold text-red-600">{task.time}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl lg:max-w-4xl md:w-full">
        <DialogHeader>
          <DialogTitle>Detalhes da tarefa</DialogTitle>
          <DialogDescription>
            Veja os dados da tarefa abaixo, caso deseje editar clique no lapis
            abaixo.
            <div className="flex gap-2 justify-end mt-4">
              <Button
                size={"sm"}
                className="bg-blue-600 border-none hover:bg-blue-700 "
              >
                <div className="flex gap-1 items-center">
                  <Pen size={"16"} />
                  <p>Editar</p>
                </div>
              </Button>
              <Button size={"sm"} variant={"destructive"}>
                <div className="flex gap-1 items-center">
                  <Trash size={"16"} />
                  <p>Deletar</p>
                </div>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-left">
              Titulo da tarefa
            </Label>
            <Input
              id="title"
              className="col-span-3"
              disabled
              defaultValue={task.title}
            />
          </div>

          <div>
            <Label htmlFor="time" className="text-left">
              Horario de agendamento
            </Label>
            <Input
              id="time"
              className="col-span-3"
              disabled
              defaultValue={task.time}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-left">Categoria da tarefa</Label>
            <Select disabled defaultValue={task.category}>
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
              rows={6}
              disabled
              defaultValue={task.description}
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

export default TaskDetailModal;
