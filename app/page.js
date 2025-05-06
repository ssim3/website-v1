"use client";

import LineDraw from "@/components/LineDraw";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Experience from "@/components/Experience";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export default function Home() {
  useGSAP(() => {
    gsap.from("#hero", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div className="m-auto flex max-w-5xl flex-col gap-28">

        <section
          id="hero"
          className="flex min-h-screen items-center justify-center gap-20"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="text-6xl">Hi, I'm Tristan</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor o eiusmod tempor o eiusmod tempor.
            </p>
          </div>
          <div className="relative aspect-[527/457] flex-1">
            <Image src="/Hero.png" fill={true} alt="Hero Image"/>
          </div>
        </section>

        <section>
          <h1 className="text-4xl">Experience</h1>
          <Experience />
        </section>

        <section>
          <h1 className="text-4xl">Tech Stack</h1>
        </section>

      </div>
      <LineDraw />
    </>
  );
}
