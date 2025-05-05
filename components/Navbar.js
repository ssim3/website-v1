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
    <div className="m-auto flex justify-between items-center text-[#9A6138]">
      <Link className="text-2xl font-bold" href="/">S3</Link>
      <ul className="flex gap-28 text-lg">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link href={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
