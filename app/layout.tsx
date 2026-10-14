import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cursor } from "@/components/cursor";
import { Header } from "@/components/header";
import { profile } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const siteUrl = getSiteUrl();
const title = "Kelvin Ajayi — Software engineer";
const description =
  "Software engineer in Nigeria, open to full-time mobile and fullstack roles and an AI engineering internship.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Kelvin Ajayi",
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  keywords: [
    "Kelvin Ajayi",
    "software engineer",
    "mobile engineer",
    "fullstack engineer",
    "AI engineering internship",
    "React Native",
    "Nigeria",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "vsCiv40e66gbbcUBiaWPnE0MrqbyPKIzj98E0uf3QLA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kelvin Ajayi",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@KelvinAjayi8",
  },
};

export const viewport: Viewport = {
  themeColor: "#e6dfd2",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/kelvin.jpg`,
    jobTitle: "Software Engineer",
    description,
    email: profile.email,
    telephone: profile.phone,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ladoke Akintola University of Technology",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    sameAs: [profile.links.linkedin, profile.links.github, profile.links.x],
  };

  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Cursor />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
