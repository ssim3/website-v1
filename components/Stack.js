"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import stacks from "@/data/techstacks";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Stack = () => {

  const stackRefs = useRef([]);

  useEffect(() => {
    stackRefs.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1, // Stagger the animations
      });
    });
  }, []);

  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-20">
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="flex w-full items-start justify-between gap-10 border-b pb-20 last:border-none last:pb-0 max-md:flex-col"
          ref={(el) => (stackRefs.current[index] = el)}
        >
          <h3 className="flex-1 text-2xl">{stack.name}</h3>
          <div className="grid flex-1 grid-cols-3 gap-10 max-lg:grid-cols-2">
            {stack.details.map((detail, index) => (
              <div key={index} className="flex items-center gap-x-5 gap-y-10">
                <Image
                  src={detail.image}
                  width={50}
                  height={50}
                  alt="Stack Logo"
                />
                <p>{detail.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stack;
