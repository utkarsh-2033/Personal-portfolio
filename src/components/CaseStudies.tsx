"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/portfolioData";
import { ChevronDown } from "lucide-react";

export function CaseStudies() {
  // Default first case study open like in Stitch
  const [openId, setOpenId] = useState<string | null>("cs-repopilot");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col gap-6" id="case-studies">
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
          DEEP ARCHITECTURAL AUDITS
        </span>
        <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">Case Studies</h2>
      </div>

      <div className="flex flex-col gap-3">
        {CASE_STUDIES.map((cs) => {
          const isOpen = openId === cs.id;

          return (
            <div
              key={cs.id}
              className="bg-surface-container-low rounded-xl overflow-hidden border border-surface-container-high/60 shadow-lg transition-all"
            >
              <button
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-surface-container/50 transition-colors cursor-pointer"
                onClick={() => toggleAccordion(cs.id)}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-8 h-8 rounded-lg font-code-sm text-code-sm flex items-center justify-center font-bold ${
                      cs.color === "emerald"
                        ? "bg-secondary/15 text-secondary"
                        : "bg-primary-container/15 text-primary-container"
                    }`}
                  >
                    {cs.number}
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {cs.title}
                    </h3>
                    <span className="font-code-sm text-code-sm text-outline">{cs.stack}</span>
                  </div>
                </div>

                <div
                  className={`text-outline transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-primary-container" : ""
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              {isOpen && (
                <div className="p-5 sm:p-6 pt-0 border-t border-surface-container-high/40 flex flex-col gap-4 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-4">
                    
                    {/* Problem */}
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col">
                      <span className="font-label-sm text-label-sm text-error uppercase font-semibold">
                        Problem
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>

                    {/* Constraint */}
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                        Constraint
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                        {cs.constraint}
                      </p>
                    </div>

                    {/* Decision */}
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary-container uppercase font-semibold">
                        Decision
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                        {cs.decision}
                      </p>
                    </div>

                    {/* Architecture */}
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        Architecture
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                        {cs.architecture}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                        Result
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                        {cs.result}
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
