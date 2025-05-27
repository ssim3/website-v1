"use client";

import { CircleArrowRight } from "lucide-react";
import React from "react";
import Suitcase from "@/svg/Suitcase";

const Experience = () => {
  const experiences = [
    {
      name: "National Environmental Agency",
      role: "Data Science Intern",
      location: "Singapore",
      period: "Feb 2025 - May 2025",
      cover: "/experience/nea.jpg",
      description: `
        During my internship at Singapore's National Environment Agency under the Centre for Climate Research Singapore (CCRS), I worked in the climate department, where I analyzed petabytes of multidimensional climate data to calculate environmental indicators such as the Heat Index. <br /><br />
        I was also responsible for producing climatology visualizations across Southeast Asian countries based on the processed data. The main technologies I used included Jupyter Notebook, Python, Xarray, CDO, and Linux.
      `,
    },
    {
      name: "ApplyForChina",
      role: "Digital Strategist Intern",
      location: "Hangzhou, China",
      period: "Sep 2024 - Feb 2025",
      cover: "/experience/a4c.jpg",
      description: `
      An internship that will stay with me for a lifetime, I was fortunate to have the opportunity to intern at a small startup based in Hangzhou, China. <br /><br />
      During my time there, I worked as a Digital Strategist Intern. My responsibilities included building websites using WordPress and React.js, enhancing their SEO through original blog content and adherence to SEO best practices. I was also in charge of managing digital advertisements to promote the company across various online platforms.
      `,
    },
    {
      name: "Sustainable Living Lab",
      role: "AI Trainer",
      location: "Singapore",
      period: "Apr 2024 - Sep 2024",
      cover: "/experience/sl2.jpg",
      description: `
        I worked as a part-time instructor teaching students from Grades 9 to 12 on various topics in Artificial Intelligence, including computing mathematics, machine learning, statistics, and data analysis. <br /><br />
        I was responsible for conducting classes of over 40 students, delivering complex concepts in an engaging and accessible manner.
      `,
    },
  ];

  // TODO: Implement pictures and actually write the description for each experience.

  return (
    <div className="relative m-10 flex flex-col gap-15 border-l-2 p-5 pb-20 before:absolute before:top-0 before:left-[-6.5px] before:h-3 before:w-3 before:rounded-full before:bg-[#CC785C] before:content-['']">
      {experiences.map((experience, index) => (
        <div key={index} className="relative flex items-center gap-10 p-5">
          <div className="flex flex-col gap-2 text-sm">
            <p>{experience.role}</p>
            <h3 className="text-2xl">{experience.name}</h3>
            <p>{experience.period}</p>
          </div>
          <div className="group">
            <CircleArrowRight
              className="rounded-full duration-150 group-hover:bg-[var(--main)] max-sm:hidden"
              size={20}
            />
            <div className="absolute top-1/2 right-0 flex max-w-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border bg-[var(--background)] opacity-0 transition-all duration-300 group-hover:opacity-100 max-sm:hidden">
              <img
                src={experience.cover}
                alt={experience.name}
                className="aspect-[16/9] w-full rounded-t-3xl border-b-4 border-[var(--main)] object-cover"
              />
              <div className="flex flex-col gap-5 p-5">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-medium">{experience.name}</h4>
                  <p className="text-sm">{experience.location}</p>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Suitcase className="max-sm:hidden" />
    </div>
  );
};

export default Experience;
