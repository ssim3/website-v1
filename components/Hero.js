"use client";

import LineDraw from "@/svg/LineDraw";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

import { Roboto_Slab } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Orbitron } from 'next/font/google'
import { Pacifico } from 'next/font/google'

const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const pacifico = Pacifico({ subsets: ['latin'], variable: '--font-pacifico', weight: ["400"], })

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const fontClasses = [
  robotoSlab,
  playfair,
  orbitron,
  pacifico
]

const Hero = () => {

  const [fontIndex, setFontIndex] = useState(0)

  // Font switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fontClasses.length);
    }, 1820);
    return () => clearInterval(interval);
  }, []);

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
        <h1 className={`text-6xl ${fontClasses[fontIndex].className}`}>Hi, I&apos;m Tristan</h1>
        <p>
          I build tech solutions to tackle the everyday problems I face—and learn a lot along the way.
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
