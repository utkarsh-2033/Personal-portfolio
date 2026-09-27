"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AskUtkarsh } from "@/components/AskUtkarsh";
import { CoreDisciplines } from "@/components/CoreDisciplines";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { EngineeringEvolution } from "@/components/EngineeringEvolution";
import { EngineeringMatrix } from "@/components/EngineeringMatrix";
import { EngineeringPrinciples } from "@/components/EngineeringPrinciples";
import { TechStack } from "@/components/TechStack";
import { CaseStudies } from "@/components/CaseStudies";
import { CsFundamentals } from "@/components/CsFundamentals";
import { ResumeContact } from "@/components/ResumeContact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased bg-grid-dot-matrix selection:bg-primary-container selection:text-on-primary flex flex-col">
      <Navbar />

      <main className="w-full pt-14 flex-1">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-[1500px] mx-auto px-margin-mobile sm:px-gutter lg:px-gutter-lg py-space-xl flex flex-col gap-16">
            {/* 1. Authoritative Editorial Hero */}
            <Hero />

            {/* 2. Signature Feature: Ask Utkarsh AI */}
            <AskUtkarsh />

            {/* 3. Four Core System Disciplines */}
            <CoreDisciplines />

            {/* 4. Featured Projects */}
            <FeaturedProjects />

            {/* 5. Authentic Engineering Evolution Timeline */}
            <EngineeringEvolution />

            {/* 6. Comparative Engineering Matrix */}
            {/* <EngineeringMatrix /> */}

            {/* 8. Technical Stack Matrix */}
            <TechStack />
            {/* 10. Computer Science Fundamentals & LeetCode */}
            <CsFundamentals />
            {/* 7. How I Think (Principles) */}
            <EngineeringPrinciples />


            {/* 9. Case Studies (Deep Architectural Audits) */}
            <CaseStudies />


            {/* 11. Verified Resume Card & Direct Contact */}
            <ResumeContact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
