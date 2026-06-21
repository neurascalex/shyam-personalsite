import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  Zap,
  Activity,
  Hexagon,
  Globe,
  Mic,
  Bot,
  Briefcase,
  Users
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Shared Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-6", className)}>
    <div className="w-6 h-[1px] bg-[var(--color-gold)]" />
    {children}
  </div>
);

// --- Navigation ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What I Do', href: '#work' },
    { name: 'Impact Show', href: '#impact' },
    { name: 'NeuraScaleX', href: '#neurascalex' },
    { name: 'Work With Me', href: '#connect' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] px-[6%] py-5 flex items-center justify-between transition-all duration-300",
      scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
    )}>
      <a href="#" className="font-serif text-xl font-medium text-[var(--color-cream)] tracking-tight">
        Shyam Pitla<span className="text-[var(--color-gold)]">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-[13px] text-[var(--color-cream)]/60 hover:text-[var(--color-cream)] tracking-widest transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#connect" 
          className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg)] text-[14px] font-bold px-6 py-2.5 rounded-sm tracking-widest transition-all duration-300"
        >
          Let's Talk
        </a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[var(--color-cream)]">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-bg-alt)] border-b border-white/5 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif text-[var(--color-cream)]/80 hover:text-[var(--color-gold)]"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#connect" 
              onClick={() => setIsOpen(false)}
              className="bg-[var(--color-gold)] text-[var(--color-bg)] text-center py-3 rounded-sm font-bold"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-[6%] py-[120px] overflow-hidden geometric-lines">
    <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-radial-gradient from-[var(--color-gold)]/10 to-transparent pointer-events-none blur-[100px]" />
    
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
      <div>
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-8">
            <div className="w-8 h-[1px] bg-[var(--color-gold)]" />
            Founder · Strategic Advisor · Operator
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-serif text-[clamp(46px,5vw,72px)] font-medium leading-[1.08] text-white mb-6 tracking-tight">
            Helping clinicians<br />
            become <em className="italic text-[var(--color-gold-light)] not-italic">the voice</em><br />
            of their field.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-[17px] text-[var(--color-cream)]/60 max-w-[480px] mb-10 leading-relaxed">
            I build the platforms, media and AI that turn clinical expertise into public authority — and help health professionals create impact far beyond their clinic.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-wrap gap-4 items-center">
          <a href="#work" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg)] px-8 py-4 rounded-sm text-[14px] font-bold tracking-widest transition-all duration-300 gold-glow">
            See What I Do
          </a>
          <a href="#connect" className="border border-[var(--color-gold)]/30 text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 px-8 py-4 rounded-sm text-[14px] font-medium tracking-widest transition-all duration-300">
            Work With Me
          </a>
        </FadeIn>
      </div>

      <div className="hidden md:flex flex-col gap-4">
        <FadeIn delay={0.5}>
          <div className="bg-[var(--color-bg-alt)] border border-white/5 rounded-sm p-6 flex gap-5 hover:border-[var(--color-gold)]/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-[var(--color-gold)]/15 text-[var(--color-gold)] rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Zap size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/20 mb-1">Agency</p>
              <p className="text-[15px] font-medium text-[var(--color-cream)] mb-1">HR Digital Media</p>
              <p className="text-[13px] text-[var(--color-cream)]/50 leading-snug">Building clinician authority platforms — brand, content, YouTube, lead generation.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="bg-[var(--color-bg-alt)] border border-white/5 rounded-sm p-6 flex gap-5 hover:border-[var(--color-gold)]/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-[var(--color-gold)]/15 text-[var(--color-gold)] rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mic size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/20 mb-1">Media</p>
              <p className="text-[15px] font-medium text-[var(--color-cream)] mb-1">The Impact Show</p>
              <p className="text-[13px] text-[var(--color-cream)]/50 leading-snug">Podcast for clinicians creating impact beyond the clinic. Stories, strategies, AI.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="bg-[var(--color-bg-alt)] border border-white/5 rounded-sm p-6 flex gap-5 hover:border-[var(--color-gold)]/30 transition-all duration-300 group">
            <div className="w-10 h-10 bg-[var(--color-gold)]/15 text-[var(--color-gold)] rounded-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Bot size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/20 mb-1">AI Product</p>
              <p className="text-[15px] font-medium text-[var(--color-cream)] mb-1">NeuraScaleX</p>
              <p className="text-[13px] text-[var(--color-cream)]/50 leading-snug">AI Twins for clinicians — trained on your voice, available to your patients 24/7.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

