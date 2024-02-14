import prisma from "@/app/app/lib/prisma";

export async function GET(request: Request) {
  // console.log(request);

  // const queryString = request.url.searchParams.get('search-key')
  const categories = await prisma.category.findMany({
    where: {
      restaurantId: 1,
    },
  });

  return Response.json({ categories });
}

export async function POST(request: Request) {
  const requestCategory = await request.json();
  const category = await prisma.category.create({
    data: {
      name: requestCategory.name,
      description: requestCategory.description,
      published: requestCategory.published,
      restaurantId: 1,
    },
  });
  return Response.json({ category });
}
