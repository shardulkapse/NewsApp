import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="w-8 h-8 cursor-pointer text-orange-400" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center text-gray-300 outline-none">
            The{" "}
            <span className="underline underline-offset-4 decoration-6 decoration-orange-400">
              Newz
            </span>{" "}
            App
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark mode button */}
          <button className="hidden md:inline bg-slate-800 text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full hover:text-orange-400 transition-all duration-300 ease-in-out hover:shadow-lg">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* navlinks */}
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
