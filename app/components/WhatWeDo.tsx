
"use client";
import { Code, BarChart3, Layout } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Custom, responsive websites built for speed and conversions." },
  { icon: BarChart3, title: "Digital Marketing", desc: "SEO, PPC, and content strategies to drive traffic and leads." },
  { icon: Layout, title: "UI / UX Design", desc: "Clean, intuitive designs that guide users to action." },
];

export default function WhatWeDo() {
  return (
    <section className="bg-gray-50 py-28">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">What We Do</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
        We combine strategy, creativity, and technology to deliver measurable results for your business.
      </p>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title} // ✅ Add this line
              className="bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6 text-indigo-600">
                <Icon size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
