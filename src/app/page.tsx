"use client";
import "animate.css";
import TypewriterComponent from "../components/typewriter";
import About from "./about/page";
import Contact from "./contact-us/page";
import FeaturedProjects from "@/components/featured";
import Services from "@/components/services";
import TechStack from "@/components/techstack";
import SkillsCarousel from "@/components/skillscarousel";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16">
      <section className="flex justify-center items-center  mt-3 gap-4">
        <div className="min-h-[70vh]flex flex-col justify-centerpx-4 sm:px-8 md:px-16 text-yellow-50">
          <h2 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center sm:text-left leading-tight">
            Hi,{" "}
            <span className="block text-cyan-400 font-extrabold mt-2">
              I am Sana Farasat
            </span>
            <span className="block mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
              Junior Front-end Developer
            </span>
            <span className="block mt-2 text-lg sm:text-xl md:text-2xl text-cyan-300">
              with Agentic AI Expertise
            </span>
          </h2>

          <TypewriterComponent />
        </div>
      </section>
      <br />
      <br />
      <section>
        <About />
      </section>
      <br />
      <section>
        <SkillsCarousel />
      </section>
      <br />
      <br />
      <section>
        <FeaturedProjects />
      </section>
      <br />
      <section>
        <Services />
      </section>
      <br />
      <section>
        <TechStack />
      </section>
      <br />
      <section>
        <Contact />
      </section>
    </main>
  );
}
