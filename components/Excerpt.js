"use client";

import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const Excerpt = () => {

  useGSAP(() => {
    gsap.from("#excerpt", {
      scrollTrigger: {
        trigger: "#excerpt",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <div id="excerpt" className="m-auto flex max-w-3xl flex-col gap-5 border-l-4 border-l-[#666663] p-5">
      <p>
        Hi everyone, thanks for caring enough to visit my site! I&apos;m a student developer based in Singapore, just trying to keep up with the latest tech that seems to drop every other week.
      </p>
      <p>
        My &quot;passion&quot; for technology started when I was a kid. I was a pretty materialistic one—always drawn to the latest smartphones, tablets, and especially <b>gaming consoles</b>. 
      </p>
      <p>
        <span className='font-bold italic text-[var(--main)]'>New RTX series from NVIDIA?</span> Mind blown. <span className='font-bold italic text-[var(--main)]'>ROG ALLY X?</span> Shut up and take my money.
      </p>
      <p>
        That obsession with the latest hardware eventually evolved into a fascination with software. These days, it feels like there&apos;s a new JavaScript framework or LLM popping up every other week. And the same excitement I once had for hardware is now being amplified through software.
      </p>
      <p>
        I&apos;m still a newbie in all of this, but I&apos;m doing my best to dive deep into the iceberg—one personal project at a time. I love chatting with people who geek out over the nitty-gritty details like I do, so feel free to reach out once you get to know me better!
      </p>
    </div>
  )
}

export default Excerpt