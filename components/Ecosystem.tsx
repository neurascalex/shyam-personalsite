"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const Ecosystem: React.FC = () => {
  const brands = [
    {
      num: "01",
      label: "Agency",
      name: "HR Digital Media",
      tag: "Build your platform",
      desc: "The growth agency for health professionals. We handle everything — brand strategy, YouTube, content, lead generation — so clinicians can focus on what they do best.",
      items: [
        "Personal brand strategy & launch",
        "YouTube channel management",
        "LinkedIn & content systems",
        "Health tech startup marketing",
      ],
      link: "https://hrdigitalmedia.com",
      color: "#1D9E75",
    },
    {
      num: "02",
      label: "Media",
      name: "The Impact Show",
      tag: "Amplify your story",
      desc: "The podcast for clinicians creating impact beyond their clinical practice. Doctors building movements. Health professionals educating millions. Hosted by Shyam Pitla.",
      items: [
        "Clinician entrepreneur stories",
        "AI + clinical practice",
        "The authority journey",
        "Health tech innovation",
      ],
      link: "https://theimpactshow.com",
      color: "#9F9AE8",
    },
    {
      num: "03",
      label: "AI Product",
      name: "NeuraScaleX",
      tag: "Scale your expertise",
      desc: "AI Twins for health professionals — trained on your clinical voice, your frameworks and your expertise. Available to your patients and clients 24/7.",
      items: [
        "Clinical voice AI training",
        "Patient Q&A automation",
        "Lead qualification & booking",
        "Health tech platform API",
      ],
      link: "https://neurascalex.com",
      color: "#6BAED6",
    },
  ];

  return (
    <section
      className="px-[6%] py-24 border-t border-white/5"
      id="ecosystem"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>The Ecosystem</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-4">
            Three brands.
            <br />
            One mission.
          </h2>
          <p className="text-[16px] text-cream/60 max-w-[600px] mb-16 leading-relaxed">
            Clinical expertise is one of the most underused forces for good in
            the world. The knowledge is there. The platform usually isn&apos;t.
            I built this ecosystem to change that.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {brands.map((brand, idx) => (
            <FadeIn
              key={brand.num}
              delay={idx * 0.1}
              className="bg-bg-alt p-10 relative group hover:bg-bg transition-colors duration-500"
            >
              <div
                className="absolute top-10 left-0 w-[3px] h-10 rounded-r-sm"
                style={{ backgroundColor: brand.color }}
              />
              <span
                className="absolute top-6 right-8 font-serif text-6xl font-normal opacity-[0.04] text-white leading-none"
              >
                {brand.num}
              </span>

              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: brand.color }}
              >
                {brand.label}
              </p>
              <h3 className="font-serif text-3xl font-medium text-white mb-1 leading-tight">
                {brand.name}
              </h3>
              <p
                className="text-[13px] italic mb-6"
                style={{ color: brand.color }}
              >
                {brand.tag}
              </p>

              <p className="text-[14px] text-cream/60 leading-relaxed mb-8">
                {brand.desc}
              </p>

              <div className="flex flex-col gap-2.5 mb-10">
                {brand.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-[13px] text-cream/40 leading-snug"
                  >
                    <ChevronRight
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: brand.color }}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wider hover:opacity-80 transition-opacity"
                style={{ color: brand.color }}
              >
                {brand.link.replace("https://", "")} <ArrowRight size={14} />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
