"use client";

import React from "react";
import { MATRIX_ROWS } from "@/data/portfolioData";

export function EngineeringMatrix() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
          ARCHITECTURAL RIGOR
        </span>
        <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">
          Different Problems. Same Engineering Mindset.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          How disciplined engineering patterns translate across varied operational domains.
        </p>
      </div>

      <div className="w-full overflow-x-auto bg-surface-container-low rounded-xl border border-surface-container-high/60 shadow-xl">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="bg-surface-container-lowest text-outline font-label-md text-label-md uppercase tracking-wider border-b border-surface-container-high/50">
              <th className="p-4">Engineering Vector</th>
              <th className="p-4 text-primary font-semibold">RepoPilot (Backend / AI)</th>
              <th className="p-4 text-secondary font-semibold">ClipIQ (Distributed Video)</th>
              <th className="p-4 text-primary-container font-semibold">ResumeMate (Browser Systems)</th>
            </tr>
          </thead>
          <tbody className="font-body-sm text-body-sm divide-y divide-surface-container-high/40 text-on-surface-variant">
            {MATRIX_ROWS.map((row, idx) => (
              <tr key={idx} className="hover:bg-surface-container/50 transition-colors">
                <td className="p-4 font-code-sm text-code-sm text-on-surface font-medium">
                  {row.vector}
                </td>
                <td className="p-4">{row.repopilot}</td>
                <td className="p-4">{row.clipiq}</td>
                <td className="p-4">{row.resumemate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
