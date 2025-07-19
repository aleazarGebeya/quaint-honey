import React from "react";

export function Footer() {
  return (
    <footer className="px-6 py-8 bg-neutral-950 bg-gradient-to-t from-neutral-800 to-transparent text-white glass-bg relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        <div className="text-lg font-semibold tracking-tighter">© {new Date().getFullYear()} SaaSly. All rights reserved.</div>
        <div className="flex gap-6 text-sm opacity-80">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
