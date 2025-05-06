"use client";

import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(DrawSVGPlugin);

const LineDraw = () => {
  useGSAP(() => {
    gsap.from("#line", { duration: 1.5, drawSVG: 0 });
  });

  return (
    <div className="absolute top-1/4 left-0 -z-100 w-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="line"
          d="M0 22.5999C85.2295 8.10645 172.121 1.59215 261.247 2.01972C328.848 2.34403 396.256 11.5812 460.631 22.7269C522.251 33.3956 585.276 44.5762 644.105 59.6314C696.518 73.0448 747.631 89.4426 801.542 100.792C852.383 111.494 906.474 116.965 960.427 119.022C1015.96 121.138 1071.91 121.099 1127.54 120.927C1174.29 120.783 1220.77 120.086 1266.85 115.21C1340.08 107.461 1411.83 93.9399 1460 60.3301"
          stroke="#CC785C"
          strokeOpacity="1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LineDraw;
