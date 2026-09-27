"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";
import { Copy, Check, ExternalLink, ChevronDown, ChevronUp, Layers, Sparkles } from "lucide-react";

export function FeaturedProjects() {
  const [copiedCode, setCopiedCode] = useState(false);
  // VidSage and projects below ClipIQ are collapsed initially per requirement
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    repopilot: true,
    clipiq: true,
    vidsage: false,
    "stock-research-assistant": false,
    "answersmap-ai": false,
    "ai-voice-assistant": false,
  });

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
  };

  const renderProjectCard = (project: Project) => {
    const isExpanded = !!expandedProjects[project.id];
    const isVidSage = project.id === "vidsage";
    const isRepoPilot = project.id === "repopilot";
    const isClipIQ = project.id === "clipiq";

    return (
      <div
        key={project.id}
        id={project.id}
        className={`bg-surface-container-low rounded-xl p-6 sm:p-8 border transition-all shadow-xl ${isVidSage
          ? "border-primary-container/60 shadow-[0_0_24px_-8px_rgba(0,240,255,0.2)]"
          : "border-surface-container-high/70"
          } flex flex-col gap-6`}
      >
        {/* Top Metadata Header - Always Visible */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-surface-container-high/50">
          <div className="flex flex-col gap-2 max-w-3xl">
            {/* Badges & Highlights */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold uppercase border ${isVidSage
                  ? "bg-primary-container/20 text-primary-container border-primary-container/40 animate-pulse"
                  : project.badge.includes("DISTRIBUTED")
                    ? "bg-secondary/15 text-secondary border-secondary/30"
                    : "bg-primary-container/15 text-primary-container border-primary-container/30"
                  }`}
              >
                {project.badge}
              </span>
              <span className="font-code-sm text-code-sm text-secondary font-medium">
                {project.highlight}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-surface">
              {project.name}
            </h3>
            <p className="font-headline-sm text-headline-sm text-primary font-medium">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-1">
              {project.description}
            </p>
          </div>

          {/* Links & CTA Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-1">
            {project.liveUrl && (
              <a
                className="px-3.5 py-2 rounded-lg bg-primary-container/15 hover:bg-primary-container text-primary-container hover:text-on-primary font-code-sm text-code-sm transition-all border border-primary-container/40 flex items-center gap-1.5 shadow-sm font-medium"
                href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Sparkles size={14} />
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}

            <a
              className="px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface hover:text-primary font-code-sm text-code-sm transition-colors border border-surface-container-high/60 flex items-center gap-2 shadow-sm"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <TechIcon name="github" size={15} />
              <span>Source Code</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Collapsible Trigger Bar */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => toggleProject(project.id)}
            className="group inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-code-sm text-code-sm font-medium cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span className="p-1 rounded bg-surface-container-lowest border border-surface-container-high/60 group-hover:border-primary-container transition-colors">
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </span>
            <span>
              {isExpanded
                ? "Hide Architecture & Details"
                : `View Architecture & Details (${project.technologies.length} Techs, ${project.architecturalDecisions.length} Decisions)`}
            </span>
          </button>

          {/* Compact summary tech preview when collapsed */}
          {!isExpanded && (
            <div className="hidden sm:flex items-center gap-1.5 overflow-hidden">
              {project.technologies.slice(0, 4).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface-variant text-[11px]"
                >
                  <TechIcon name={tech} size={11} />
                  <span>{tech}</span>
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-outline text-[11px] font-code-sm">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Expanded Deep-Dive Details */}
        {isExpanded && (
          <div className="flex flex-col gap-6 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Custom Visual Flow for RepoPilot */}
            {isRepoPilot && project.pipelineSteps && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm text-outline uppercase font-semibold">
                    End-to-End RAG Ingestion &amp; Inference Pipeline
                  </span>
                  <span className="font-code-sm text-code-sm text-primary-container font-medium">
                    Spring AI + pgvector
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-code-sm text-code-sm">
                  {project.pipelineSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border flex flex-col justify-between transition-all ${step.isHighlight
                        ? "bg-primary-container/10 border-primary-container/50 shadow-[0_0_12px_-4px_rgba(0,240,255,0.25)]"
                        : "bg-surface-container-lowest border-surface-container-high/50"
                        }`}
                    >
                      <span
                        className={
                          step.isHighlight
                            ? "text-primary-container text-[10px] font-semibold"
                            : "text-outline text-[10px]"
                        }
                      >
                        {step.step}
                      </span>
                      <span
                        className={`font-semibold mt-1 ${step.isHighlight ? "text-primary-container" : "text-on-surface"
                          }`}
                      >
                        {step.title}
                      </span>
                      <span className="text-[11px] text-on-surface-variant mt-0.5">{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Visual Topology for ClipIQ */}
            {isClipIQ && (
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-container-high/60 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
                    <span className="font-code-sm text-code-sm text-on-surface font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">lan</span>
                      Multi-Surface Distributed Flow
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">
                      Zero HTTP Socket Blocking
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    <div className="bg-surface-container p-3.5 rounded-lg border-l-2 border-primary-container flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-outline">INGRESS</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Multi-Client</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Electron desktop recorder &amp; Chrome extension stream raw multipart chunks.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 font-code-sm text-code-sm text-primary mt-2">
                        <TechIcon name="electron" size={13} />
                        <span>HTTP Multipart</span>
                      </div>
                    </div>

                    <div className="bg-surface-container p-3.5 rounded-lg border-l-2 border-secondary flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary">FAST ACK</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Express API</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Returns 202 Accepted within 45ms and pushes job payload to Redis.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 font-code-sm text-code-sm text-secondary mt-2">
                        <TechIcon name="bullmq" size={13} />
                        <span>BullMQ Producer</span>
                      </div>
                    </div>

                    <div className="bg-surface-container p-3.5 rounded-lg border-l-2 border-primary-container flex flex-col justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm text-primary-container">WORKERS</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Worker Fleet</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Cloudinary Transcoding → AssemblyAI Audio → LLM Analysis.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 font-code-sm text-code-sm text-primary mt-2">
                        <TechIcon name="socket.io" size={13} />
                        <span>Socket.IO Push</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-low rounded-lg font-code-sm text-code-sm text-on-surface-variant flex items-center justify-between border border-surface-container-high/30">
                  <span>Worker Failure Strategy: 3x exponential backoff</span>
                  {/* <span className="text-secondary font-medium">Idempotent Commit</span> */}
                </div>
              </div>
            )}

            {/* Code Excerpt preview if project has codeSnippet (RepoPilot) */}
            {project.codeSnippet && (
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-surface-container-high/60 flex flex-col justify-between font-code-sm text-code-sm shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-error/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                    <span className="text-on-surface font-medium ml-1">
                      {project.codeSnippet.filename}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-outline text-[11px]">{project.codeSnippet.framework}</span>
                    <button
                      onClick={() => handleCopyCode(project.codeSnippet!.code)}
                      className="p-1 hover:bg-surface-container rounded text-outline hover:text-on-surface transition-colors cursor-pointer"
                      title="Copy snippet"
                    >
                      {copiedCode ? <Check size={13} className="text-secondary" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                <pre className="text-on-surface-variant p-2 overflow-x-auto leading-relaxed text-[12px] font-code">
                  <span className="text-secondary">@Service</span>{"\n"}
                  <span className="text-primary">public class</span> <span className="text-on-surface font-semibold">RagStreamingService</span> {"{"}{"\n"}
                  {"    "}<span className="text-outline-variant">// Non-blocking SSE reactive stream</span>{"\n"}
                  {"    "}<span className="text-primary">public</span> Flux&lt;ServerSentEvent&lt;String&gt;&gt; <span className="text-primary-container">streamGroundedResponse</span>({"\n"}
                  {"            "}String query, String repoId) {"{"}{"\n"}
                  {"        \n"}
                  {"        "}List&lt;Document&gt; chunks = vectorStore.similaritySearch({"\n"}
                  {"            "}SearchRequest.query(query){"\n"}
                  {"                "}.withTopK(<span className="text-secondary">5</span>){"\n"}
                  {"                "}.withSimilarityThreshold(<span className="text-secondary">0.78</span>){"\n"}
                  {"                "}.withFilterExpression(<span className="text-on-surface">&quot;repoId == &apos;&quot;</span> + repoId + <span className="text-on-surface">&quot;&apos;&quot;</span>){"\n"}
                  {"        "});{"\n\n"}
                  {"        "}<span className="text-primary">return</span> chatClient.prompt(){"\n"}
                  {"            "}.system(s -&gt; s.text(SYSTEM_GROUNDING_PROMPT){"\n"}
                  {"                          "}.param(<span className="text-on-surface">&quot;context&quot;</span>, assembleContext(chunks))){"\n"}
                  {"            "}.user(query){"\n"}
                  {"            "}.stream(){"\n"}
                  {"            "}.content(){"\n"}
                  {"            "}.map(token -&gt; ServerSentEvent.builder(token).build());{"\n"}
                  {"    "}{"}"}{"\n"}
                  {"}"}
                </pre>

                <div className="pt-2 border-t border-surface-container-high/40 flex items-center justify-between text-outline text-[11px]">
                  <span>{project.codeSnippet.stats[0]?.label}: {project.codeSnippet.stats[0]?.value}</span>
                  <span className="text-secondary font-medium">
                    {project.codeSnippet.stats[1]?.label}: {project.codeSnippet.stats[1]?.value}
                  </span>
                </div>
              </div>
            )}

            {/* Architectural Decisions Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecturalDecisions.map((decision, dIdx) => (
                <div
                  key={dIdx}
                  className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-high/50 flex flex-col gap-1.5"
                >
                  <span
                    className={`font-label-sm text-label-sm uppercase font-semibold ${decision.accentColor === "emerald" ? "text-secondary" : "text-primary-container"
                      }`}
                  >
                    {decision.title}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 font-code-sm text-code-sm pt-1">
              <span className="text-outline font-label-sm uppercase mr-1">Technologies:</span>
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface"
                >
                  <TechIcon name={tech} size={14} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-10" id="featured-projects">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
          ARCHITECTURAL SPOTLIGHT
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-semibold text-on-surface">
          Featured Systems
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Production codebases and AI systems demonstrating multimodal RAG, high-concurrency ingestion, asynchronous queues, and clean separation of concerns.
        </p>
      </div>

      {/* Render all projects in defined order: VidSage at top, then RepoPilot, ClipIQ, and remaining */}
      <div className="flex flex-col gap-8">
        {FEATURED_PROJECTS.map((project) => renderProjectCard(project))}
      </div>
    </section>
  );
}
