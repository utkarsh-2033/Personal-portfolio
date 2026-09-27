"use client";

import React from "react";
import { ENGINEERING_JOURNEY } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";

export function EngineeringEvolution() {
  return (
    <section className="flex flex-col gap-8" id="evolution">
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
          PROGRESSION &amp; IMPACT
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-semibold text-on-surface">
          Engineering Journey
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          The chronological evolution from client-side runtime tuning to distributed backend architectures and applied AI systems.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 flex flex-col gap-8 border-l-2 border-surface-container-high ml-2">
        {ENGINEERING_JOURNEY.map((entry) => (
          <div key={entry.id} className="relative flex flex-col gap-2">
            
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full transition-all ${
                entry.isCurrent
                  ? "bg-primary-container shadow-[0_0_12px_#00f0ff]"
                  : entry.id === "resumemate"
                  ? "bg-surface-container-highest border-2 border-primary-container"
                  : "bg-surface-container-highest"
              }`}
            ></div>

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  {entry.company}
                </h3>
                <span
                  className={`px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase ${
                    entry.isCurrent
                      ? "bg-primary-container/15 text-primary-container border border-primary-container/30"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {entry.role}
                </span>
              </div>
              <span
                className={`font-code-sm text-code-sm ${
                  entry.isCurrent ? "text-primary-container font-medium" : "text-on-surface-variant"
                }`}
              >
                {entry.period}
              </span>
            </div>

            {/* Tech stack line with developer icons */}
            <div className="flex flex-wrap items-center gap-2 py-1">
              {entry.stackText.split(" • ").map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary"
                >
                  <TechIcon name={tech} size={13} />
                  <span>{tech}</span>
                  {tIdx < entry.stackText.split(" • ").length - 1 && (
                    <span className="text-outline-variant ml-1">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Content card */}
            <div className="bg-surface-container-low p-5 rounded-xl border border-surface-container-high/60 flex flex-col gap-3 shadow-sm">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {entry.description}
              </p>

              {entry.highlights && entry.highlights.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 font-body-sm text-body-sm">
                  {entry.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="bg-surface-container p-3 rounded-lg flex flex-col gap-1"
                    >
                      <span className={`font-code-sm text-code-sm font-semibold ${h.color}`}>
                        {h.title}
                      </span>
                      <p className="text-on-surface-variant leading-relaxed">{h.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
