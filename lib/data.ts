import React from "react";
import { CgToolbox, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import chmodcalculator from "@/public/projects/chmodcalculator.webp";
import iframeremerator from "@/public/projects/iframeremerator.webp";
import instagramfonts from "@/public/projects/instagramfonts.webp";
import randomtoken from "@/public/projects/randomtoken.webp";
import textrepeat from "@/public/projects/textrepeat.webp";
import ytembedcode from "@/public/projects/ytembedcode.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Leaning HTML, CSS and JavaScript",
    location: "Mumbai, India",
    description:
      "During my time in college as a BCom student, I began learning basic HTML, CSS, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Mumbai, India",
    description:
      "I worked as a front-end developer for 1 years as a freelancer. I also upskilled to the React and Nextjs stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Start Blog and Multiple Projects",
    location: "Kolkata, India",
    description:
      "I help people from all around the world with their work, and I also create different projects. In my free time, I enjoy writing blogs.",
    icon: React.createElement(CgToolbox),
    date: "2022 - 2023",
  },
  {
    title: "Working with Business Owners",
    location: "Kolkata, India",
    description:
      "I assist business owners in maintaining their websites and am open to full-time job opportunities.",
    icon: React.createElement(LiaBusinessTimeSolid),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "iFramer Generator",
    description:
      "The iFramer Generator tool is useful for individuals with limited HTML knowledge who wish to create or customize an iFrame for their website.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: iframeremerator,
  },
  {
    title: "CHMOD Calculator",
    description:
      "Quickly create file permission codes (numbers or symbols) with just a few clicks.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: chmodcalculator,
  },
  {
    title: "Text Repeater",
    description:
      "Repeat a single word or sentence and enhance it with additional elements for use on social media or other platforms.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: textrepeat,
  },
  {
    title: "Fancy Text",
    description:
      "Transform Simple words into fancy text for social media usernames, bios, captions, and other purposes.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: instagramfonts,
  },
  {
    title: "Random Token Generator",
    description:
      "Generate a random string, number, normal token, token encryption key, or WPA key with various bits options.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: randomtoken,
  },
  {
    title: "Youtube Embed Code",
    description:
      "Paste a YouTube video URL, and this tool will create a responsive iFrame with multiple customization options.",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion"],
    imageUrl: ytembedcode,
  },
] as const;

export const skillsData = [
  { skill: "HTML", image: "html" },
  { skill: "CSS", image: "css" },
  { skill: "JavaScript", image: "javaScript" },
  { skill: "TypeScript", image: "typeScript" },
  { skill: "React", image: "react" },
  { skill: "Next.js", image: "nextjs" },
  { skill: "Node.js", image: "nodejs" },
  { skill: "Git", image: "git" },
  { skill: "Tailwind", image: "tailwind" },
  { skill: "Prisma", image: "prisma" },
  { skill: "MongoDB", image: "mongodb" },
  { skill: "Express", image: "expressjs" },
  { skill: "D3.js", image: "d3js" },
  { skill: "Framer Motion", image: "framermotion" },
] as const;
