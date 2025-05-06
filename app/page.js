import LineDraw from "@/components/LineDraw";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto flex max-w-5xl flex-col gap-28">
      <section id="hero" className="flex min-h-screen items-center justify-center gap-20">
        <div className="flex flex-1 flex-col gap-2.5">
          <h1 className="text-6xl">Hi, I'm Tristan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor o eiusmod tempor o eiusmod tempor.
          </p>
        </div>
        <div className="relative aspect-[527/457] flex-1">
          <Image src="/Hero.png" fill={true} />
        </div>
        <LineDraw />
      </section>
    </div>
  );
}
