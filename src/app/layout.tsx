import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { profile } from "@/data/content";
import { SideSocials } from "@/components/SideSocials";
import { SideEmail } from "@/components/SideEmail";
import { PageLoader } from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = `${profile.name} — ${profile.title}`;
const description = `Portfolio of ${profile.name}, a ${profile.title} building full-stack products across mobile, web, and backend.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Abdul Hamid AL Bayya",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Native",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint to avoid a flash of the wrong theme. Dark is the default unless the user explicitly chose light. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme')==='light'?'light':'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <PageLoader />
        <SideSocials />
        <SideEmail />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
