"use client";

import { useState } from "react";
import Button from "../../components/Buttons/Button";
import { MagnifyingGlassIcon, PlusIcon } from "../../components/Icons";
import CategoryForm from "./Form/CategoryForm";

export default function TopBar() {
  const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);
  return (
    <>
      <section className="header bg-slate-50 shadow py-4 px-4">
        <div className="header-content flex items-center flex-row w-full gap-8">
          <div className="hidden md:flex relative w-80">
            <div className="inline-flex items-center justify-center absolute left-2 top-0 h-full text-gray-400">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>

            <input
              id="search"
              type="text"
              name="search"
              className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
              placeholder="Buscar..."
            />
          </div>

          <div className="flex md:hidden">
            <a
              href="#"
              className="flex items-center justify-center h-10 w-10 border-transparent"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </a>
          </div>

          <Button onClick={() => console.log("creo producto")}>
            <PlusIcon className="fill-current w-4 h-4 mr-2" />
            <span>Producto</span>
          </Button>
          <Button onClick={() => setIsCategoryFormOpen(true)}>
            <PlusIcon className="fill-current w-4 h-4 mr-2" />
            <span>Categoría</span>
          </Button>
        </div>
      </section>

      <CategoryForm
        isOpen={isCategoryFormOpen}
        onClose={() => setIsCategoryFormOpen(false)}
      />
    </>
  );
}
