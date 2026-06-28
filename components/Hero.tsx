"use client";

import React from "react";
import { Zap, Mic, Bot } from "lucide-react";
import { FadeIn } from "./FadeIn";

export const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-[6%] py-[120px] overflow-hidden geometric-lines">
    <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-radial-gradient pointer-events-none blur-[100px]" />

    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
      <div>
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 text-[12px] font-bold tracking-[0.2em] uppercase text-gold mb-8">
            <div className="w-8 h-[1px] bg-gold" />
            Founder · Strategic Advisor · Operator
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-serif text-[clamp(46px,5vw,72px)] font-medium leading-[1.08] text-white mb-6 tracking-tight">
            Helping clinicians
            <br />
            become{" "}
            <em className="italic text-gold-light not-italic">the voice</em>
            <br />
            of their field.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-[17px] text-cream/60 max-w-[480px] mb-10 leading-relaxed">
            I build the platforms, media and AI that turn clinical expertise
            into public authority — and help health professionals create impact
            far beyond their clinic.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-wrap gap-4 items-center">
          <a
            href="#work"
            className="bg-gold hover:bg-gold-light text-bg px-8 py-4 rounded-sm text-[14px] font-bold tracking-widest transition-all duration-300 gold-glow"
          >
            See What I Do
          </a>
          <a
            href="#connect"
            className="border border-gold/30 text-gold hover:bg-gold/10 px-8 py-4 rounded-sm text-[14px] font-medium tracking-widest transition-all duration-300"
          >
            Work With Me
          </a>
        </FadeIn>
      </div>

      <div className="hidden md:flex flex-col gap-4">
        <FadeIn delay={0.5}>
          <div className="bg-bg-alt border border-white/5 rounded-sm p-6 flex gap-5 hover:border-gold/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-gold/15 text-gold rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Zap size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-cream/20 mb-1">
                Agency
              </p>
              <p className="text-[15px] font-medium text-cream mb-1">
                HR Digital Media
              </p>
              <p className="text-[13px] text-cream/50 leading-snug">
                Building clinician authority platforms — brand, content,
                YouTube, lead generation.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="bg-bg-alt border border-white/5 rounded-sm p-6 flex gap-5 hover:border-gold/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-gold/15 text-gold rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mic size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-cream/20 mb-1">
                Media
              </p>
              <p className="text-[15px] font-medium text-cream mb-1">
                The Impact Show
              </p>
              <p className="text-[13px] text-cream/50 leading-snug">
                Podcast for clinicians creating impact beyond the clinic.
                Stories, strategies, AI.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="bg-bg-alt border border-white/5 rounded-sm p-6 flex gap-5 hover:border-gold/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-gold/15 text-gold rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Bot size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-cream/20 mb-1">
                AI Product
              </p>
              <p className="text-[15px] font-medium text-cream mb-1">
                NeuraScaleX
              </p>
              <p className="text-[13px] text-cream/50 leading-snug">
                AI Twins for clinicians — trained on your voice, available to
                your patients 24/7.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
