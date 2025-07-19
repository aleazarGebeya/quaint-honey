import React from "react";
import { HelpButton } from "@/components/help-button";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export function Navbar({ isMobileMenuOpen, onMobileMenuToggle }: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-background shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        {/* Logo or brand */}
        <span className="text-xl font-bold tracking-tight text-primary">BrandName</span>
        {/* Add nav links here if needed */}
      </div>
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle: only visible on mobile */}
        <button
          className="md:hidden p-2 rounded-lg border border-transparent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={onMobileMenuToggle}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
        {/* HelpButton always at end (top right) */}
        <HelpButton />
      </div>
    </nav>
  );
}
