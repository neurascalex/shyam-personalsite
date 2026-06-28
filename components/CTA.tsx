"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const CTA: React.FC = () => (
  <section
    className="px-[6%] py-32 border-t border-white/5 relative overflow-hidden"
    id="connect"
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gradient blur-[100px] pointer-events-none" />

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <FadeIn>
        <div className="flex justify-center mb-8">
          <SectionLabel className="mb-0">Work With Me</SectionLabel>
        </div>
        <h2 className="font-serif text-[clamp(38px,4.5vw,60px)] font-medium text-white leading-[1.1] mb-6">
          Let&apos;s build something that matters.
        </h2>
        <p className="text-[17px] text-cream/60 max-w-[560px] mx-auto mb-16 leading-relaxed">
          Whether you are a clinician building your platform, a health tech
          founder building your product, or an investor backing the future of
          clinical AI — I want to hear from you.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        {[
          {
            icon: "▲",
            title: "Build your authority",
            desc: "Clinicians who want to grow their platform and audience",
            href: "https://hrdigitalmedia.com",
          },
          {
            icon: "⬡",
            title: "NeuraScaleX pilot",
            desc: "Clinicians and health orgs interested in AI Twins",
            href: "https://neurascalex.com",
          },
          {
            icon: "◉",
            title: "Appear on the show",
            desc: "Clinicians creating impact beyond the clinic",
            href: "https://theimpactshow.com",
          },
          {
            icon: "◈",
            title: "Advisory & investment",
            desc: "Health tech founders and investors in clinical AI",
            href: "mailto:shyam@hrdigitalmedia.com",
          },
        ].map((opt, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <a
              href={opt.href}
              className="block bg-bg-alt border border-white/5 rounded-sm p-6 hover:border-gold/30 hover:bg-bg transition-all duration-300 h-full"
            >
              <div className="text-xl mb-4 text-gold">{opt.icon}</div>
              <p className="text-[14px] font-medium text-white mb-1.5">
                {opt.title}
              </p>
              <p className="text-[12px] text-cream/50 leading-relaxed">
                {opt.desc}
              </p>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
