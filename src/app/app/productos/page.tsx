import prisma from "../lib/prisma";
import Products from "./components/Products";
import TopBar from "./components/TopBar";

async function getProducts() {
  return await prisma.product.findMany({
    where: {
      restaurantId: 1,
    },
  });
}

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="main-content flex flex-col flex-grow p-4 mt-8">
      <h1 className="font-bold text-2xl text-gray-700 p-4">Productos</h1>
      <TopBar />
      <div className="flex flex-col flex-grow  bg-white rounded mt-4 min-h-full p-4">
        <Products products={products} />
      </div>
    </div>
  );
}
