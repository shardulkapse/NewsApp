"use client";
import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();
  const isActiveHandler = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-5 max-w-6xl mx-auto border-b text-gray-300">
      {categories.map((category) => {
        return (
          <NavLink
            key={category}
            category={category}
            isActive={isActiveHandler(category)}
          />
        );
      })}
    </nav>
  );
}

export default NavLinks;
