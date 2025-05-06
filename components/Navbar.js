import Link from "next/link";
import React from "react";

const Navbar = () => {
  // Hyperlinks
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="m-auto flex items-center justify-between text-[#CC785C]">
      <Link className="text-2xl font-bold" href="/">
        S3
      </Link>
      <ul className="flex gap-28 text-lg">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link
              className="group transition-all duration-300 hover:font-medium"
              href={navItem.link}
            >
              {navItem.name}
              <span className="block h-0.5 max-w-0 bg-[#CC785C] transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
