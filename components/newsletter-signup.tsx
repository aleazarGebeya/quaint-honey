import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function validateEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="mt-12 w-full max-w-lg mx-auto p-6 rounded-2xl shadow-lg glass-bg bg-white/80 dark:bg-neutral-900/90 border border-white/10">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl font-semibold text-teal-600 dark:text-teal-400"
        >
          🎉 Thanks for subscribing!
        </motion.div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="font-semibold text-base text-neutral-800 dark:text-white">
            Subscribe to our newsletter:
          </label>
          <Input
            id="newsletter-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            required
            className="text-lg px-4 py-3"
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button className="rounded-xl px-6 py-3 mt-2 text-lg font-bold" type="submit">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
