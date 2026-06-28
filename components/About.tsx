"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const About: React.FC = () => (
  <section
    className="px-[6%] py-24 bg-bg-alt border-t border-white/5"
    id="about"
  >
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <FadeIn className="relative">
        <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold/20">
          <Image
            src="https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png"
            alt="Shyam Pitla"
            width={600}
            height={750}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r border-b border-gold/30 pointer-events-none" />
        <div className="absolute -top-6 -left-6 w-48 h-48 border-l border-t border-gold/30 pointer-events-none" />
      </FadeIn>

      <div>
        <FadeIn>
          <SectionLabel>The Founder</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            Authority is built on{" "}
            <em className="italic text-gold not-italic">clinical trust</em>.
          </h2>
          <div className="space-y-6 text-[17px] text-cream/70 leading-relaxed">
            <p>
              I bridge the gap between clinical excellence and digital
              authority. My mission is to help health professionals translate
              years of rigorous training into a powerful public voice.
            </p>
            <p>
              With a background deeply rooted in the healthcare ecosystem, I
              understand the unique challenges clinicians face when stepping
              into the digital arena. It&apos;s not just about marketing;
              it&apos;s about maintaining clinical integrity while achieving
              massive reach.
            </p>
            <p>
              I&apos;ve spent years inside the clinician community —
              understanding how you think, what you fear, and what you want for
              your patients. That understanding is what makes everything I build
              different.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <p className="font-serif text-3xl text-gold mb-1">10k+</p>
              <p className="text-[11px] font-bold tracking-widest uppercase text-cream/40">
                Clinicians Reached
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold mb-1">Global</p>
              <p className="text-[11px] font-bold tracking-widest uppercase text-cream/40">
                Impact Network
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
