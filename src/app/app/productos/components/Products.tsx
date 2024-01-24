"use client";

import { Product } from "@/types/Tenant/Product";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData: Product[] = [
  {
    uuid: crypto.randomUUID(),
    name: "Pizza porción",
    price: 150,
    description: "Un triangulo de pizza",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Pizza chica",
    price: 250,
    description: "Pizza de 20cm",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Pizza mediana",
    price: 350,
    description: "Pizza de 40cm",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Pizza grande",
    price: 450,
    description: "Pizza de 60cm",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Pizza familiar",
    price: 550,
    description: "Pizza de 80cm",
  },
];

export default function Products() {
  const columnHelper = createColumnHelper<Product>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Nombre",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("price", {
      header: "Precio",
      cell: (info) => "$ " + info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("description", {
      header: "Descripción",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
  ];

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full min-w-max table-auto text-left">
      <thead className="bg-blue-200 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <span className="font-normal leading-none opacity-70">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="font-sans text-slate-500 text-center">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
    </table>
  );
}
