"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-indigo-400 text-white py-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to grow your business?</h2>
      <p className="mb-8 text-indigo-100 max-w-xl mx-auto leading-relaxed">
        Let’s build a high-performing website and marketing strategy that converts.
      </p>
      <Link href="/contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
        Get a Free Consultation
      </Link>
    </section>
  );
}
