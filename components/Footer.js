import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    link: "https://www.linkedin.com/in/tristan-sim-kuan-xue-a97045226/",
    alt: "Linkedin",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    link: "https://github.com/ssim3",
    alt: "Github",
  },
];

const Footer = () => {
  return (
    <footer className="flex bg-[#333] px-20 py-10">
      <div className="flex flex-col gap-5 text-[var(--background)]">
        <p>Thanks for visiting my site! Check out other platforms I'm on:</p>
        <div className="flex gap-5">
          {socials.map((social, index) => (
            <Link key={index} href={social.link}>
              <Image
                src={social.icon}
                height={20}
                width={20}
                alt={social.alt}
              />
            </Link>
          ))}
        </div>
        <p>This site was inspired by <Link href="https://www.anthropic.com/" className="font-bold italic hover:underline text-[var(--main)]">Anthropic’s website</Link>—you probably know who they are. See the source code <Link href="https://github.com/ssim3/website-v1" className="font-bold italic hover:underline text-[var(--main)]">here</Link>!</p>
      </div>
    </footer>
  );
};

export default Footer;
