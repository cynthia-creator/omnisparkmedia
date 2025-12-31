"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "E-commerce Website", category: "Web Development", image: "/images/project1.jpg", result: "+42% conversion", description: "Custom e-commerce solution with React & Next.js." },
  { title: "Marketing Campaign", category: "SEO & Marketing", image: "/images/project2.jpg", result: "3× traffic", description: "Content marketing and SEO campaign for growth." },
  { title: "Startup Landing Page", category: "UI / UX Design", image: "/images/project3.jpg", result: "Launched in 14 days", description: "Landing page design optimized for conversions." }
];

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-indigo-50 py-28">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">Our Work</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Click any project to see more details.
      </p>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelected(index)}
          >
            <div className="relative h-56">
              <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-6">
              <p className="text-sm text-indigo-600 font-medium mb-2">{project.category}</p>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">Result: <span className="font-medium">{project.result}</span></p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-3xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{projects[selected].title}</h3>
              <p className="text-gray-600 mb-4">{projects[selected].description}</p>
              <div className="relative h-64 mb-4">
                <Image src={projects[selected].image} alt={projects[selected].title} fill className="object-cover rounded-lg" />
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
