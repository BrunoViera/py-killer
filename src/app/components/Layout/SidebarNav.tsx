"use client";

import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarNavProps {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <aside className="-mx-4 w-auto max-w-xs">
      <nav className="flex space-x-2 w-full">
        <div className="pb-12">
          <div className="space-y-4 pl-4">
            {items.map((i, index) => (
              <Link
                key={i.href}
                href={i.href}
                className={cn(
                  "w-full text-left !justify-start",
                  buttonVariants({
                    variant: index === 0 ? "secondary" : "ghost",
                  })
                )}
              >
                {i.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
