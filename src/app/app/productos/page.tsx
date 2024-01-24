import Products from "./components/Products";
import TopBar from "./components/TopBar";

// const defaultData: Product[] = [
//   {
//     uuid: crypto.randomUUID(),
//     name: "Pizza porción",
//     price: 150,
//     description: "Un triangulo de pizza",
//   },
//   {
//     uuid: crypto.randomUUID(),
//     name: "Pizza chica",
//     price: 250,
//     description: "Pizza de 20cm",
//   },
//   {
//     uuid: crypto.randomUUID(),
//     name: "Pizza mediana",
//     price: 350,
//     description: "Pizza de 40cm",
//   },
//   {
//     uuid: crypto.randomUUID(),
//     name: "Pizza grande",
//     price: 450,
//     description: "Pizza de 60cm",
//   },
//   {
//     uuid: crypto.randomUUID(),
//     name: "Pizza familiar",
//     price: 550,
//     description: "Pizza de 80cm",
//   },
// ];

// const columnHelper = createColumnHelper<Product>();
// const columns = [
//   columnHelper.accessor("name", {
//     header: "Nombre",
//     cell: (info) => info.getValue(),
//     footer: (props) => props.column.id,
//   }),
//   columnHelper.accessor("price", {
//     header: "Precio",
//     cell: (info) => "$ " + info.getValue(),
//     footer: (props) => props.column.id,
//   }),
//   columnHelper.accessor("description", {
//     header: "Descripción",
//     cell: (info) => info.getValue(),
//     footer: (props) => props.column.id,
//   }),

// columnHelper.accessor((row) => row.lastName, {
//   id: "lastName",
//   cell: (info) => <i>{info.getValue()}</i>,
//   header: () => <span>Last Name</span>,
//   footer: (info) => info.column.id,
// }),
// columnHelper.accessor("age", {
//   header: () => "Age",
//   cell: (info) => info.renderValue(),
//   footer: (info) => info.column.id,
// }),
// columnHelper.accessor("visits", {
//   header: () => <span>Visits</span>,
//   footer: (info) => info.column.id,
// }),
// columnHelper.accessor("status", {
//   header: "Status",
//   footer: (info) => info.column.id,
// }),
// columnHelper.accessor("progress", {
//   header: "Profile Progress",
//   footer: (info) => info.column.id,
// }),
// ];

export default function Productos() {
  // const [data, setData] = useState(() => [...defaultData]);

  // const table = useReactTable({
  //   data,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  // });

  return (
    <div className="main-content flex flex-col flex-grow p-4 mt-8">
      <h1 className="font-bold text-2xl text-gray-700 p-4">Productos</h1>
      <TopBar />
      <div className="flex flex-col flex-grow  bg-white rounded mt-4 h-screen p-4">
        <Products />
        {/* <table className="w-full min-w-max table-auto text-left">
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
          </tbody> */}
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
        {/* </table> */}
      </div>
    </div>
  );
}
