"use client";

import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "About", path: "/" },
    { name: "", path: "/" },
    { name: "Faq", path: "/" },
    { name: "Packages", path: "/" },
  ];

  return (
    <nav className=" p-4 rounded-3xl text-space-cadet bg-white fixed top-4 right-5 left-5 md:whitespace-nowrap md:right-8 md:left-8 lg:right-40 lg:left-40  z-50">
      <div className="text-sm container flex justify-between items-center font-medium mx-auto ">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold flex items-center text-space-cadet "
          >
            {" "}
            Allhighstake
            {/* <Image src="/LOGO-0.png" alt="Logo" width={150} height={20} /> */}
          </Link>

          {/* Desktop Navigation Items */}
          <ul className="hidden md:flex text-black z-50 text-base space-x-6 md:space-x-9 lg:space-x-10">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="block cursor-pointer hover:underline decoration-red-600 decoration-2 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center">
            <Link href="/signup">
              <button className="flex w-36 h-12 md:ml-4 items-center justify-center font-semibold shadow-inner shadow-red-600 active:bg-red-600 transition-colors text-base border-2 active:transform active:scale-95 text-black bg-red-600  border-red-600 py-2 px-4 duration-200 rounded-2xl  hover:text-white ">
                <span>Signup</span>
              </button>
            </Link>
            <Link href="/login">
              <button className="flex w-36 h-12 md:ml-4 items-center justify-center font-semibold shadow-inner hover:bg-red-600 transition-colors text-base border-2 active:transform active:scale-95 text-black  border-red-600 py-2 px-4 duration-200 rounded-2xl  hover:text-white ">
                <span>Login</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none text-xl">
              {isMenuOpen ? (
                <X className="w-6 h-6 mt-6 text-space-cadet text-black" />
              ) : (
                <Menu className="w-6 h-6 text-space-cadet text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 left-0 bg-white border- rounded-2xl border-gray-200 shadow-lg p-6 md:hidden">
          <ul className="space-y-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  onClick={toggleMenu}
                  className="block text-black hover:text-slate-grey transition-colors cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/signup">
            <div className="mt-6 flex flex-col space-y-4">
              <button className=" border-space-cadet py-2 px-4 text-center transition-all duration-300 rounded-2xl shadow-inner  hover:bg-space-cadet bg-white font-bold">
                <span>Signup</span>
              </button>
            </div>
          </Link>
          <Link href="/login">
            <div className="mt-6 flex flex-col space-y-4">
              <button className=" border-space-cadet py-2 px-4 text-center transition-all duration-300 rounded-2xl shadow-inner  hover:bg-space-cadet bg-white font-bold">
                <span>Login</span>
              </button>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
