import prisma from "@/app/app/lib/prisma";
import Image from "next/image";

async function getUser() {
  return await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
}

export default async function User() {
  const user = await getUser();
  if (!user) {
    // TODO: si no hay usuario mandar al login
  }

  return (
    <div className="flex items-center gap-4">
      <Image
        width={10}
        height={10}
        className="w-10 h-10 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt=""
      />
      <div className="flex flex-col dark:text-white">
        <span className="font-medium">{user?.name}</span>
        <span className="text-xs">{user?.role}</span>
        <span className="text-xs">{user?.email}</span>
      </div>
    </div>
  );
}
