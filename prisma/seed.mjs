import Prisma, { UserRole } from "@prisma/client";

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      role: UserRole.ADMIN,
      createdAt: new Date(),
      restaurants: {},
    },
  });

  const address = await prisma.address.upsert({
    where: { id: 1 },
    update: {},
    create: {
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true,
      name: "Ad",
      address: "",
      phone: "",
      country: "",
    },
  });

  const restaurantA = await prisma.restaurant.upsert({
    where: { name: "La nona" },
    update: {},
    create: {
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true,
      name: "La nona",
      description: "La nona restaurante",
      bromatology: "todo okay",
      razonSocial: "lalala",
      hasDelivery: false,
      hasPickUp: false,
      mapCoordinates: "",
      shippingCost: 0,
      userId: admin.id,
      addressId: address.id,
      // Category: [],
      // Product: [],
      // PaymentMethod: [],
      // BankAccount: [],
      // WorkSchedules: [],
    },
  });

  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Nexus on Twitter',
  //           content: 'https://twitter.com/nexusgql',
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // })
  console.log({ admin, restaurantA });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
