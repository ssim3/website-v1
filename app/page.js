"use client";

import LineDraw from "@/components/LineDraw";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";

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
      <div className="m-auto flex max-w-5xl flex-col gap-50 px-10">
        <section
          id="hero"
          className="mt-30 flex items-center justify-center gap-20 max-sm:flex-col-reverse max-sm:gap-5"
        >
          <div className="flex flex-1 flex-col gap-2.5">
            <h1 className="text-6xl">Hi, I'm Tristan</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor o eiusmod tempor o eiusmod tempor.
            </p>
          </div>
          <div className="relative aspect-[527/457] flex-1">
            <Image src="/Hero.png" fill={true} alt="Hero Image" />
          </div>
          <LineDraw />
        </section>

        <div className="m-auto flex max-w-3xl flex-col gap-5 border-l-4 border-l-[#666663] p-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <section className="">
          <h1 className="text-4xl">Experience</h1>
          <Experience />
        </section>

        <section>
          <h1 className="text-4xl">Tech Stack</h1>
          <Stack />
        </section>

        <section>
          <h1 className="text-4xl">Projects</h1>
        </section>
      </div>
    </>
  );
}
