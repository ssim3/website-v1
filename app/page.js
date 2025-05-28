import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Excerpt from "@/components/Excerpt";

const Home = () => {
  return (
    <>
      <div className="m-auto mb-50 flex max-w-5xl flex-col gap-50 px-10">
        
        <Hero />

        <Excerpt />

        <section className="">
          <h1 className="text-4xl">Experience</h1>
          <Experience />
        </section>

        <section>
          <h1 className="text-4xl">Tech Stack</h1>
          <Stack />
        </section>

        <section id="projects">
          <h1 className="text-4xl">Featured Works</h1>
          <Project />
        </section>

        <section
          id="contact"
          className="relative flex items-center justify-between gap-20 max-sm:flex-col"
        >
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex items-center justify-start gap-5">
              <h1 className="text-4xl font-bold text-[var(--main)]">
                Let&apos;s Talk!
              </h1>
            </div>
            <p>
              A friend once told me I talk too much—maybe they&apos;re right. But if you&apos;re someone who loves geeking out about tech or just wants to have a chat, I&apos;ve got plenty of words to throw your way.
            </p>
          </div>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
