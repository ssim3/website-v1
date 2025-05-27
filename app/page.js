import LineDraw from "@/svg/LineDraw";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Project from "@/components/Project";

const Home = () => {
  return (
    <>
      <div className="m-auto mb-50 flex max-w-5xl flex-col gap-50 px-10">
        <Hero />

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
          <h1 className="text-4xl">Featured Works</h1>
          <Project />
        </section>

        <section
          id="contact"
          className="relative flex items-center justify-between gap-20 max-sm:flex-col"
        >
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex items-center justify-start gap-5">
              <h1 className="text-4xl font-bold text-[var(--main)]">
                Let's Talk!
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor o eiusmod tempor o eiusmod tempor.
            </p>
          </div>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
