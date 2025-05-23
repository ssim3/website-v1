"use client";

import { ArrowRight, CircleArrowRight } from "lucide-react";
import React, { useState } from "react";
import LineDraw from "../animations/LineDraw";
import Image from "next/image";
import Suitcase from "@/animations/Suitcase";

const Experience = () => {
  const experiences = [
    {
      name: "National Environmental Agency",
      role: "Data Science Intern",
      period: "Feb 2025 - May 2025",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor o eiusmod tempor o eiusmod tempor.
      `,
    },
    {
      name: "ApplyForChina",
      role: "Digital Strategist Intern",
      period: "Sep 2024 - Feb 2025",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor o eiusmod tempor o eiusmod tempor.
      `,
    },
    {
      name: "Sustainable Living Lab",
      role: "AI Trainer",
      period: "Apr 2024 - Sep 2024",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor o eiusmod tempor o eiusmod tempor.
      `,
    },
  ];

  // TODO: Implement pictures and actually write the description for each experience.

  return (
    <>
      <div className="relative m-10 flex flex-col gap-15 border-l-2 p-5 pb-20 before:absolute before:top-0 before:left-[-6.5px] before:h-3 before:w-3 before:rounded-full before:bg-[#CC785C] before:content-['']">
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex items-center gap-10 p-5">
            <div className="flex flex-col gap-2 text-sm">
              <p>{experience.role}</p>
              <h3 className="text-2xl">{experience.name}</h3>
              <p>{experience.period}</p>
            </div>
            <div className="group">
              <CircleArrowRight className="cursor-pointer rounded-full duration-150 group-hover:bg-[var(--main)]" size={20} />
              <div className="absolute top-0 right-0 flex max-w-1/2 flex-col gap-2 rounded-3xl border bg-[var(--background)] p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h4 className="text-xl">{experience.name}</h4>
                <p>{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
        <Suitcase />
      </div>
    </>
  );
};

export default Experience;
