import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    companyLogo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=120&h=120&auto=format",
    quote: "Our productivity skyrocketed. Their analytics dashboard is clean, insightful, and intuitive!",
    author: "Emily Q.",
    position: "VP Operations, Acme Inc."
  },
  {
    companyLogo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=120&h=120&auto=format",
    quote: "Transformed the way we handle data and reporting. Exceptional customer support.",
    author: "Travis Y.",
    position: "CTO, Beta LLC"
  },
  {
    companyLogo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&auto=format",
    quote: "Setup was so fast and easy. We’re delighted with the continuous feature updates!",
    author: "Mina R.",
    position: "Founder, Launchify"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-4 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 relative">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl font-extrabold mb-5 text-indigo-700 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Real Success Stories
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300 opacity-95">
          Join hundreds of growing teams leveraging our platform to change the way they work.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-10 items-center md:items-stretch">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            className="relative w-full max-w-sm rounded-3xl shadow-lg glass-bg bg-white dark:bg-neutral-900 border border-white/10 flex flex-col items-center px-8 py-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={t.companyLogo}
              alt={t.author + " company logo"}
              className="w-20 h-20 rounded-full mb-4 border-2 border-indigo-400 object-cover"
              loading="lazy"
            />
            <blockquote className="font-semibold italic mb-5 text-neutral-900 dark:text-white text-lg leading-relaxed">“{t.quote}”</blockquote>
            <div className="text-indigo-700 font-bold text-md dark:text-teal-400">{t.author}</div>
            <div className="text-neutral-500 text-sm font-medium">{t.position}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
