"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { IconHome, IconMessage, IconUser, IconBrandX, IconBrandGithub, IconBrandMedium } from "@tabler/icons-react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Vortex } from "@/components/ui/vortex";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from 'next/image';

const people = [
  {
    id: 1,
    name: "NextJS",
    designation: "Application Framework",
    image:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png",
  },
  {
    id: 2,
    name: "TailwindCSS",
    designation: "Front End Styles",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmobSrGXiHw4jl4khQ6FoJLsO-g8vgAQHew&s",
  },
  {
    id: 3,
    name: "Typescript",
    designation: "Front End Coding",
    image:
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    id: 4,
    name: "Supabase",
    designation: "Cloud DB",
    image:
      "https://media.orrick.com/Media%20Library/public/images/client%20logos/supabase-logo-icon-740x360.jpg",
  },
  {
    id: 5,
    name: "Python",
    designation: "Data & Automation",
    image:
      "https://i.pinimg.com/564x/b6/a9/c7/b6a9c7fcfd84ae83641186e75312ade8.jpg",
  },
  {
    id: 6,
    name: "ShadCN",
    designation: "UI Theme/Design",
    image:
      "https://ui.shadcn.com/apple-touch-icon.png",
  },
];

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: <IconHome className="h-2 w-2 text-neutral-500 dark:text-white" />,
  },
  {
    title: "About",
    href: "/about",
    icon: <IconUser className="h-2 w-2 text-neutral-500 dark:text-white" />,
  },
  {
    title: "Contact",
    href: "https://x.com/zbailey83",
    icon: <IconMessage className="h-2 w-2 text-neutral-500 dark:text-white" />,
  },
];

const testimonials = [
  {
    quote:
      "I like to write...",
    name: "Medium Blog",
    designation: "Articles on AI, Crypto, SEO & More",
    src: "https://ugc.production.linktr.ee/abebd647-8601-47f9-bce9-eafc4e90d669_1000037225.jpeg?io=true&size=thumbnail-feature-v1_0",
  },
  {
    quote:
      "I wrote an in-depth guide for LLM prompting startegies for business solutions",
    name: "The Prompt Engineer’s Playbook: Strategies for AI-Driven Business Solutions",
    designation: "Author",
    src: "https://m.media-amazon.com/images/I/710NJYQZu0L._SY466_.jpg",
  },
  {
    quote:
      "I opened a Web3 themed apparel business...",
    name: "DYOR apparel",
    designation: "Fine Apparel E-Commerce",
    src: "https://framerusercontent.com/images/Kz9mAbkHLjt9GUD4eqMckFfrWjI.png?scale-down-to=1024",
  },
  {
    quote:
      "Hai I haz coding...",
    name: "@ZBAILEY83",
    designation: "Full-Stack Engineer",
    src: "https://ugc.production.linktr.ee/8839c88d-b562-49ea-855d-774d7546fac4_1000037801.jpeg?io=true&size=avatar-v3_0",
  },
  {
    quote:
      "HENLO Berachain BASEDberas",
    name: "BASEDbera",
    designation: "Berachain Project WIP",
    src: "https://ugc.production.linktr.ee/4b62206f-4ea8-42ff-932f-618534a6f05f_1000037903.png?io=true&size=thumbnail-feature-v1_0",
  },
];

export default function Home() {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-neutral-950">
      <div className="w-full max-w-6xl h-[85vh] bg-white rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/boatbg.jpg"
            alt="Boat Background"
            fill
            className="object-cover opacity-90"
          />
          <BackgroundBeamsWithCollision className="!h-full opacity-10" />
        </div>
        <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
          <div className="absolute top-16 left-1/2 -translate-x-1/2">
            <AnimatedTooltip items={people} />
          </div>
          <br />
          <br />
          <div className="flex-1 overflow-hidden">
          <br />
          <br />
          <br />
          <br />
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <h1 className="text-4xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                *@ZBAILEY83
              </span>
            </h1>
            <div className="flex gap-4">
              <a 
                href="https://x.com/zbailey83" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <IconBrandX className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  @zbailey83
                </span>
              </a>
              <a 
                href="https://github.com/zbailey1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <IconBrandGithub className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  github.com/zbailey1
                </span>
              </a>
              <a 
                href="https://medium.com/@zbailey83" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <IconBrandMedium className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  medium.com/@zbailey83
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
