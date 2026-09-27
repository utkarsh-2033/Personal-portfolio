"use client";

import React, { useState, useEffect, useRef } from "react";
import { AI_PRESETS } from "@/data/portfolioData";
import { Loader2, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";

interface Turn {
  id: string;
  query: string;
  answer: string;
  citations: { label: string; target: string }[];
  isStreaming?: boolean;
}

export function AskUtkarsh() {
  const [inputVal, setInputVal] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with premier preset on mount
  useEffect(() => {
    const premier = AI_PRESETS[0];
    setTurns([
      {
        id: "initial-turn",
        query: premier.q,
        answer: premier.ans,
        citations: premier.citations,
        isStreaming: false,
      },
    ]);
  }, []);

  // Keyboard shortcut Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const el = document.getElementById("ask-utkarsh");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTarget = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-primary-container", "transition-all", "duration-500");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-primary-container");
      }, 2000);
    }
  };

  const handleAsk = async (queryText?: string) => {
    const q = (queryText || inputVal).trim();
    if (!q || isLoading) return;

    setInputVal("");
    const turnId = `turn-${Date.now()}`;

    // Add placeholder turn
    setTurns((prev) => [
      ...prev,
      {
        id: turnId,
        query: q,
        answer: "",
        citations: [],
        isStreaming: true,
      },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: q,
          history: turns.slice(-3).map((t) => ({ role: "user", content: t.query })),
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      let parsedCitations: { label: string; target: string }[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        accumulated += text;

        // Check if citations marker exists
        let displayAnswer = accumulated;
        if (accumulated.includes("__CITATIONS__:")) {
          const parts = accumulated.split("__CITATIONS__:");
          displayAnswer = parts[0].trim();
          try {
            parsedCitations = JSON.parse(parts[1].trim());
          } catch {
            // partial json
          }
        } else {
          // contextual citations fallback
          const lower = q.toLowerCase();
          if (lower.includes("repopilot") || lower.includes("rag")) {
            parsedCitations = [
              { label: "RepoPilot Showcase", target: "repopilot" },
              { label: "Case Study 01", target: "cs-repopilot" },
            ];
          } else if (lower.includes("clipiq") || lower.includes("video")) {
            parsedCitations = [
              { label: "ClipIQ Pipeline", target: "clipiq" },
              { label: "Principle 01", target: "principles" },
            ];
          } else if (lower.includes("resumemate") || lower.includes("ats")) {
            parsedCitations = [
              { label: "ResumeMate Journey", target: "evolution" },
              { label: "Case Study 03", target: "cs-resumemate" },
            ];
          } else if (lower.includes("stack") || lower.includes("spring")) {
            parsedCitations = [
              { label: "Technical Stack", target: "stack" },
              { label: "CS Fundamentals", target: "stack" },
            ];
          }
        }

        setTurns((prev) =>
          prev.map((t) =>
            t.id === turnId
              ? {
                ...t,
                answer: displayAnswer,
                citations: parsedCitations,
                isStreaming: true,
              }
              : t
          )
        );
      }

      setTurns((prev) =>
        prev.map((t) => (t.id === turnId ? { ...t, isStreaming: false } : t))
      );
    } catch (err) {
      console.error(err);
      setTurns((prev) =>
        prev.map((t) =>
          t.id === turnId
            ? {
              ...t,
              answer:
                "Utkarsh specializes in distributed backends (Java, Spring Boot 3, Redis, BullMQ) and grounded RAG pipelines (Spring AI, pgvector). Please check the featured projects below for deep technical audits.",
              citations: [
                { label: "Featured Work", target: "featured-projects" },
                { label: "Technical Stack", target: "stack" },
              ],
              isStreaming: false,
            }
            : t
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    const premier = AI_PRESETS[0];
    setTurns([
      {
        id: "initial-turn",
        query: premier.q,
        answer: premier.ans,
        citations: premier.citations,
        isStreaming: false,
      },
    ]);
    setInputVal("");
  };

  return (
    <section
      className="w-full bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col gap-6 border border-surface-container-high/60 shadow-xl relative transition-colors"
      id="ask-utkarsh"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-surface-container-high/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold">
              AI PORTFOLIO ASSISTANT
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl font-semibold text-on-surface">Ask Utkarsh AI</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            A grounded conversational assistant answering technical inquiries about Utkarsh&apos;s architectures, codebase designs, internship contributions, and engineering philosophy.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            onClick={handleClear}
            title="Reset companion chat"
          >
            <span className="material-symbols-outlined text-[15px]">refresh</span>
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Sleek Natural Query Bar */}
      <div className="flex flex-col gap-3">
        <div className="relative w-full bg-surface-container-lowest rounded-xl p-2.5 flex items-center gap-3 border border-surface-container-high/70 focus-within:border-primary-container focus-within:shadow-[0_0_20px_-4px_rgba(0,240,255,0.25)] transition-all">
          <span className="material-symbols-outlined text-primary-container text-[20px] pl-2 select-none">
            search
          </span>
          <input
            ref={inputRef}
            id="repl-input"
            className="w-full bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none"
            placeholder="Ask about RepoPilot's RAG pipeline, ClipIQ queues, ResumeMate impact, or tech stack..."
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAsk();
              }
            }}
            disabled={isLoading}
          />
          <button
            id="repl-submit-btn"
            className="px-4 py-2 bg-primary-container hover:brightness-110 text-on-primary font-body-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer disabled:opacity-50"
            onClick={() => handleAsk()}
            disabled={isLoading || !inputVal.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                <span>Thinking...</span>
              </>
            ) : (
              <>
                <span>Ask</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </>
            )}
          </button>
        </div>

        {/* Suggested Question Prompts */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-label-sm text-label-sm text-outline uppercase mr-1">
            Suggested inquiries:
          </span>
          {AI_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-body-sm text-body-sm transition-colors border border-surface-container-high/40 cursor-pointer text-left"
              onClick={() => handleAsk(preset.q)}
            >
              {preset.q}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive AI Dialogue Stream Box */}
      <div
        className="bg-surface-container-lowest rounded-xl p-5 sm:p-6 border border-surface-container-high/60 flex flex-col gap-4 shadow-inner"
        id="companion-dialogue"
      >
        <div className="flex flex-col gap-4" id="companion-turns">
          {turns.map((turn) => (
            <div
              key={turn.id}
              className="flex flex-col gap-3 p-4 rounded-xl bg-surface-container-low border border-surface-container-high/50 transition-all"
            >
              {/* Question */}
              <div className="flex items-center gap-2 text-primary font-code-sm text-code-sm font-semibold">
                <span className="w-6 h-6 rounded bg-primary-container/20 text-primary-container flex items-center justify-center font-bold text-[11px] shrink-0">
                  Q
                </span>
                <span className="text-on-surface">{turn.query}</span>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-2.5 pt-1">
                <span className="w-6 h-6 rounded bg-surface-container-high text-secondary flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  AI
                </span>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line flex-1">
                  {turn.answer || (
                    <span className="inline-flex items-center gap-1.5 text-outline">
                      <Loader2 size={14} className="animate-spin text-primary-container" />
                      Retrieving grounded context &amp; reasoning...
                    </span>
                  )}
                  {turn.isStreaming && turn.answer && (
                    <span className="inline-block w-2 h-4 ml-1 bg-primary-container animate-pulse align-middle" />
                  )}
                </div>
              </div>

              {/* Verified Citations */}
              {turn.citations && turn.citations.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-container-high/40">
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                    Referenced in portfolio:
                  </span>
                  {turn.citations.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToTarget(c.target)}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-code-sm text-code-sm transition-colors border border-surface-container-high/60 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[13px] text-primary-container">
                        arrow_forward
                      </span>
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