// --- About Section ---

const About = () => (
  <section className="px-[6%] py-24 bg-[var(--color-bg-alt)] border-t border-white/5" id="about">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <FadeIn className="relative">
        <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[var(--color-gold)]/20">
          <img 
            src="https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png" 
            alt="Shyam Pitla" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r border-b border-[var(--color-gold)]/30 pointer-events-none" />
        <div className="absolute -top-6 -left-6 w-48 h-48 border-l border-t border-[var(--color-gold)]/30 pointer-events-none" />
      </FadeIn>

      <div>
        <FadeIn>
          <SectionLabel>The Founder</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            Authority is built on <em className="italic text-[var(--color-gold)] not-italic">clinical trust</em>.
          </h2>
          <div className="space-y-6 text-[17px] text-[var(--color-cream)]/70 leading-relaxed">
            <p>
              I bridge the gap between clinical excellence and digital authority. My mission is to help health professionals translate years of rigorous training into a powerful public voice.
            </p>
            <p>
              With a background deeply rooted in the healthcare ecosystem, I understand the unique challenges clinicians face when stepping into the digital arena. It's not just about marketing; it's about maintaining clinical integrity while achieving massive reach.
            </p>
            <p>
              I've spent years inside the clinician community — understanding how you think, what you fear, and what you want for your patients. That understanding is what makes everything I build different.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <p className="font-serif text-3xl text-[var(--color-gold)] mb-1">10k+</p>
              <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--color-cream)]/40">Clinicians Reached</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[var(--color-gold)] mb-1">Global</p>
              <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--color-cream)]/40">Impact Network</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

// --- Ecosystem Section ---

