"use client";

import React from "react";
import { PRINCIPLES } from "@/data/portfolioData";

export function EngineeringPrinciples() {
  return (
    <section className="flex flex-col gap-6" id="principles">
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
          SYSTEM BELIEFS
        </span>
        <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">How I Think</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRINCIPLES.map((principle, idx) => (
          <div
            key={idx}
            className={`bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border-t-2 ${principle.borderColor} border border-surface-container-high/50 shadow-md hover:shadow-lg transition-all`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className={`font-code-sm text-code-sm font-semibold ${principle.textColor}`}>
                  {principle.number}
                </span>
                <span className="material-symbols-outlined text-outline text-[18px]">
                  {principle.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                {principle.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {principle.description}
              </p>
            </div>
            <span className="font-code-sm text-code-sm text-secondary mt-3">
              {principle.appliedIn}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
