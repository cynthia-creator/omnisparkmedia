const plans = [
  {
    name: "Starter",
    price: "R3,500",
    features: ["Landing Page", "Basic SEO", "Mobile Responsive"],
  },
  {
    name: "Growth",
    price: "R7,500",
    features: ["Full Website", "SEO Setup", "Analytics"],
  },
  {
    name: "Pro",
    price: "Custom",
    features: ["Custom Build", "Marketing Strategy", "Ongoing Support"],
  },
];

export default function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-16">
        Pricing Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="text-gray-600">
                  ✓ {f}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
