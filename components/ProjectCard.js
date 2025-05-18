import Image from 'next/image';
import React from 'react'

const ProjectCard = (props) => {

  console.log(props);

  const { id, title, description, image } = props;

  console.log(image);

  return (
    <div className="mt-10 relative group">
      <div className="relative h-48 max-w-72 m-auto overflow-hidden rounded-3xl">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl font-bold">{title}</h1>
        </div>
      </div>
      <p className="mt-5">{description}</p>
    </div>
  )
}

export default ProjectCard