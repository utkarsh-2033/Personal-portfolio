"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";

export function TechStack() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleFilter = (techName: string) => {
    if (selectedTech === techName) {
      setSelectedTech(null);
    } else {
      setSelectedTech(techName);
    }
  };

  const handleReset = () => {
    setSelectedTech(null);
  };

  return (
    <section className="flex flex-col gap-6" id="stack">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
            ENGINEERING ARSENAL
          </span>
          <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">Technical Stack</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            The languages, frameworks, and datastores I employ to deliver production services.
          </p>
        </div>
        <button
          className="px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-surface-container-high hover:border-primary-container text-primary font-code-sm text-code-sm transition-colors cursor-pointer shrink-0"
          onClick={handleReset}
        >
          Reset Highlight
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {TECH_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="bg-surface-container-low p-5 rounded-xl border border-surface-container-high/60 flex flex-col gap-3 shadow-sm hover:border-surface-container-high transition-all"
          >
            <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
              {cat.category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((tech, tIdx) => {
                const isSelected = selectedTech === tech.name;
                const isDimmed = selectedTech !== null && !isSelected;

                return (
                  <button
                    key={tIdx}
                    onClick={() => handleFilter(tech.name)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded font-code-sm text-code-sm transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary-container/20 text-primary-container ring-1 ring-primary-container font-semibold"
                        : isDimmed
                        ? "bg-surface-container text-on-surface opacity-35"
                        : "bg-surface-container text-on-surface hover:text-primary hover:bg-surface-container-high"
                    }`}
                  >
                    <TechIcon name={tech.name} size={15} />
                    <span>{tech.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
