// app/page.tsx

"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Scientific Chemical Process Design
          </motion.h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in designing and optimizing chemical processes across
            industries. Our scientific expertise and literature-driven approach
            deliver concrete synthesis strategies tailored to your needs.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-300">Our Services</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl shadow-sm border bg-white">
            <h3 className="text-xl font-semibold text-blue-700">
              Process Design
            </h3>
            <p className="mt-4 text-gray-600">
              Development of efficient and scalable chemical processes for
              industrial applications.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border bg-white">
            <h3 className="text-xl font-semibold text-blue-700">
              Process Optimization
            </h3>
            <p className="mt-4 text-gray-600">
              Improve yield, reduce cost, and optimize safety with modern
              analytical techniques.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border bg-white">
            <h3 className="text-xl font-semibold text-blue-700">
              Scientific Review
            </h3>
            <p className="mt-4 text-gray-600">
              Literature review and evidence-based recommendations for synthesis
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-blue-50 border-t border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Work With Us?
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Our team combines scientific rigor with practical engineering
            expertise. Every recommendation is backed by peer-reviewed
            literature, experimental evidence, and industrial best practices.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Contact Us
        </h2>
        <form className="mt-10 grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Scientific Process Solutions. All rights
        reserved.
      </footer>
    </main>
  );
}
