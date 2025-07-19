import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function HelpButton() {
  const handleClick = () => {
    // Placeholder action: open help modal or log to console
    // You can update with modal logic later if needed
    console.log("Help button clicked");
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary hover:bg-primary/10 transition-colors"
      aria-label="Get Help"
    >
      <HelpCircle className="w-5 h-5" />
      <span>Help</span>
    </Button>
  );
}