const Ecosystem = () => {
  const brands = [
    {
      num: '01',
      label: 'Agency',
      name: 'HR Digital Media',
      tag: 'Build your platform',
      desc: 'The growth agency for health professionals. We handle everything — brand strategy, YouTube, content, lead generation — so clinicians can focus on what they do best.',
      items: [
        'Personal brand strategy & launch',
        'YouTube channel management',
        'LinkedIn & content systems',
        'Health tech startup marketing'
      ],
      link: 'https://hrdigitalmedia.com',
      color: '#1D9E75'
    },
    {
      num: '02',
      label: 'Media',
      name: 'The Impact Show',
      tag: 'Amplify your story',
      desc: 'The podcast for clinicians creating impact beyond their clinical practice. Doctors building movements. Health professionals educating millions. Hosted by Shyam Pitla.',
      items: [
        'Clinician entrepreneur stories',
        'AI + clinical practice',
        'The authority journey',
        'Health tech innovation'
      ],
      link: 'https://theimpactshow.com',
      color: '#9F9AE8'
    },
    {
      num: '03',
      label: 'AI Product',
      name: 'NeuraScaleX',
      tag: 'Scale your expertise',
      desc: 'AI Twins for health professionals — trained on your clinical voice, your frameworks and your expertise. Available to your patients and clients 24/7.',
      items: [
        'Clinical voice AI training',
        'Patient Q&A automation',
        'Lead qualification & booking',
        'Health tech platform API'
      ],
      link: 'https://neurascalex.com',
      color: '#6BAED6'
    }
  ];

  return (
    <section className="px-[6%] py-24 border-t border-white/5" id="ecosystem">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionLabel>The Ecosystem</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-4">
            Three brands.<br />One mission.
          </h2>
          <p className="text-[16px] text-[var(--color-cream)]/60 max-w-[600px] mb-16 leading-relaxed">
            Clinical expertise is one of the most underused forces for good in the world. The knowledge is there. The platform usually isn't. I built this ecosystem to change that.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {brands.map((brand, idx) => (
            <FadeIn key={brand.num} delay={idx * 0.1} className="bg-[var(--color-bg-alt)] p-10 relative group hover:bg-[var(--color-bg)] transition-colors duration-500">
              <div className="absolute top-10 left-0 w-[3px] h-10 rounded-r-sm" style={{ backgroundColor: brand.color }} />
              <span className="absolute top-6 right-8 font-serif text-6xl font-normal opacity-[0.04] text-white leading-none">{brand.num}</span>
              
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: brand.color }}>{brand.label}</p>
              <h3 className="font-serif text-3xl font-medium text-white mb-1 leading-tight">{brand.name}</h3>
              <p className="text-[13px] italic mb-6" style={{ color: brand.color }}>{brand.tag}</p>
              
              <p className="text-[14px] text-[var(--color-cream)]/60 leading-relaxed mb-8">{brand.desc}</p>
              
              <div className="flex flex-col gap-2.5 mb-10">
                {brand.items.map(item => (
                  <div key={item} className="flex items-start gap-3 text-[13px] text-[var(--color-cream)]/40 leading-snug">
                    <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: brand.color }} />
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
                {brand.link.replace('https://', '')} <ArrowRight size={14} />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Work Section ---

const Work = () => (
  <section className="px-[6%] py-24 bg-[var(--color-bg-alt)] border-t border-white/5" id="work">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <FadeIn>
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            I sit at the intersection of clinical expertise and digital impact.
          </h2>
          <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed mb-6">
            I am not a generic marketer who pivoted into healthcare. I am a builder who has spent years inside the clinician community — understanding how they think, what they fear, what they want for their patients, and what holds them back from sharing what they know.
          </p>
          <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed">
            That understanding is what makes everything I build different. From personal brand strategy to AI product development, every decision is grounded in the reality of clinical practice.
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col">
          {[
            {
              title: 'Clinician authority building',
              desc: 'Working with doctors, health coaches and allied health professionals to build their online presence systematically — from brand strategy to YouTube growth to lead generation.'
            },
            {
              title: 'Health tech startup advisory',
              desc: "Supporting clinical founders and health tech startups on marketing strategy, brand positioning, content systems and go-to-market execution. Currently working with Dr Arokia's startup and other clinician-led ventures."
            },
            {
              title: 'AI product development',
              desc: 'Building NeuraScaleX — the AI platform for clinical expertise. Seeking co-builders, clinical pilots and early investors who understand the opportunity at the intersection of AI and healthcare communication.'
            },
            {
              title: 'Speaking & thought leadership',
              desc: 'Speaking on clinician personal branding, AI in healthcare communication and what the future of clinical authority looks like. Available for conferences, panels and institutional events.'
            }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="flex gap-6 py-6 border-b border-white/5 last:border-none">
              <span className="font-serif text-3xl text-[var(--color-gold)]/40 shrink-0 leading-none w-10">{idx + 1}</span>
              <div>
                <p className="text-[15px] font-medium text-white mb-1.5">{item.title}</p>
                <p className="text-[14px] text-[var(--color-cream)]/50 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <FadeIn delay={0.2}>
          <div className="bg-[var(--color-bg)] border border-[var(--color-gold)]/20 rounded-sm p-10 relative overflow-hidden group">
            <span className="absolute top-6 left-8 font-serif text-[100px] text-[var(--color-gold)]/10 leading-none pointer-events-none">"</span>
            <p className="font-serif text-[20px] italic text-[var(--color-cream)] leading-relaxed mb-8 relative z-10 pt-4">
              Working with Shyam has been a transformative experience. His strategic clarity and deep understanding of digital ecosystems helped me reach thousands of people across the globe with a clear, purpose-driven message.
            </p>
            <div className="relative z-10">
              <p className="text-[13px] font-bold tracking-wider text-[var(--color-gold)] uppercase mb-1">Dr Sunil Kumar</p>
              <p className="text-[12px] text-[var(--color-cream)]/40">Lifestyle Medicine Physician · Forbes Coaches Council</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-[var(--color-bg)] border border-[var(--color-gold)]/20 rounded-sm p-10 relative overflow-hidden group">
            <span className="absolute top-6 left-8 font-serif text-[100px] text-[var(--color-gold)]/10 leading-none pointer-events-none">"</span>
            <p className="font-serif text-[20px] italic text-[var(--color-cream)] leading-relaxed mb-8 relative z-10 pt-4">
              I finally have a digital strategy that honours my vision and who I am. It's the first time someone has taken my ideas and given me clear steps that feel real.
            </p>
            <div className="relative z-10">
              <p className="text-[13px] font-bold tracking-wider text-[var(--color-gold)] uppercase mb-1">Dr Catherine Muyeba</p>
              <p className="text-[12px] text-[var(--color-cream)]/40">Consultant Psychiatrist · Creator of REAP & RISE™</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

// --- Proof Section ---

const Proof = () => (
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
            val: '60 days',
            context: 'Programme sold out',
            quote: '"Shyam built our YouTube platform from zero. Within 60 days of launch, my programme sold out and my reach extended to multiple countries."',
            name: 'Dr Sunil Kumar',
            title: 'Lifestyle Medicine Physician',
            color: 'var(--color-gold)'
          },
          {
            val: '10K+',
            context: 'YouTube subscribers',
            quote: 'From invisible online to a growing global audience in lifestyle medicine. A complete brand ecosystem that reflects the depth of Dr Sunil\'s expertise.',
            name: 'Dr Sunil Kumar',
            title: 'Forbes Coaches Council Member',
            color: 'var(--color-teal-light)'
          },
          {
            val: 'Global',
            context: 'Reach built from scratch',
            quote: '"The roadmap was the first time someone had taken my ideas and given me steps that felt real. A strategy that honours my vision."',
            name: 'Dr Catherine Muyeba',
            title: 'Consultant Psychiatrist · ADHD Advocate',
            color: 'var(--color-gold-light)'
          }
        ].map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="bg-[var(--color-bg-alt)] p-10">
            <p className="font-serif text-5xl font-medium mb-2 leading-none" style={{ color: item.color }}>{item.val}</p>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-6 pb-6 border-b border-white/5" style={{ color: item.color }}>{item.context}</p>
            <p className="text-[14px] text-[var(--color-cream)]/60 italic leading-relaxed mb-6">{item.quote}</p>
            <div>
              <p className="text-[13px] font-medium text-[var(--color-cream)]">{item.name}</p>
              <p className="text-[11px] text-[var(--color-cream)]/40">{item.title}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Advisory Section ---

const Advisory = () => (
  <section className="px-[6%] py-24 bg-[var(--color-bg-alt)] border-t border-white/5" id="advisory">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <div>
        <FadeIn>
          <SectionLabel>Advisory & Partnerships</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            Working with clinicians who are building something.
          </h2>
          <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed mb-6">
            Beyond the agency and the products, I work directly with a small number of clinician-founders and health tech startups as a strategic advisor — helping them navigate brand positioning, go-to-market strategy, content systems and early growth.
          </p>
          <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed mb-10">
            Current advisory focus: clinical founders building health tech products, NHS professionals transitioning to independent practice, and health tech startups that need marketing infrastructure without a full internal team.
          </p>
          
          <div className="flex flex-wrap gap-2.5">
            {[
              'Health tech startups', 'Clinical founders', 'Brand strategy', 
              'Go-to-market', 'AI in healthcare', 'Digital health', 'NHS to independent'
            ].map(tag => (
              <span key={tag} className="text-[12px] px-4 py-1.5 border border-white/10 rounded-sm text-[var(--color-cream)]/50">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-4 md:mt-12">
        {[
          { color: 'var(--color-gold)', title: 'Strategic marketing advisory', desc: 'Positioning, messaging, content strategy and growth systems for health tech founders who are pre-product-market fit.' },
          { color: 'var(--color-teal-light)', title: 'Platform and media development', desc: 'Building the content and community infrastructure that makes a health tech startup credible before it has scaled.' },
          { color: 'var(--color-gold-light)', title: 'AI implementation guidance', desc: 'Advising clinicians and health organisations on implementing AI communication tools — including NeuraScaleX — into their practice.' },
          { color: 'var(--color-gold)', title: 'Investor narrative preparation', desc: 'Helping clinical founders build the story and evidence base that makes a health tech business fundable.' }
        ].map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="bg-[var(--color-bg)] border border-white/5 rounded-sm p-6 flex gap-5">
            <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: item.color }} />
            <div>
              <p className="text-[15px] font-medium text-[var(--color-cream)] mb-1">{item.title}</p>
              <p className="text-[13px] text-[var(--color-cream)]/50 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Impact Show Section ---

const ImpactShow = () => (
  <section className="px-[6%] py-24 border-t border-white/5 relative overflow-hidden" id="impact">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <FadeIn>
          <SectionLabel>Podcast</SectionLabel>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-8">
            The Impact Show
          </h2>
          <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed mb-6">
            A podcast for the people building the future of health — one story at a time. Clinicians creating impact beyond their clinical practice. Health tech founders changing how medicine works. The humans behind healthcare innovation.
          </p>
          <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed mb-10">
            Every episode is a story worth telling. And every guest leaves having shared expertise that might genuinely change someone's life.
          </p>
          
          <div className="flex flex-col gap-4">
            {[
              { title: 'The clinician beyond the clinic', desc: 'Doctors and health professionals who built something remarkable outside their clinical role' },
              { title: 'AI + the future of clinical practice', desc: 'What clinicians need to understand about AI — and how it changes the way they communicate' },
              { title: 'The authority journey', desc: 'How health professionals go from unknown to the go-to voice in their clinical niche' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[var(--color-gold)]/5 border-l-2 border-[var(--color-gold)]/40 p-5 rounded-r-sm">
                <p className="text-[14px] font-medium text-[var(--color-cream)] mb-1">{item.title}</p>
                <p className="text-[13px] text-[var(--color-cream)]/50 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="order-1 md:order-2">
        <FadeIn delay={0.2}>
          <div className="bg-[var(--color-bg-alt)] border border-white/5 rounded-sm p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
              <div className="absolute w-[180px] h-[180px] border border-[var(--color-gold)]" />
              <div className="absolute w-[280px] h-[280px] border border-[var(--color-gold)]" />
              <div className="absolute w-[380px] h-[380px] border border-[var(--color-gold)]" />
            </div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 text-[var(--color-gold)]">◉</div>
              <h3 className="font-serif text-3xl font-medium text-white mb-2">The Impact Show</h3>
              <p className="text-[13px] text-[var(--color-gold)] italic mb-10">Hosted by Shyam Pitla</p>
              
              <div className="flex justify-center gap-12 mb-10">
                <div>
                  <p className="font-serif text-3xl text-[var(--color-gold-light)] leading-none mb-1">New</p>
                  <p className="text-[10px] font-bold tracking-widest text-[var(--color-cream)]/40 uppercase">Episodes weekly</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[var(--color-gold-light)] leading-none mb-1">UK</p>
                  <p className="text-[10px] font-bold tracking-widest text-[var(--color-cream)]/40 uppercase">Based · Global</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/5">
                <p className="text-[13px] text-[var(--color-cream)]/50 mb-6">Are you a clinician creating impact beyond your practice?</p>
                <a 
                  href="https://theimpactshow.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg)] px-8 py-3 rounded-sm text-[13px] font-bold tracking-widest transition-all duration-300 inline-flex items-center gap-2"
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

// --- NeuraScaleX Section ---

const NeuraScaleX = () => (
  <section className="px-[6%] py-24 bg-gradient-to-br from-[var(--color-bg-alt)] to-[var(--color-bg)] border-t border-white/5" id="neurascalex">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 rounded-sm px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-[var(--color-gold)] mb-8">
              <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full animate-pulse" />
              AI Product — Pilots Open
            </div>
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-white leading-tight mb-6">
              NeuraScaleX
            </h2>
            <p className="font-serif text-2xl italic text-[var(--color-cream)]/60 leading-tight mb-6">
              Your clinical expertise.<br />Available 24/7.
            </p>
            <p className="text-[16px] text-[var(--color-cream)]/60 leading-relaxed mb-10">
              An AI Twin trained on your voice, your frameworks and your clinical knowledge — answering patient questions, qualifying leads and booking consultations while you focus on the work only you can do.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://neurascalex.com" className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg)] px-8 py-3.5 rounded-sm text-[13px] font-bold tracking-widest transition-all duration-300">
                Join the pilot
              </a>
              <a href="#connect" className="border border-[var(--color-gold)]/30 text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 px-8 py-3.5 rounded-sm text-[13px] font-medium tracking-widest transition-all duration-300">
                Investor enquiries
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-[var(--color-bg)]/80 border border-[var(--color-gold)]/15 rounded-sm p-10">
            <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--color-gold)] mb-8">How it works</p>
            <div className="flex flex-col gap-3">
              {[
                'We train the AI Twin on your videos, articles, frameworks and clinical expertise',
                'Your Twin learns your voice, your style and how you explain complex clinical concepts',
                'It goes live — answering questions, qualifying leads and directing people to your services 24/7',
                'You receive qualified leads. Your patients get immediate, accurate responses. In your voice.'
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-[var(--color-gold)]/5 border border-[var(--color-gold)]/10 rounded-sm">
                  <span className="font-serif text-xl text-[var(--color-gold)]/50 shrink-0 w-6">0{idx + 1}</span>
                  <p className="text-[13px] text-[var(--color-cream)]/70 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: '🏥', title: 'For individual clinicians', desc: 'Scale your expertise without scaling your hours. Your AI Twin handles the questions your audience asks every day — in your clinical voice.' },
          { icon: '⚡', title: 'For health tech startups', desc: 'Embed clinical intelligence into your product. White-label API access to NeuraScaleX for health platforms building AI-powered patient communication.' },
          { icon: '🏛', title: 'For NHS & healthcare groups', desc: 'Enterprise AI communication for healthcare organisations who need clinical accuracy and governance at scale. Pilot programmes now open.' },
          { icon: '📈', title: 'For investors', desc: 'NeuraScaleX is raising a pre-seed round. We are looking for angels and funds who understand AI in healthcare communication. Get in touch.' }
        ].map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="bg-[var(--color-bg)]/60 border border-[var(--color-gold)]/10 rounded-sm p-8 hover:border-[var(--color-gold)]/30 transition-all duration-300">
            <div className="text-2xl mb-4">{item.icon}</div>
            <p className="text-[15px] font-medium text-white mb-2">{item.title}</p>
            <p className="text-[13px] text-[var(--color-cream)]/50 leading-relaxed">{item.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- CTA Section ---

const CTA = () => (
  <section className="px-[6%] py-32 border-t border-white/5 relative overflow-hidden" id="connect">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gradient from-[var(--color-gold)]/10 to-transparent blur-[100px] pointer-events-none" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <FadeIn>
        <div className="flex justify-center mb-8">
          <SectionLabel className="mb-0">Work With Me</SectionLabel>
        </div>
        <h2 className="font-serif text-[clamp(38px,4.5vw,60px)] font-medium text-white leading-[1.1] mb-6">
          Let's build something that matters.
        </h2>
        <p className="text-[17px] text-[var(--color-cream)]/60 max-w-[560px] mx-auto mb-16 leading-relaxed">
          Whether you are a clinician building your platform, a health tech founder building your product, or an investor backing the future of clinical AI — I want to hear from you.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        {[
          { icon: '▲', title: 'Build your authority', desc: 'Clinicians who want to grow their platform and audience', href: 'https://hrdigitalmedia.com' },
          { icon: '⬡', title: 'NeuraScaleX pilot', desc: 'Clinicians and health orgs interested in AI Twins', href: 'https://neurascalex.com' },
          { icon: '◉', title: 'Appear on the show', desc: 'Clinicians creating impact beyond the clinic', href: 'https://theimpactshow.com' },
          { icon: '◈', title: 'Advisory & investment', desc: 'Health tech founders and investors in clinical AI', href: 'mailto:shyam@hrdigitalmedia.com' }
        ].map((opt, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <a href={opt.href} className="block bg-[var(--color-bg-alt)] border border-white/5 rounded-sm p-6 hover:border-[var(--color-gold)]/30 hover:bg-[var(--color-bg)] transition-all duration-300 h-full">
              <div className="text-xl mb-4 text-[var(--color-gold)]">{opt.icon}</div>
              <p className="text-[14px] font-medium text-white mb-1.5">{opt.title}</p>
              <p className="text-[12px] text-[var(--color-cream)]/50 leading-relaxed">{opt.desc}</p>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Footer ---

const Footer = () => (
  <footer className="px-[6%] py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="font-serif text-lg font-medium text-[var(--color-cream)]">
      Shyam Pitla<span className="text-[var(--color-gold)]">.</span>
    </div>

    <div className="flex gap-8">
      {[
        { name: 'LinkedIn', href: 'https://linkedin.com/in/shyampitla' },
        { name: 'HR Digital', href: 'https://hrdigitalmedia.com' },
        { name: 'Impact Show', href: 'https://theimpactshow.com' },
        { name: 'NeuraScaleX', href: 'https://neurascalex.com' }
      ].map(link => (
        <a 
          key={link.name} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[12px] text-[var(--color-cream)]/40 hover:text-[var(--color-gold)] tracking-widest transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>

    <div className="text-[12px] text-[var(--color-cream)]/20 tracking-widest uppercase">
      © {new Date().getFullYear()} Shyam Pitla
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-gold)] selection:text-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Work />
        <Proof />
        <Advisory />
        <ImpactShow />
        <NeuraScaleX />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
