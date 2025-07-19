"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AnimatedStats } from "@/components/animated-stats";
import { PricingTiers } from "@/components/pricing-tiers";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";
import { useSmoothScroll } from "@/lib/use-smooth-scroll";

// Comply with Next.js requirement: export a default React component from app/page.tsx
export default function Page() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useSmoothScroll();
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-indigo-100 dark:from-neutral-900 dark:to-indigo-900 relative">
      {/* Gradient background overlays */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute h-80 w-80 top-0 left-0 rounded-full bg-indigo-300 opacity-30 blur-3xl" />
        <div className="absolute h-96 w-96 bottom-0 right-0 rounded-full bg-blue-400 opacity-20 blur-3xl" />
        <div className="absolute h-60 w-60 bottom-10 left-1/4 rounded-full bg-teal-500 opacity-10 blur-2xl" />
      </div>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen((m) => !m)}
      />
      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 flex md:hidden">
          <nav className="bg-white dark:bg-neutral-950 text-xl flex flex-col w-8/12 min-h-full shadow-lg py-9 px-6 gap-8 animate-in fade-in slide-in-from-left-10 glass-bg">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="nav-link">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="nav-link">Pricing</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="nav-link">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
          </nav>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AnimatedStats />
        <PricingTiers />
        <Testimonials />
        <section id="contact" className="py-28 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-5 text-indigo-700 dark:text-white tracking-tight">Contact Us</h2>
            <p className="text-lg max-w-xl mx-auto text-neutral-700 dark:text-neutral-300 opacity-95">Have a question, want a demo, or need custom solutions? Drop us a message and we’ll respond promptly.</p>
          </div>
          <ContactForm />
        </section>
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
