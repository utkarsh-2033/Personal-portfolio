"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-surface-container-low rounded-xl p-6 sm:p-10 border border-surface-container-high/60 overflow-hidden shadow-2xl transition-colors">
      {/* Ambient background glows */}
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/10 dark:bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-1/3 -bottom-20 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

        {/* Left Column: Core Identity & Narrative */}
        <div className="flex flex-col gap-5 max-w-4xl">

          {/* Authentic Status Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest border border-surface-container-high text-on-surface-variant font-code-sm text-code-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>
                Currently building:{" "}
                <strong className="text-on-surface font-medium">VidSage — A Cross-Video RAG-Based Knowledge Assistant</strong>
              </span>
            </div>
          </div>

          {/* Name & Headline */}
          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-headline-md text-headline-md text-primary font-medium tracking-normal mt-2">
              {PERSONAL_INFO.headline}
            </p>
          </div>

          {/* Engineering Evolution Trajectory Banner */}
          <div className="p-3.5 rounded-lg bg-surface-container-lowest border border-surface-container-high/50 flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
              ENGINEERING TRAJECTORY
            </span>
            <div className="flex flex-wrap items-center gap-2 font-code-sm text-code-sm text-on-surface">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                <TechIcon name="react" size={13} />
                <span>Frontend (React, Next.js)</span>
              </span>
              <span className="text-primary-container font-bold">→</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                <TechIcon name="electron" size={13} />
                <span>Full-Stack &amp; Browser Systems (MV3, Electron)</span>
              </span>
              <span className="text-primary-container font-bold">→</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-primary font-medium">
                <TechIcon name="spring boot" size={13} />
                <span>Distributed Backends (Spring Boot, Redis, BullMQ)</span>
              </span>
              <span className="text-primary-container font-bold">→</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary-container/15 text-primary-container font-medium border border-primary-container/30">
                <TechIcon name="spring ai" size={13} />
                <span>AI &amp; RAG Systems</span>
              </span>
            </div>
          </div>

          {/* Editorial Philosophy Subtext */}
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {PERSONAL_INFO.philosophySubtext}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-body-sm font-semibold hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_-4px_rgba(0,240,255,0.35)]"
              href="#featured-projects"
            >
              <span>Explore Architecture &amp; Code</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>

            <button
              className="px-5 py-2.5 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-body-sm font-medium transition-all flex items-center gap-2 border border-surface-container-high cursor-pointer"
              onClick={() => {
                scrollToSection("ask-utkarsh");
                const input = document.getElementById("repl-input");
                if (input) input.focus();
              }}
            >
              <span className="material-symbols-outlined text-[16px] text-primary-container">chat_bubble</span>
              <span>Ask Utkarsh AI</span>
            </button>

            <a
              className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-body-sm transition-all flex items-center gap-1.5"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>1-Page Resume (PDF)</span>
              <span className="material-symbols-outlined text-[16px]">description</span>
            </a>
          </div>
        </div>

        {/* Right Column: Verified Academic Credentials & Verified Handles */}
        <div className="flex flex-col gap-3 lg:w-80 shrink-0">

          {/* Academic Background Card */}
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high/60 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container-high/40">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                ACADEMIC BACKGROUND
              </span>
              <span className="text-secondary font-code-sm text-code-sm flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[14px]">verified</span> VERIFIED
              </span>
            </div>

            <div className="flex flex-col gap-0.5">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {PERSONAL_INFO.education.institution}
              </p>
              <div className="font-code-sm text-code-sm text-primary-container mt-1 font-medium">
                {PERSONAL_INFO.education.period} • CGPA: {PERSONAL_INFO.education.cgpa}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-surface-container-high/40 font-code-sm text-code-sm">
              <div className="flex flex-col bg-surface-container-low p-2 rounded">
                <span className="text-on-surface-variant text-[11px]">Class XII (CBSE)</span>
                <span className="text-on-surface font-semibold">{PERSONAL_INFO.education.classXII}</span>
              </div>
              <div className="flex flex-col bg-surface-container-low p-2 rounded">
                <span className="text-on-surface-variant text-[11px]">Class X (ICSE)</span>
                <span className="text-on-surface font-semibold">{PERSONAL_INFO.education.classX}</span>
              </div>
            </div>
          </div>

          {/* Quick Verified Profiles */}
          <div className="bg-surface-container-lowest p-3 rounded-xl border border-surface-container-high/50 flex flex-col items-center justify-between">
            <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">PROFILES</span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-code-sm text-code-sm transition-colors"
                href={PERSONAL_INFO.github}
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
              >
                <TechIcon name="github" size={13} />
                <span>gh/utkarsh</span>
              </a>
              <a
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-code-sm text-code-sm transition-colors"
                href={PERSONAL_INFO.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
              >
                <TechIcon name="linkedin" size={13} />
                <span>in/utkarsh</span>
              </a>
              <a
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-code-sm text-code-sm transition-colors"
                href={PERSONAL_INFO.leetcode}
                rel="noopener noreferrer"
                target="_blank"
                title="LeetCode"
              >
                <TechIcon name="leetcode" size={13} />
                <span>lc/utkarsh</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
