export default async function Productos() {
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
      </div>
    </main>
  );
}
