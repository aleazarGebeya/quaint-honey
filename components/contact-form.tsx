import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function validateEmail(email: string) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!values.name) newErrors.name = "Name is required.";
    if (!values.email) newErrors.email = "Email is required.";
    else if (!validateEmail(values.email)) newErrors.email = "Invalid email address.";
    if (!values.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl shadow-lg glass-bg bg-white/90 dark:bg-neutral-900/90 border border-white/10 p-8">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl font-semibold text-teal-600 dark:text-teal-400"
        >
          Thanks for contacting us! We’ll be in touch soon.
        </motion.div>
      ) : (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-base text-neutral-800 dark:text-white">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="text-lg px-4 py-3"
            />
            {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-base text-neutral-800 dark:text-white">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@email.com"
              autoComplete="email"
              required
              className="text-lg px-4 py-3"
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-semibold text-base text-neutral-800 dark:text-white">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={5}
              required
              className="text-lg px-4 py-3"
            />
            {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
          </div>
          <Button className="rounded-xl px-6 py-3 text-lg font-bold mt-3" type="submit">
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}
