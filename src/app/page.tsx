"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-[url(/images/hero-sky.avif)] bg-no-repeat bg-cover bg-center text-white text-base overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", damping: 6, delay: 0.4 }}
        className="flex h-screen w-full flex-col items-center justify-center text-center "
      >
        <div className="mb-2 text-lg font-medium">
          Projects Launching Soon!.
        </div>
        ⌁<div className="">NextJS • Tailwind • Motion</div>
        <div className="mb-2">Shadcn • Storybook</div>⌁
        <div className="text-sm mb-3">
          Status: Migrating component architecture
        </div>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.6, damping: 4 }}
          className="mt-2 delay-00 rounded-sm border border-neutral-300 px-5 py-1.5  transition-all hover:bg-wkhite/30"
          href="https://apranthilaka.com/"
        >
          Home
        </motion.a>
        {/* <a href="/componentgrid">Component Grid</a> */}
      </motion.div>
    </div>
  );
}
