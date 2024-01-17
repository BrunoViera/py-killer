"use client";

import Link from "next/link";

interface SidebarNavProps {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  // const pathname = usePathname();

  return (
    <aside className="-mx-4 w-auto max-w-xs">
      <nav className="flex space-x-2 w-full">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="w-full text-left !justify-start"
          >
            {i.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
