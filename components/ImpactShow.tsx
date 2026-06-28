"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const ImpactShow: React.FC = () => (
  <section
    className="px-[6%] py-24 border-t border-white/5 relative overflow-hidden"
    id="impact"
  >
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <FadeIn>
          <SectionLabel>Podcast</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            The Impact Show
          </h2>
          <p className="text-[16px] text-cream/60 leading-relaxed mb-6">
            A podcast for the people building the future of health — one story
            at a time. Clinicians creating impact beyond their clinical
            practice. Health tech founders changing how medicine works. The
            humans behind healthcare innovation.
          </p>
          <p className="text-[16px] text-cream/60 leading-relaxed mb-10">
            Every episode is a story worth telling. And every guest leaves
            having shared expertise that might genuinely change someone&apos;s
            life.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                title: "The clinician beyond the clinic",
                desc: "Doctors and health professionals who built something remarkable outside their clinical role",
              },
              {
                title: "AI + the future of clinical practice",
                desc: "What clinicians need to understand about AI — and how it changes the way they communicate",
              },
              {
                title: "The authority journey",
                desc: "How health professionals go from unknown to the go-to voice in their clinical niche",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gold/5 border-l-2 border-gold/40 p-5 rounded-r-sm"
              >
                <p className="text-[14px] font-medium text-cream mb-1">
                  {item.title}
                </p>
                <p className="text-[13px] text-cream/50 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="order-1 md:order-2">
        <FadeIn delay={0.2}>
          <div className="bg-bg-alt border border-white/5 rounded-sm p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
              <div className="absolute w-[180px] h-[180px] border border-gold" />
              <div className="absolute w-[280px] h-[280px] border border-gold" />
              <div className="absolute w-[380px] h-[380px] border border-gold" />
            </div>

            <div className="relative z-10">
              <div className="text-5xl mb-6 text-gold">◉</div>
              <h3 className="font-serif text-3xl font-medium text-white mb-2">
                The Impact Show
              </h3>
              <p className="text-[13px] text-gold italic mb-10">
                Hosted by Shyam Pitla
              </p>

              <div className="flex justify-center gap-12 mb-10">
                <div>
                  <p className="font-serif text-3xl text-gold-light leading-none mb-1">
                    New
                  </p>
                  <p className="text-[10px] font-bold tracking-widest text-cream/40 uppercase">
                    Episodes weekly
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-gold-light leading-none mb-1">
                    UK
                  </p>
                  <p className="text-[10px] font-bold tracking-widest text-cream/40 uppercase">
                    Based · Global
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[13px] text-cream/50 mb-6">
                  Are you a clinician creating impact beyond your practice?
                </p>
                <a
                  href="https://theimpactshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-bg px-8 py-3 rounded-sm text-[13px] font-bold tracking-widest transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply to be a guest <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
