"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/40 py-8 mt-12 transition-colors">
      <div className="w-full max-w-[1500px] mx-auto px-margin-mobile sm:px-gutter lg:px-gutter-lg flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-code-md text-code-md font-semibold text-on-surface">
            UTKARSH<span className="text-primary-container">.G</span>
          </span>
          <span className="text-outline-variant">|</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Software Engineer
          </span>
        </div>

        {/* Center Tagline */}
        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">
          © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
        </div>

        {/* Verified Social Handles */}
        <div className="flex items-center gap-4 font-code-sm text-code-sm">
          <a
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors"
            href={PERSONAL_INFO.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TechIcon name="github" size={14} />
            <span>GitHub</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors"
            href={PERSONAL_INFO.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TechIcon name="linkedin" size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors"
            href={PERSONAL_INFO.leetcode}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TechIcon name="leetcode" size={14} />
            <span>LeetCode</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
