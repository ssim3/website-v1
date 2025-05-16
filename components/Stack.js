import React from "react";
import Image from "next/image";
import stacks from "@/techstacks";

const Stack = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-20">
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="flex w-full items-start justify-between gap-10 border-b pb-20 last:border-none last:pb-0 max-md:flex-col"
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
