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
    <>
      <div className="m-15 mb-0 flex flex-col gap-20 border-l-2 p-10">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-center gap-10 p-5 rounded-3xl hover:text-[#FAFAF7] hover:bg-[#61AAF2] transition-all duration-300">
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
    </>
  );
};

export default Experience;
