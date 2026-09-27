"use client";

import React from "react";
import { CORE_DISCIPLINES } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";

export function CoreDisciplines() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
          CORE COMPETENCIES
        </span>
        <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">What I Build</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {CORE_DISCIPLINES.map((pillar) => (
          <div
            key={pillar.number}
            className="bg-surface-container-low rounded-xl p-5 flex flex-col justify-between border border-surface-container-high/60 hover:border-primary-container/40 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span
                  className={`w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center ${
                    pillar.color === "emerald" ? "text-secondary" : "text-primary-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
                </span>
                <span className="font-code-sm text-code-sm text-outline">{pillar.number}</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>

            <div
              className={`pt-3 mt-4 border-t border-surface-container-high/40 flex flex-wrap gap-1.5 font-code-sm text-code-sm ${
                pillar.color === "emerald" ? "text-secondary" : "text-primary"
              }`}
            >
              {pillar.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container"
                >
                  <TechIcon name={skill} size={13} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
