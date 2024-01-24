"use client";

import Button from "../../components/Buttons/Button";
import { MagnifyingGlassIcon, PlusIcon } from "../../components/Icons";

export default function TopBar() {
  return (
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

        <Button
          className="bg-green-500 hover:bg-green-400 text-green-950"
          onClick={() => console.log("creo producto")}
        >
          <PlusIcon className="fill-current w-4 h-4 mr-2" />
          <span>Producto</span>
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-400 text-green-950"
          onClick={() => console.log("creo producto")}
        >
          <PlusIcon className="fill-current w-4 h-4 mr-2" />
          <span>Categoría</span>
        </Button>
      </div>
    </section>
  );
}
