"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What I Do", href: "#work" },
    { name: "Impact Show", href: "#impact" },
    { name: "NeuraScaleX", href: "#neurascalex" },
    { name: "Work With Me", href: "#connect" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] px-[6%] py-5 flex items-center justify-between transition-all duration-300",
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent"
      )}
    >
      <a
        href="#"
        className="font-serif text-xl font-medium text-cream tracking-tight"
      >
        Shyam Pitla<span className="text-gold">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[13px] text-cream/60 hover:text-cream tracking-widest transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#connect"
          className="bg-gold hover:bg-gold-light text-bg text-[14px] font-bold px-6 py-2.5 rounded-sm tracking-widest transition-all duration-300"
        >
          Let&apos;s Talk
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-cream"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-alt border-b border-white/5 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif text-cream/80 hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#connect"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-bg text-center py-3 rounded-sm font-bold"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
