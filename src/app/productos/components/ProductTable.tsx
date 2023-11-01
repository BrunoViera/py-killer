import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { Product, productSchema } from "@/types/Tenant/Product";
import { columnsProd } from "./columnsProd";
import { DataTable } from "./data-table/data-table";

async function getProducts(): Promise<Product[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/productos/data/products.json")
  );
  const products = JSON.parse(data.toString());
  return z.array(productSchema).parse(products);
}

export default async function ProductTable() {
  const products = await getProducts();

  return <DataTable<Product, Product> data={products} columns={columnsProd} />;
}
