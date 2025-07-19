import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: 19,
    features: ["Unlimited Projects", "Real-Time Analytics", "Email Support"],
    cta: "Start Free",
    mostPopular: false
  },
  {
    name: "Pro",
    price: 49,
    features: ["Everything in Starter", "Team Collaboration", "Priority Support", "Automation Tools"],
    cta: "Upgrade Now",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["All Pro Features", "White-Labeling", "Dedicated Account Manager", "Custom Integrations"],
    cta: "Contact Sales",
    mostPopular: false
  }
];

export function PricingTiers() {
  return (
    <section id="pricing" className="py-28 px-4 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-5 text-indigo-700 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Simple & Transparent Pricing
        </motion.h2>
        <p className="text-lg max-w-xl mx-auto text-neutral-700 dark:text-neutral-300 opacity-95">
          Get started for free, then pick a plan that grows with your business. No hidden fees.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-10 items-center md:items-stretch">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            className={`relative w-full max-w-xs rounded-3xl shadow-xl glass-bg bg-white dark:bg-neutral-900 border border-white/10 flex flex-col items-center px-8 py-12 transition-all ring-2 ${tier.mostPopular ? "ring-indigo-500 scale-105 z-10" : "ring-white/0"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {tier.mostPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold tracking-wide px-3 py-1 rounded-full shadow-md pointer-events-none">Most Popular</span>
            )}
            <h3 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-white">{tier.name}</h3>
            <div className="font-extrabold text-5xl mb-2 text-neutral-900 dark:text-white">${tier.price}<span className="text-lg font-semibold">/mo</span></div>
            <ul className="mb-8 flex flex-col gap-2 text-neutral-700 dark:text-neutral-200 items-center">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="text-teal-500 w-5 h-5" /> <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="w-full mt-auto">
              <button className="w-full py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 transition-all text-white shadow-lg ring-2 ring-indigo-500/30">
                {tier.cta}
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
