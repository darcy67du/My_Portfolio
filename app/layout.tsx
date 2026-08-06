import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darcydushime.dev"),
  title: "Darcy Dushime — Full Stack Software Engineer",
  description:
    "Darcy Dushime is a Full Stack Software Engineer building scalable web applications, AI-powered solutions, and modern digital experiences.",
  openGraph: {
    title: "Darcy Dushime — Full Stack Software Engineer",
    description:
      "Building scalable web applications, AI-powered solutions, and modern digital experiences.",
    type: "website",
    images: ["https://avatars.githubusercontent.com/u/215747797?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darcy Dushime — Full Stack Software Engineer",
    description:
      "Building scalable web applications, AI-powered solutions, and modern digital experiences.",
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/215747797?v=4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[1000] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-br-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
