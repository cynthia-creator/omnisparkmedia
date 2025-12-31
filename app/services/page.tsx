export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Web Development",
            desc: "Modern, fast, responsive websites using React & Next.js.",
          },
          {
            title: "Digital Marketing",
            desc: "SEO, PPC, and content strategies that drive traffic.",
          },
          {
            title: "UI/UX Design",
            desc: "Clean, intuitive designs focused on conversions.",
          },
        ].map((service) => (
          <div
            key={service.title}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
