"use client";
import { Search, Menu, ShoppingCart, Heart, UserCheck } from "lucide-react";
import { useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const NavLinks = () => (
  <ul className="flex flex-col sm:flex-row gap-10">
    {["Home", "Shop", "About", "Contact"].map((link) => (
      <li
        key={link}
        className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300"
      >
        <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>{link}</Link>
      </li>
    ))}
  </ul>
);

const NavBar = () => {
  const sheetTrigger = useRef<HTMLButtonElement>(null);
  const handleMenuClick = () => {
    if (sheetTrigger.current) {
      sheetTrigger.current.click();
    }
  };

  return (
    <header className="w-full mx-auto bg-white sticky top-0 font-Poppins border-b-[1px] border-black z-20 shadow-xl">
      {/* Desktop & Tablet Header */}
      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between p-3">
        {/* Navigation */}
        <nav className="flex-1 hidden sm:flex justify-center">
          <NavLinks />
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-8">
          <Link href="/account">
            <UserCheck />
          </Link>
          <Search />
          <Heart />
          <Link href="/cart">
            <ShoppingCart />
          </Link>
          {/* Mobile Menu Icon */}
          <Menu className="sm:hidden cursor-pointer" onClick={handleMenuClick} />
        </div>
      </div>

      {/* Mobile Header */}
      <Sheet>
        <SheetTrigger ref={sheetTrigger} className="hidden" />
        <SheetContent className="bg-white w-[15rem]" side="left">
          <SheetHeader>
            <SheetTitle className="font-bold text-lg">Menu</SheetTitle>
            <SheetDescription>
              <NavLinks />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavBar;
