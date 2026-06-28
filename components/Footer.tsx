"use client";

import React from "react";

export const Footer: React.FC = () => (
  <footer className="px-[6%] py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="font-serif text-lg font-medium text-cream">
      Shyam Pitla<span className="text-gold">.</span>
    </div>

    <div className="flex gap-8">
      {[
        { name: "LinkedIn", href: "https://linkedin.com/in/shyampitla" },
        { name: "HR Digital", href: "https://hrdigitalmedia.com" },
        { name: "Impact Show", href: "https://theimpactshow.com" },
        { name: "NeuraScaleX", href: "https://neurascalex.com" },
      ].map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-cream/40 hover:text-gold tracking-widest transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>

    <div className="text-[12px] text-cream/20 tracking-widest uppercase">
      © {new Date().getFullYear()} Shyam Pitla
    </div>
  </footer>
);
