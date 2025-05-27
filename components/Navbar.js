import Link from "next/link";
import React from "react";

const Navbar = () => {
  // Hyperlinks
  const navItems = [
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="z-100 m-auto flex w-full items-center justify-between px-20 py-10 text-[var(--foreground)]">
      <Link className="text-2xl font-bold" href="/">
        S3
      </Link>
      <ul className="flex gap-28 text-lg">
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
    </div>
  );
};

export default Navbar;
