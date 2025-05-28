"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Resume", link: "https://tristansim-resume.s3.us-east-2.amazonaws.com/Tristan+Sim+Kuan+Xue+-+Resume+Redacted+2025.pdf" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="z-100 m-auto flex w-full items-center justify-between px-5 py-10 text-[var(--foreground)] md:px-20">
      <Link className="text-2xl font-bold" href="/">
        S3
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden gap-28 text-lg md:flex">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link
              scroll={true}
              className="group transition-all duration-300 hover:font-medium"
              href={navItem.link}
            >
              {navItem.name}
              <span className="block h-0.5 max-w-0 bg-[var(--foreground)] transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button 
        className="flex flex-col gap-1.5 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`h-0.5 w-6 bg-[var(--foreground)] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-[var(--foreground)] ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`h-0.5 w-6 bg-[var(--foreground)] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 z-50 flex w-full flex-col items-center gap-6 bg-[var(--background)] py-6 md:hidden">
          {navItems.map((navItem, index) => (
            <Link
              key={index}
              scroll={true}
              className="text-lg transition-all duration-300 hover:font-medium"
              href={navItem.link}
              onClick={() => setIsOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;