"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building2,
  ChevronRight,
  CircleGauge,
  ClipboardCheck,
  Filter,
  HandCoins,
  Handshake,
  Search,
  SmilePlus,
  User,
  UserCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const FilterRequestsSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const availableCategories = [
    "solda",
    "eletrica",
    "capina",
    "limpeza",
  ] as const;
  const availableStatus = [
    "created",
    "incoming",
    "paused",
    "finished",
    "canceled",
  ] as const;

  const formSchema = z.object({
    category: z.enum(availableCategories).optional(),
    title: z.string().optional(),
    status: z.enum(availableStatus).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsOpen((prev) => !prev);
  }

  return (
    <Sheet onOpenChange={() => setIsOpen((prev) => !prev)} open={isOpen}>
      <SheetTrigger asChild>
        <Button
          title="Baixar relatorio mensal em xlsx (Microsoft Excel)."
          className="bg-blue-600 hover:bg-blue-700 duration-200 text-primary-foreground"
        >
          <div className="flex gap-2 items-center capitalize">
            <p>Filtros</p> <Filter />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Fitlrar tarefas</SheetTitle>
        </SheetHeader>

        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Titulo da solicitante" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableCategories.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      {...field}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableStatus.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              <div className="flex items-center justify-center gap-1">
                <p>Fazer busca</p> <Search size={16} />
              </div>
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default FilterRequestsSidebar;
