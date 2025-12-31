"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-indigo-400 text-white py-32 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Code. Market. Convert.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        OmniSpark Media builds high-performance websites, intuitive designs, and digital marketing strategies that turn visitors into loyal customers.
      </motion.p>
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/contact"
          className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get a Free Consultation
        </Link>
        <Link
          href="/services"
          className="border border-white px-8 py-4 rounded-full hover:bg-white/20 transition"
        >
          View Services
        </Link>
      </motion.div>
    </section>
  );
}
