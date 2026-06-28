"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const Work: React.FC = () => (
  <section
    className="px-[6%] py-24 bg-bg-alt border-t border-white/5"
    id="work"
  >
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <FadeIn>
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            I sit at the intersection of clinical expertise and digital impact.
          </h2>
          <p className="text-[16px] text-cream/60 leading-relaxed mb-6">
            I am not a generic marketer who pivoted into healthcare. I am a
            builder who has spent years inside the clinician community —
            understanding how they think, what they fear, what they want for
            their patients, and what holds them back from sharing what they
            know.
          </p>
          <p className="text-[16px] text-cream/60 leading-relaxed">
            That understanding is what makes everything I build different. From
            personal brand strategy to AI product development, every decision is
            grounded in the reality of clinical practice.
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col">
          {[
            {
              title: "Clinician authority building",
              desc: "Working with doctors, health coaches and allied health professionals to build their online presence systematically — from brand strategy to YouTube growth to lead generation.",
            },
            {
              title: "Health tech startup advisory",
              desc: "Supporting clinical founders and health tech startups on marketing strategy, brand positioning, content systems and go-to-market execution. Currently working with Dr Arokia's startup and other clinician-led ventures.",
            },
            {
              title: "AI product development",
              desc: "Building NeuraScaleX — the AI platform for clinical expertise. Seeking co-builders, clinical pilots and early investors who understand the opportunity at the intersection of AI and healthcare communication.",
            },
            {
              title: "Speaking & thought leadership",
              desc: "Speaking on clinician personal branding, AI in healthcare communication and what the future of clinical authority looks like. Available for conferences, panels and institutional events.",
            },
          ].map((item, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.1}
              className="flex gap-6 py-6 border-b border-white/5 last:border-none"
            >
              <span className="font-serif text-3xl text-gold/40 shrink-0 leading-none w-10">
                {idx + 1}
              </span>
              <div>
                <p className="text-[15px] font-medium text-white mb-1.5">
                  {item.title}
                </p>
                <p className="text-[14px] text-cream/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <FadeIn delay={0.2}>
          <div className="bg-bg border border-gold/20 rounded-sm p-10 relative overflow-hidden group">
            <span className="absolute top-6 left-8 font-serif text-[100px] text-gold/10 leading-none pointer-events-none">
              &quot;
            </span>
            <p className="font-serif text-[20px] italic text-cream leading-relaxed mb-8 relative z-10 pt-4">
              Working with Shyam has been a transformative experience. His
              strategic clarity and deep understanding of digital ecosystems
              helped me reach thousands of people across the globe with a clear,
              purpose-driven message.
            </p>
            <div className="relative z-10">
              <p className="text-[13px] font-bold tracking-wider text-gold uppercase mb-1">
                Dr Sunil Kumar
              </p>
              <p className="text-[12px] text-cream/40">
                Lifestyle Medicine Physician · Forbes Coaches Council
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-bg border border-gold/20 rounded-sm p-10 relative overflow-hidden group">
            <span className="absolute top-6 left-8 font-serif text-[100px] text-gold/10 leading-none pointer-events-none">
              &quot;
            </span>
            <p className="font-serif text-[20px] italic text-cream leading-relaxed mb-8 relative z-10 pt-4">
              I finally have a digital strategy that honours my vision and who I
              am. It&apos;s the first time someone has taken my ideas and given
              me clear steps that feel real.
            </p>
            <div className="relative z-10">
              <p className="text-[13px] font-bold tracking-wider text-gold uppercase mb-1">
                Dr Catherine Muyeba
              </p>
              <p className="text-[12px] text-cream/40">
                Consultant Psychiatrist · Creator of REAP & RISE™
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
