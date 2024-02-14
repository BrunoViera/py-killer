"use client";

import Button from "@/app/app/components/Buttons/Button";
import { InputWrapper, Toggle } from "@/app/app/components/Form";
import Modal from "@/app/app/components/Modal";
import { Panel } from "@/app/app/components/Panel";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Category,
  ProductSchema,
} from "../../../../../../prisma/generated/zod";

const getCategories = async () => {
  try {
    const response = await fetch("/api/category", { method: "GET" });
    return response.json();
  } catch (error) {
    console.log("fallo la obtención de categorías");

    return [];
  }
};

export default function ProductForm({
  product,
  isOpen,
  onClose,
}: {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [categories, setCategories] = useState<Category[]>();
  useEffect(() => {
    if (!isOpen) return;
    getCategories().then((categories) => {
      setCategories(categories);
      console.log("new categories", categories);
    });
  }, [isOpen]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(ProductSchema),
    defaultValues: product,
  });

  const onSubmit: SubmitHandler<Product> = (data) => {
    // const category = fetch("/api/category", {
    //   body: JSON.stringify(data),
    //   method: "POST",
    // });
    console.log("el nuevo producto es >>>", data);
  };

  console.log(errors);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Panel>
          <Panel.Header>
            {product.id > 0 ? "Modificar" : "Crear"} producto
          </Panel.Header>
          <Panel.Body>
            <InputWrapper label="Nombre" name="name" error={errors.name}>
              <input {...register("name")} placeholder="Nombre" />
            </InputWrapper>
            <InputWrapper
              label="Descripción"
              name="description"
              error={errors.description}
            >
              <input {...register("description")} placeholder="Descripción" />
            </InputWrapper>
            <InputWrapper label="Precio" name="precio" error={errors.price}>
              <input
                {...register("price", { valueAsNumber: true })}
                placeholder="100"
              />
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
