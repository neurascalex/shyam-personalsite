import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = "",
}) => (
  <div
    className={cn(
      "flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-6",
      className
    )}
  >
    <div className="w-6 h-[1px] bg-gold" />
    {children}
  </div>
);
