import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Utkarsh Kumar Gupta — Software Engineer Portfolio",
  description:
    "Software Engineer crafting resilient distributed backends, high-throughput pipelines, and grounded AI applications. Java, Spring Boot 3, Spring AI, Redis, BullMQ, Next.js 15.",
  keywords: [
    "Utkarsh Kumar Gupta",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Spring Boot",
    "Java",
    "Spring AI",
    "RAG",
    "RepoPilot",
    "ClipIQ",
    "ResumeMate",
    "Next.js",
  ],
  authors: [{ name: "Utkarsh Kumar Gupta", url: "https://github.com/utkarsh-2033" }],
  openGraph: {
    title: "Utkarsh Kumar Gupta — Software Engineer Portfolio",
    description:
      "Software Engineer crafting resilient distributed backends, high-throughput pipelines, and grounded AI applications.",
    type: "website",
    url: "https://github.com/utkarsh-2033",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=JetBrains+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link rel="icon" href="/avatar-1.png" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
