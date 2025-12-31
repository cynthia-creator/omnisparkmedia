"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Alice Johnson", role: "CEO", company: "TechCorp", message: "OmniSpark completely transformed our online presence. Highly recommended!" },
  { name: "Michael Lee", role: "Marketing Manager", company: "ShopEase", message: "The web development and marketing results were amazing — traffic tripled." },
  { name: "Samantha Brown", role: "Founder", company: "StartupX", message: "Fast, professional, and results-oriented team. Loved working with OmniSpark." }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-indigo-600 py-28 relative">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">What Clients Say</h2>
      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white border rounded-2xl p-8 shadow-lg text-center"
          >
            <p className="text-gray-600 mb-4">"{testimonials[index].message}"</p>
            <p className="font-semibold">{testimonials[index].name}</p>
            <p className="text-sm text-gray-500">{testimonials[index].role} - {testimonials[index].company}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-8">
          <button onClick={prev} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Previous</button>
          <button onClick={next} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Next</button>
        </div>
      </div>
    </section>
  );
}
