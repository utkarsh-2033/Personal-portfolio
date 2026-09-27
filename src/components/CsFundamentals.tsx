"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";
import { ExternalLink } from "lucide-react";

export function CsFundamentals() {
  const { leetcodeStats } = PERSONAL_INFO;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Fundamentals (2 cols) */}
      <div className="lg:col-span-2 bg-surface-container-low p-6 sm:p-7 rounded-xl flex flex-col justify-between border border-surface-container-high/60 shadow-lg transition-all">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
              ACADEMIC FOUNDATION
            </span>
            <span className="font-code-sm text-code-sm text-secondary font-medium">
              CORE DISCIPLINES
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">
            Computer Science Fundamentals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col gap-1">
              <span className="font-code-sm text-code-sm text-primary font-semibold">
                Data Structures &amp; Algorithms
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Trees, Graphs, Dynamic Programming, Hash Maps, Heaps, Disjoint Set, Sliding Window, Asymptotics.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col gap-1">
              <span className="font-code-sm text-code-sm text-primary font-semibold">
                Object-Oriented Design &amp; SOLID
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Polymorphism, Dependency Inversion, Factory &amp; Strategy Patterns, Clean Layered Boundaries.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col gap-1">
              <span className="font-code-sm text-code-sm text-primary font-semibold">
                Database Management Systems
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                ACID properties, Normalization (3NF/BCNF), B-Tree Indexing, Query Optimization, Locks &amp; Isolation.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-3.5 rounded-lg border border-surface-container-high/40 flex flex-col gap-1">
              <span className="font-code-sm text-code-sm text-primary font-semibold">
                Operating Systems &amp; Concurrency
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Processes vs Threads, Mutexes, Semaphores, Deadlocks, Context Switching, Paging, Virtual Memory.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-surface-container-high/40 flex items-center justify-between font-code-sm text-code-sm text-outline">
          <span>{PERSONAL_INFO.education.institution}</span>
          <span className="text-primary-container font-medium">Graduation: 2027</span>
        </div>
      </div>

      {/* LeetCode & Problem Solving (1 col) */}
      <div className="bg-surface-container-low p-6 sm:p-7 rounded-xl flex flex-col justify-between border border-surface-container-high/60 shadow-lg transition-all">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
              ALGORITHMIC MASTERY
            </span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
          </div>

          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
              Problem Solving
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Consistent practice in data structures &amp; algorithmic patterns.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high/40 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Total Solved</span>
              <span className="font-headline-md text-headline-md text-primary font-bold">
                {leetcodeStats.totalSolved} Questions
              </span>
            </div>

            {/* Visual Multi-Segment Bar */}
            <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden flex">
              <div
                className="h-full bg-secondary"
                style={{ width: `${leetcodeStats.easyPercent}%` }}
                title={`Easy: ${leetcodeStats.easy}`}
              ></div>
              <div
                className="h-full bg-primary-container"
                style={{ width: `${leetcodeStats.mediumPercent}%` }}
                title={`Medium: ${leetcodeStats.medium}`}
              ></div>
              <div
                className="h-full bg-error"
                style={{ width: `${leetcodeStats.hardPercent}%` }}
                title={`Hard: ${leetcodeStats.hard}`}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-2 font-code-sm text-code-sm pt-1">
              <div className="flex flex-col">
                <span className="text-secondary font-medium">Easy</span>
                <span className="text-on-surface font-semibold">{leetcodeStats.easy}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary-container font-medium">Medium</span>
                <span className="text-on-surface font-semibold">{leetcodeStats.medium}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-error font-medium">Hard</span>
                <span className="text-on-surface font-semibold">{leetcodeStats.hard}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-surface-container-high/40">
          <a
            className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-code-sm text-code-sm transition-colors flex items-center justify-between"
            href={PERSONAL_INFO.leetcode}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <TechIcon name="leetcode" size={15} />
              <span>View LeetCode Profile</span>
            </div>
            <ExternalLink size={14} className="text-outline" />
          </a>

          <a
            className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-code-sm text-code-sm transition-colors flex items-center justify-between"
            href={PERSONAL_INFO.gfg}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <TechIcon name="gfg" size={15} />
              <span>View GFG Profile</span>
            </div>
            <ExternalLink size={14} className="text-outline" />
          </a>
        </div>
      </div>
    </section>
  );
}
