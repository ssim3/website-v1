import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = (props) => {
  const { id, title, description, image } = props;

  return (
    <div className="group w-2/5 border-t pt-5 transition-all duration-300 first:border-none last:border-b last:pb-5">
      <div className="flex items-center justify-between gap-2">
        <h1 className="pl-2 text-2xl transition-all duration-300 group-hover:font-medium">
          {title}
        </h1>
        <ArrowRight className="max-w-0 transition-all duration-300 group-hover:max-w-10" />
      </div>
      <div className="absolute top-0 right-0 max-h-96 max-w-1/2 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
        {image && (
          <div>
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="mb-4 rounded-lg object-cover"
            />
            <p className="text-gray-600">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
