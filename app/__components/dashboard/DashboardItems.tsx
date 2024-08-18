"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/app/dashboard/layout";

export default function DashboardItems() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        // href bir dizi mi kontrol edin
        const isActive = Array.isArray(link.href)
          ? link.href.includes(pathname) // pathname dizide var mı kontrol edin
          : pathname === link.href; // değilse, pathname'e eşit mi kontrol edin

        return (
          <Link
            href={Array.isArray(link.href) ? link.href[0] : link.href} // İlk diziyi veya tekil href'i kullan
            key={link.name}
            className={cn(
              isActive
                ? "bg-muted text-primary"
                : "bg-none text-muted-foreground",
              "flex items-center gap-3 rounded-full px-3 py-2 transition-all hover:text-primary/70",
            )}
          >
            <link.icon className="size-4" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
