const steps = [
  "Discovery & Strategy",
  "Design & Prototyping",
  "Development",
  "Launch & Growth",
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-28">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Process</h2>
      <div className="grid md:grid-cols-4 gap-8 text-center max-w-7xl mx-auto px-6">
        {steps.map((step, i) => (
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-2" key={i}>
            <div className="text-indigo-600 text-3xl font-bold mb-4">{i + 1}</div>
            <p className="font-medium text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
