import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = (props) => {
  const { id, title, description, image } = props;

  return (
    <div className="group w-2/5 border-t pt-5 transition-all duration-300 first:border-none last:border-b last:pb-5 max-sm:w-full">
      <div className="flex flex-col gap-2 pl-2">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="mb-4 hidden rounded-3xl object-cover max-sm:block"
        />
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl transition-all duration-300 group-hover:font-medium max-sm:text-[var(--main)]">
            {title}
          </h1>
          <ArrowRight className="max-w-0 transition-all duration-300 group-hover:max-w-10" />
        </div>
        <p className="hidden max-sm:block">{description}</p>
      </div>
      <div className="absolute top-0 right-0 max-h-96 max-w-1/2 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 max-sm:hidden">
        {image && (
          <div>
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="mb-4 rounded-3xl object-cover"
            />
            <p className="m-auto text-center">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
