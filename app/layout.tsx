import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shyam Pitla — Helping Clinicians Become the Voice of Their Field",
  description:
    "Shyam Pitla builds platforms, media and AI that turn clinical expertise into public authority. Founder of HR Digital Media, The Impact Show and NeuraScaleX.",
  keywords: [
    "Shyam Pitla",
    "HR Digital Media",
    "The Impact Show",
    "NeuraScaleX",
    "clinician authority",
    "clinical personal brand",
    "health tech",
    "medical marketing",
    "AI in healthcare",
  ],
  authors: [{ name: "Shyam Pitla" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.shyampitla.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.shyampitla.com/",
    siteName: "Shyam Pitla",
    title: "Shyam Pitla — Helping Clinicians Become the Voice of Their Field",
    description:
      "Shyam Pitla builds platforms, media and AI that turn clinical expertise into public authority. Founder of HR Digital Media, The Impact Show and NeuraScaleX.",
    images: [
      {
        url: "https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png",
        alt: "Shyam Pitla — Founder and Strategic Advisor",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    site: "@shyamkpitla",
    creator: "@shyamkpitla",
    title: "Shyam Pitla — Helping Clinicians Become the Voice of Their Field",
    description:
      "Builds platforms, media and AI that turn clinical expertise into public authority. Founder of HR Digital Media, The Impact Show and NeuraScaleX.",
    images: [
      "https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png",
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shyam Pitla",
  url: "https://www.shyampitla.com",
  image:
    "https://theimpactshow.com/wp-content/uploads/2024/04/Shyam-Kumar2.png",
  jobTitle: "Founder · Strategic Advisor · Operator",
  description:
    "Shyam Pitla builds platforms, media and AI that turn clinical expertise into public authority — helping health professionals create impact far beyond their clinic.",
  email: "shyam@hrdigitalmedia.com",
  knowsAbout: [
    "Clinician authority building",
    "Healthcare personal branding",
    "Health tech startup advisory",
    "AI product development",
    "Clinical digital strategy",
    "YouTube growth for clinicians",
  ],
  founder: [
    {
      "@type": "Organization",
      name: "HR Digital Media",
      url: "https://hrdigitalmedia.com",
      description:
        "The growth agency for health professionals — brand strategy, YouTube, content, lead generation.",
    },
    {
      "@type": "Organization",
      name: "The Impact Show",
      url: "https://theimpactshow.com",
      description:
        "Podcast for clinicians creating impact beyond the clinic. Hosted by Shyam Pitla.",
    },
    {
      "@type": "Organization",
      name: "NeuraScaleX",
      url: "https://neurascalex.com",
      description:
        "AI Twins for health professionals — trained on your clinical voice, available to patients 24/7.",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [
    "https://linkedin.com/in/shyampitla",
    "https://x.com/shyamkpitla",
    "https://hrdigitalmedia.com",
    "https://theimpactshow.com",
    "https://neurascalex.com",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shyam Pitla — Helping Clinicians Become the Voice of Their Field",
  url: "https://www.shyampitla.com/",
  description:
    "Shyam Pitla builds platforms, media and AI that turn clinical expertise into public authority.",
  inLanguage: "en-GB",
  about: {
    "@type": "Person",
    name: "Shyam Pitla",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Shyam Pitla",
    url: "https://www.shyampitla.com",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shyam Pitla",
  url: "https://www.shyampitla.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
