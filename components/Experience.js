import { ArrowRight, CircleArrowRight } from "lucide-react";
import React from "react";
import LineDraw from "./LineDraw";

const Experience = () => {
  const experiences = [
    {
      name: "National Environmental Agency",
      role: "Data Science Intern",
      period: "Feb 2025 - May 2025",
    },
    {
      name: "ApplyForChina",
      role: "Digital Strategist Intern",
      period: "Sep 2024 - Feb 2025",
    },
    {
      name: "Sustainable Living Lab",
      role: "AI Trainer",
      period: "Apr 2024 - Sep 2024",
    },
  ];

  return (
      <div className="m-10 p-5 flex grow flex-col gap-20 border-l-2">
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex items-center gap-10 p-5">
            <div className="absolute -left-4 top-0 h-4 w-4 rounded-full bg-[#61AAF2]"></div>
            <div className="flex flex-col gap-2 text-sm">
              <p>{experience.role}</p>
              <h3 className="text-2xl">{experience.name}</h3>
              <p>{experience.period}</p>
            </div>
            <div>
              <button className="cursor-pointer rounded-full duration-150 hover:bg-[#61AAF2]">
                <CircleArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Experience;
