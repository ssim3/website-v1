import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/queries";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Hand from "@/svg/Hand";

const options = { next: { revalidate: 30 } };

const Project = async () => {
  const projects = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <div className="relative mt-10 flex flex-col justify-between gap-5">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          id={project._id}
          title={project.title}
          description={project.description}
          image={project.imageUrl}
        />
      ))}
      <Hand />
    </div>
  );
};

export default Project;
