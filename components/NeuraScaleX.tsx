"use client";

import React from "react";
import { FadeIn } from "./FadeIn";

export const NeuraScaleX: React.FC = () => (
  <section
    className="px-[6%] py-24 bg-gradient-to-br from-bg-alt to-bg border-t border-white/5"
    id="neurascalex"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/20 rounded-sm px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-gold mb-8">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              AI Product — Pilots Open
            </div>
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-6">
              NeuraScaleX
            </h2>
            <p className="font-serif text-2xl italic text-cream/60 leading-tight mb-6">
              Your clinical expertise.
              <br />
              Available 24/7.
            </p>
            <p className="text-[16px] text-cream/60 leading-relaxed mb-10">
              An AI Twin trained on your voice, your frameworks and your
              clinical knowledge — answering patient questions, qualifying leads
              and booking consultations while you focus on the work only you can
              do.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://neurascalex.com"
                className="bg-gold hover:bg-gold-light text-bg px-8 py-3.5 rounded-sm text-[13px] font-bold tracking-widest transition-all duration-300"
              >
                Join the pilot
              </a>
              <a
                href="#connect"
                className="border border-gold/30 text-gold hover:bg-gold/10 px-8 py-3.5 rounded-sm text-[13px] font-medium tracking-widest transition-all duration-300"
              >
                Investor enquiries
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-bg/80 border border-gold/15 rounded-sm p-10">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gold mb-8">
              How it works
            </p>
            <div className="flex flex-col gap-3">
              {[
                "We train the AI Twin on your videos, articles, frameworks and clinical expertise",
                "Your Twin learns your voice, your style and how you explain complex clinical concepts",
                "It goes live — answering questions, qualifying leads and directing people to your services 24/7",
                "You receive qualified leads. Your patients get immediate, accurate responses. In your voice.",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-gold/5 border border-gold/10 rounded-sm"
                >
                  <span className="font-serif text-xl text-gold/50 shrink-0 w-6">
                    0{idx + 1}
                  </span>
                  <p className="text-[13px] text-cream/70 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: "🏥",
            title: "For individual clinicians",
            desc: "Scale your expertise without scaling your hours. Your AI Twin handles the questions your audience asks every day — in your clinical voice.",
          },
          {
            icon: "⚡",
            title: "For health tech startups",
            desc: "Embed clinical intelligence into your product. White-label API access to NeuraScaleX for health platforms building AI-powered patient communication.",
          },
          {
            icon: "🏛",
            title: "For NHS & healthcare groups",
            desc: "Enterprise AI communication for healthcare organisations who need clinical accuracy and governance at scale. Pilot programmes now open.",
          },
          {
            icon: "📈",
            title: "For investors",
            desc: "NeuraScaleX is raising a pre-seed round. We are looking for angels and funds who understand AI in healthcare communication. Get in touch.",
          },
        ].map((item, idx) => (
          <FadeIn
            key={idx}
            delay={idx * 0.1}
            className="bg-bg/60 border border-gold/10 rounded-sm p-8 hover:border-gold/30 transition-all duration-300"
          >
            <div className="text-2xl mb-4">{item.icon}</div>
            <p className="text-[15px] font-medium text-white mb-2">
              {item.title}
            </p>
            <p className="text-[13px] text-cream/50 leading-relaxed">
              {item.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
