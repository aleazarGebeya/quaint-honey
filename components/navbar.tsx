import React from "react";
import { HelpButton } from "@/components/help-button";

// ...other imports, presumably navigation links, logo, etc.

export function Navbar() {
  // Place the HelpButton on the top right corner of the navbar.
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-background shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        {/* Logo or brand */}
        <span className="text-xl font-bold tracking-tight text-primary">BrandName</span>
        {/* Add nav links here if needed */}
      </div>
      <div className="flex items-center gap-4">
        {/* Existing nav links/buttons, e.g. Pricing, About, etc. */}
        {/* Place HelpButton at the end (top right) */}
        <HelpButton />
      </div>
    </nav>
  );
}
