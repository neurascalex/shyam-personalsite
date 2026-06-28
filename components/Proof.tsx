"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const Proof: React.FC = () => (
  <section className="px-[6%] py-24 border-t border-white/5" id="proof">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <SectionLabel>Results</SectionLabel>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-12">
          What this work produces.
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
        {[
          {
            val: "60 days",
            context: "Programme sold out",
            quote:
              '"Shyam built our YouTube platform from zero. Within 60 days of launch, my programme sold out and my reach extended to multiple countries."',
            name: "Dr Sunil Kumar",
            title: "Lifestyle Medicine Physician",
            color: "var(--color-gold)",
          },
          {
            val: "10K+",
            context: "YouTube subscribers",
            quote:
              "From invisible online to a growing global audience in lifestyle medicine. A complete brand ecosystem that reflects the depth of Dr Sunil's expertise.",
            name: "Dr Sunil Kumar",
            title: "Forbes Coaches Council Member",
            color: "var(--color-teal-light)",
          },
          {
            val: "Global",
            context: "Reach built from scratch",
            quote:
              '"The roadmap was the first time someone had taken my ideas and given me steps that felt real. A strategy that honours my vision."',
            name: "Dr Catherine Muyeba",
            title: "Consultant Psychiatrist · ADHD Advocate",
            color: "var(--color-gold-light)",
          },
        ].map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="bg-bg-alt p-10">
            <p
              className="font-serif text-5xl font-medium mb-2 leading-none"
              style={{ color: item.color }}
            >
              {item.val}
            </p>
            <p
              className="text-[11px] font-bold tracking-[0.15em] uppercase mb-6 pb-6 border-b border-white/5"
              style={{ color: item.color }}
            >
              {item.context}
            </p>
            <p className="text-[14px] text-cream/60 italic leading-relaxed mb-6">
              {item.quote}
            </p>
            <div>
              <p className="text-[13px] font-medium text-cream">{item.name}</p>
              <p className="text-[11px] text-cream/40">{item.title}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
