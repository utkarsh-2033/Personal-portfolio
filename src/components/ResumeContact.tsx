"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";
import { Check, Copy, Download, Mail, Phone, ExternalLink } from "lucide-react";

export function ResumeContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="resume-card">
      {/* Minimalist Document Resume Preview Card (2 cols) */}
      <div className="lg:col-span-2 bg-surface-container-low p-6 sm:p-7 rounded-xl flex flex-col justify-between border border-surface-container-high/60 shadow-xl transition-all">
        <div className="flex flex-col gap-4">
          <div className="flex md:flex-row flex-col items-center justify-between pb-3 border-b border-surface-container-high/50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[20px]">
                description
              </span>
              <span className="font-code-sm text-code-sm text-on-surface font-semibold">
                utkarsh_kumar_gupta_resume_2026.pdf
              </span>
            </div>
            <span className="font-code-sm text-code-sm text-secondary font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span> PDF Document • Verified
            </span>
          </div>

          <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-surface-container-high/40 font-code-sm text-code-sm flex flex-col gap-2.5 text-on-surface-variant">
            <div className="text-primary font-semibold">// CURRICULUM VITAE SUMMARY</div>
            <div>
              • <strong className="text-on-surface">{PERSONAL_INFO.name}</strong> — Software Engineer (Backend Systems • Distributed Pipelines • Full Stack)
            </div>
            <div>
              • <strong className="text-on-surface">Education:</strong> {PERSONAL_INFO.education.degree} @ {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.period}) • CGPA: {PERSONAL_INFO.education.cgpa} | CBSE XII: {PERSONAL_INFO.education.classXII} | X: {PERSONAL_INFO.education.classX}
            </div>
            <div>
              • <strong className="text-on-surface">Core Tech:</strong> Java, Spring Boot , Spring AI, PostgreSQL, Redis, BullMQ, Next.js 15, TypeScript, Docker
            </div>
            <div>
              • <strong className="text-on-surface">Key Systems:</strong> ResumeMate (3,000+ DAU ATS engine &amp; MV3), RepoPilot (RAG Ingestion), ClipIQ (Distributed Queues)
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-5">
          <a
            className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-body-sm font-semibold hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_16px_rgba(0,240,255,0.3)]"
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            <span>Open &amp; Download Resume (PDF)</span>
            <ExternalLink size={13} />
          </a>

          <a
            className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-body-sm font-medium transition-colors flex items-center gap-2"
            href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Engineer%20Opportunity`}
          >
            <Mail size={16} />
            <span>Request Customized CV</span>
          </a>
        </div>
      </div>

      {/* Direct Contact Card (1 col) */}
      <div className="bg-surface-container-low p-6 sm:p-7 rounded-xl flex flex-col justify-between border border-surface-container-high/60 shadow-xl transition-all">
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">
            Let&apos;s build something useful.
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
            I am actively considering Software Engineering internships and full-time opportunities starting 2026/2027. If you are building backend infrastructure, scalable platforms, or applied AI systems, let&apos;s connect.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-4">
          {/* Phone */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-lowest border border-surface-container-high/50 font-code-sm text-code-sm text-on-surface">
            <Phone size={14} className="text-secondary shrink-0" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>

          {/* Email + Copy button */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest border border-surface-container-high/50 font-code-sm text-code-sm">
            <div className="flex items-center gap-2 truncate mr-2">
              <Mail size={14} className="text-primary-container shrink-0" />
              <span className="text-on-surface truncate">{PERSONAL_INFO.email}</span>
            </div>
            <button
              className={`px-2.5 py-1 rounded font-code-sm text-code-sm shrink-0 transition-colors cursor-pointer ${copied
                ? "bg-secondary text-on-secondary font-semibold"
                : "bg-surface-container hover:bg-surface-container-high text-primary"
                }`}
              onClick={handleCopyEmail}
            >
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>

          <a
            className="w-full py-2.5 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-body-sm font-semibold text-center transition-colors border border-surface-container-high flex items-center justify-center gap-1.5"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            <span>Send Direct Email</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
