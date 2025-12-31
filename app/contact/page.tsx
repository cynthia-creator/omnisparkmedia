export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <form
        action="/api/contact"
        method="POST"
        className="space-y-6"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
