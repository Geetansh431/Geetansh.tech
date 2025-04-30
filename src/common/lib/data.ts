import React from 'react';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    "title": "Rippling",
    "location": "SDE Intern",
    "description": "Rippling is a unified workforce management platform that streamlines HR, IT, and finance operations for businesses. It enables seamless employee onboarding, payroll, benefits administration, device and app management—all from a single dashboard. With powerful automation and global capabilities, Rippling helps companies reduce manual tasks, stay compliant, and scale efficiently.",
    "icon": React.createElement(BookIcon),
    "date": "August 2025 - Present"
  }
] as const;

export const projectsData = [
  {
    title: 'StudyNotion',
    description: `A comprehensive ed-tech platform that revolutionizes online learning. Features include course creation, student enrollment, payment integration, and interactive learning materials.`,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    imageUrl: '/images/StudyNotion.png',
    link: 'https://study-notion-theta-dusky.vercel.app/',
  },
  {
    title: 'Talk2Hire',
    description: `Ready to master your job interviews? Built a real-time AI-driven mock interview platform with Next.js and Vapi AI, offering personalized prep sessions just for you.`,
    tags: ['Next', 'Firebase', 'Google Gemini', 'Tailwind'],
    imageUrl: '/images/talk2hire.png',
    link: 'https://talk2-hire.vercel.app/',
  },
  {
    title: 'BidBazzar',
    description: `BidBazzar is a sophisticated online auction platform that connects auctioneers and bidders in a seamless, secure, and user-friendly environment. Built with modern technologies and best practices, it offers a comprehensive solution for managing auctions, bids, and payments.`,
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: '/images/bidbazzar.jpeg',
    link: 'https://bidbazzar.vercel.app/',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
