import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table/data-table";
import { taskSchema } from "./data/schema";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/productos/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Productos() {
  const tasks = await getTasks();

  return (
    <main className="flex min-h-screen flex-col items-start justify-between">
      <div className="flex flex-col space-y-8 w-full">
        <div className="flex items-start justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Productos</h2>
            <p className="text-muted-foreground">
              Te mostramos un listado de todos tus productos
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </main>
  );
}
