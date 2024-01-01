"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I was a BCom student, and then I fell in love with Web Development, With
        5 years of experience I'm on a mission to Build awesome-looking and
        smooth websites.
      </p>

      <p className="mb-3">
        I use various tools, including{" "}
        <strong className="font-semibold">
          HTML, CSS, React, Next.js, JavaScript, TypeScript, Node.js, Git,
          Tailwind, Prisma, MongoDB, Express, Framer Motion,
        </strong>{" "}
        and I'm currently learning{" "}
        <strong className="font-semibold">D3.js</strong>, to create websites.
      </p>

      <p>
        Outside of coding, I enjoy playing video games, watching movies, and
        spending time with my Bird (Cockatiel). I like learning new stuff, and
        right now, I'm exploring Fitness and Healthy eating, I'm also learning
        how to play the guitar.
      </p>
    </motion.section>
  );
}
