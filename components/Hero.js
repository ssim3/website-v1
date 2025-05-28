"use client";

import LineDraw from "@/svg/LineDraw";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section
      id="hero"
      className="mt-30 flex items-center justify-center gap-20 max-sm:flex-col-reverse max-sm:gap-10"
    >
      <div className="flex flex-1 flex-col gap-2.5">
        <h1 className="text-6xl">Hi, I'm Tristan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor o eiusmod tempor o eiusmod tempor.
        </p>
      </div>
      <div className="relative flex-1">
        <Image src="/Hero.png" width={527} height={427} alt="Hero Image" />
      </div>
      <LineDraw />
    </section>
  );
};

export default Hero;
