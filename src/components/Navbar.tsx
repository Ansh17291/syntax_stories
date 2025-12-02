"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import navBarmap from "@/utils/NavbarCompoenents";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-5 md:px-24 py-4 flex items-center justify-between mt-[4vh] md:mt-[5vh] relative">

      {/* Avatar Left */}
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center text-center gap-8">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navBarmap.map((nav, idx) => (
              <NavigationMenuItem key={idx}>
                <NavigationMenuLink asChild>
                  <Link
                    href={nav.route}
                    className="text-[18px] px-4 py-2 hover:text-red-400 hover:scale-110 transition-all"
                  >
                    {nav.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-3 cursor-pointer hover:text-red-400">
          <Search size={20} />
          <span className="text-md font-medium">SEARCH</span>
        </div>

        {/* Mobile: Search Icon */}
        <div className="md:hidden cursor-pointer hover:text-red-400">
          <Search size={26} />
        </div>

        {/* Mobile: Menu / Cross Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-gray-800 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Full-Screen Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-xl z-50 flex flex-col p-6">

          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="hover:text-red-400">
              <X size={32} />
            </button>
          </div>

          {/* Center menu items */}
          <ul className="flex flex-col items-center justify-center flex-grow gap-8 text-center">
            <li className="text-3xl font-semibold mb-6">MENU</li>
            {navBarmap.map((nav, idx) => (
              <li key={idx}>
                <Link
                  href={nav.route}
                  className="text-2xl hover:text-red-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
