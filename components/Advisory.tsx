"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const Advisory: React.FC = () => (
  <section
    className="px-[6%] py-24 bg-bg-alt border-t border-white/5"
    id="advisory"
  >
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <FadeIn>
          <SectionLabel>Advisory & Partnerships</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            Working with clinicians who are building something.
          </h2>
          <p className="text-[16px] text-cream/60 leading-relaxed mb-6">
            Beyond the agency and the products, I work directly with a small
            number of clinician-founders and health tech startups as a strategic
            advisor — helping them navigate brand positioning, go-to-market
            strategy, content systems and early growth.
          </p>
          <p className="text-[16px] text-cream/60 leading-relaxed mb-10">
            Current advisory focus: clinical founders building health tech
            products, NHS professionals transitioning to independent practice,
            and health tech startups that need marketing infrastructure without
            a full internal team.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Health tech startups",
              "Clinical founders",
              "Brand strategy",
              "Go-to-market",
              "AI in healthcare",
              "Digital health",
              "NHS to independent",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[12px] px-4 py-1.5 border border-white/10 rounded-sm text-cream/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-4 md:mt-12">
        {[
          {
            color: "var(--color-gold)",
            title: "Strategic marketing advisory",
            desc: "Positioning, messaging, content strategy and growth systems for health tech founders who are pre-product-market fit.",
          },
          {
            color: "var(--color-teal-light)",
            title: "Platform and media development",
            desc: "Building the content and community infrastructure that makes a health tech startup credible before it has scaled.",
          },
          {
            color: "var(--color-gold-light)",
            title: "AI implementation guidance",
            desc: "Advising clinicians and health organisations on implementing AI communication tools — including NeuraScaleX — into their practice.",
          },
          {
            color: "var(--color-gold)",
            title: "Investor narrative preparation",
            desc: "Helping clinical founders build the story and evidence base that makes a health tech business fundable.",
          },
        ].map((item, idx) => (
          <FadeIn
            key={idx}
            delay={idx * 0.1}
            className="bg-bg border border-white/5 rounded-sm p-6 flex gap-5"
          >
            <div
              className="w-2 h-2 rounded-full mt-2 shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-[15px] font-medium text-cream mb-1">
                {item.title}
              </p>
              <p className="text-[13px] text-cream/50 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
