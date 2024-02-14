"use client";

import Button from "@/app/app/components/Buttons/Button";
import { InputWrapper, Toggle } from "@/app/app/components/Form";
import Modal from "@/app/app/components/Modal";
import { Panel } from "@/app/app/components/Panel/Panel";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Category,
  CategorySchema,
} from "../../../../../../prisma/generated/zod";

export default function CategoryForm({
  category,
  isOpen,
  onClose,
}: {
  category: Category;
  isOpen: boolean;
  onClose: () => void;
}) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>({
    resolver: zodResolver(CategorySchema),
    defaultValues: category,
  });

  const onSubmit: SubmitHandler<Category> = (data) => {
    const category = fetch("/api/category", {
      body: JSON.stringify(data),
      method: "POST",
    });
  };

  console.log(errors);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Panel>
          <Panel.Header>
            {category.id > 0 ? "Modificar" : "Crear"} categoría
          </Panel.Header>
          <Panel.Body>
            <InputWrapper label="Nombre" name="name" error={errors.name}>
              <input {...register("name")} placeholder="Nombre" />
            </InputWrapper>
            <InputWrapper label="Descripción" name="description">
              <input {...register("description")} placeholder="Descripción" />
            </InputWrapper>
            <Controller
              name="published"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Toggle label="Pública" value={!!value} onChange={onChange} />
              )}
            />
          </Panel.Body>

          <Panel.Footer>
            <div className="flex flex-row gap-4 justify-center">
              <Button
                type="submit"
                style={Button.Success}
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Crear
              </Button>
              <Button type="button" style={Button.Warning} onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </Panel.Footer>
        </Panel>
      </form>
    </Modal>
  );
}
