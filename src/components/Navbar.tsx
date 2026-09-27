"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("featured-projects");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["featured-projects", "ask-utkarsh", "evolution", "stack", "case-studies", "principles"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAskAIClick = () => {
    const el = document.getElementById("ask-utkarsh");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("repl-input");
      if (input) input.focus();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-surface-container-high/40 transition-colors">
      <div className="h-14 w-full max-w-[1500px] mx-auto px-margin-mobile sm:px-gutter lg:px-gutter-lg flex items-center justify-between gap-space-lg">
        
        {/* Brand */}
        <div className="flex items-center gap-space-md shrink-0">
          <a
            className="font-code-md text-code-md font-semibold tracking-tight text-on-surface hover:text-primary transition-colors"
            href="#"
          >
            UTKARSH<span className="text-primary-container">.G</span>
          </a>
          <span className="text-outline-variant hidden sm:inline">/</span>
          <span className="font-code-sm text-code-sm text-on-surface-variant hidden sm:inline">
            Software Engineer
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-lowest p-[3px] rounded-lg border border-surface-container-high/40">
          <a
            className={`px-3 py-1 font-body-sm text-body-sm rounded transition-colors ${
              activeSection === "featured-projects"
                ? "text-primary bg-surface-container-high font-medium"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href="#featured-projects"
          >
            Featured Work
          </a>
          <a
            className={`px-3 py-1 font-body-sm text-body-sm rounded transition-colors ${
              activeSection === "ask-utkarsh"
                ? "text-primary bg-surface-container-high font-medium"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href="#ask-utkarsh"
          >
            Ask Utkarsh AI
          </a>
          <a
            className={`px-3 py-1 font-body-sm text-body-sm rounded transition-colors ${
              activeSection === "evolution"
                ? "text-primary bg-surface-container-high font-medium"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href="#evolution"
          >
            Journey
          </a>
          <a
            className={`px-3 py-1 font-body-sm text-body-sm rounded transition-colors ${
              activeSection === "stack"
                ? "text-primary bg-surface-container-high font-medium"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href="#stack"
          >
            Stack
          </a>
          <a
            className={`px-3 py-1 font-body-sm text-body-sm rounded transition-colors ${
              activeSection === "case-studies"
                ? "text-primary bg-surface-container-high font-medium"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href="#case-studies"
          >
            Case Studies
          </a>
          <a
            className={`px-3 py-1 font-body-sm text-body-sm rounded transition-colors ${
              activeSection === "principles"
                ? "text-primary bg-surface-container-high font-medium"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href="#principles"
          >
            Philosophy
          </a>
        </nav>

        {/* Right Actions & Utilities */}
        <div className="flex items-center gap-space-sm shrink-0">
          
          {/* Ask AI Command Button */}
          <button
            onClick={handleAskAIClick}
            className="group flex items-center gap-space-sm px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-primary-container/40 hover:border-primary-container shadow-[0_0_12px_-4px_rgba(0,240,255,0.25)] hover:shadow-[0_0_16px_rgba(0,240,255,0.35)] transition-all cursor-pointer"
            title="Ask AI (⌘K)"
          >
            <span className="material-symbols-outlined text-[15px] text-primary-container">psychology</span>
            <span className="font-code-sm text-code-sm text-primary group-hover:text-primary-container font-medium">
              Ask AI
            </span>
            <span className="hidden sm:inline px-1 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm border border-surface-container-high">
              ⌘K
            </span>
          </button>

          <div className="h-4 w-[1px] bg-surface-container-high hidden sm:block"></div>

          {/* Social Profiles */}
          <a
            className="px-2 py-1 rounded hover:bg-surface-container font-code-sm text-code-sm text-on-surface-variant hover:text-primary transition-colors hidden sm:inline-block"
            href={PERSONAL_INFO.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="px-2 py-1 rounded hover:bg-surface-container font-code-sm text-code-sm text-on-surface-variant hover:text-primary transition-colors hidden sm:inline-block"
            href={PERSONAL_INFO.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>

          {/* Resume CTA */}
          <a
            className="px-2.5 py-1 rounded bg-primary-container/10 border border-primary-container/30 text-primary-container hover:bg-primary-container hover:text-on-primary font-code-sm text-code-sm font-medium transition-all inline-flex items-center gap-1"
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high/60 text-on-surface-variant hover:text-on-surface transition-all cursor-pointer ml-1"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={15} className="text-[#f7df1e]" />
            ) : (
              <Moon size={15} className="text-primary-container" />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg lg:hidden bg-surface-container-lowest border border-surface-container-high text-on-surface-variant"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-high px-6 py-4 flex flex-col gap-3">
          <a
            className="font-body-sm text-body-sm text-on-surface py-1 hover:text-primary transition-colors"
            href="#featured-projects"
            onClick={() => setMobileMenuOpen(false)}
          >
            Featured Work
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface py-1 hover:text-primary transition-colors"
            href="#ask-utkarsh"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ask Utkarsh AI
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface py-1 hover:text-primary transition-colors"
            href="#evolution"
            onClick={() => setMobileMenuOpen(false)}
          >
            Journey
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface py-1 hover:text-primary transition-colors"
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
          >
            Technical Stack
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface py-1 hover:text-primary transition-colors"
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Studies
          </a>
          <a
            className="font-body-sm text-body-sm text-on-surface py-1 hover:text-primary transition-colors"
            href="#principles"
            onClick={() => setMobileMenuOpen(false)}
          >
            Philosophy
          </a>
          <div className="pt-2 border-t border-surface-container-high/40 flex items-center justify-between font-code-sm text-code-sm">
            <a className="text-on-surface-variant hover:text-primary" href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="text-on-surface-variant hover:text-primary" href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="text-on-surface-variant hover:text-primary" href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
