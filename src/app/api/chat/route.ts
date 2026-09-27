import { NextRequest, NextResponse } from "next/server";
import { PERSONAL_INFO } from "@/data/portfolioData";

// System prompt grounding the AI specifically on Utkarsh Kumar Gupta's portfolio
const SYSTEM_PROMPT = `You are "Utkarsh AI", the official AI portfolio companion for Utkarsh Kumar Gupta.
Your goal is to answer queries from recruiters, engineering managers, and technical peers about Utkarsh's technical architectures, codebase implementations, engineering internships, and system principles.

KEY FACTS ABOUT UTKARSH (STRICTLY ADHERE TO THESE FACTS - DO NOT HALLUCINATE OR EXAGGERATE):
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role} (${PERSONAL_INFO.subRole})
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}
- GitHub: ${PERSONAL_INFO.github}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- LeetCode: ${PERSONAL_INFO.leetcode} (${PERSONAL_INFO.leetcodeStats.totalSolved} solved: ${PERSONAL_INFO.leetcodeStats.easy} Easy, ${PERSONAL_INFO.leetcodeStats.medium} Medium, ${PERSONAL_INFO.leetcodeStats.hard} Hard)
- Resume Link: ${PERSONAL_INFO.resumeUrl}
- Education: ${PERSONAL_INFO.education.degree}, ${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.period}). CGPA: ${PERSONAL_INFO.education.cgpa}. Class XII: ${PERSONAL_INFO.education.classXII}, Class X: ${PERSONAL_INFO.education.classX}.

FEATURED SYSTEMS & ARCHITECTURES:
1. VidSage (FINAL YEAR PROJECT • CURRENTLY BUILDING):
   - AI-Powered Cross-Video RAG Knowledge Assistant.
   - Multimodal cross-video RAG system letting users query an entire video library using both spoken audio and visual content.
   - Processing Pipeline: Video ingested -> Whisper transcription, scene detection, RapidOCR visual text extraction, semantic chunking, and dense embeddings.
   - Retrieval & Reasoning: Combines dense vector search (pgvector) with PostgreSQL lexical search via Reciprocal Rank Fusion (RRF), followed by ONNX Cross-Encoder reranking.
   - Produces grounded answers with precise Whisper word-level timestamp citations aligned to exact video moments.
   - Tech: Next.js, Express.js, PostgreSQL, pgvector, Whisper, RapidOCR, FFmpeg, ONNX Cross-Encoder.

2. RepoPilot (FLAGSHIP BACKEND + AI):
   - AI-Powered Codebase Reasoning Engine with Server-Sent Event (SSE) Streaming.
   - Solves LLM hallucination over private GitHub repos.
   - Tech: Java 21, Spring Boot, Spring AI, PostgreSQL (pgvector 1536-dim embeddings), Next.js.
   - Pipeline: Ingest GitHub OAuth/tree -> Chunking (TokenSplitter) -> pgvector embeddings -> Cosine search with repo metadata -> Spring AI ChatClient with citation verification -> Spring WebFlux SSE streaming (<340ms TTFT, 99.4% grounding).

3. ClipIQ (DISTRIBUTED PIPELINE • ASYNC QUEUES):
   - Distributed Video Processing & Screen Recording Platform (Live Demo: https://clipiq.vercel.app/).
   - Decouples heavy media processing and AI workloads from the Express API using BullMQ and Redis workers.
   - Ingestion returns immediate HTTP 202 Accepted (<45ms) and publishes job to BullMQ queue backed by Redis.
   - Workers execute Cloudinary transcoding, AssemblyAI speech analysis, and Gemini 1.5 summarization with exponential jitter retries and Dead Letter Queue (DLQ). Real-time progress is broadcast over Socket.IO.
   - Architecture: Clean layered pattern (Routes -> Controllers -> Services -> Repositories with Prisma). Correlated Pino structured logging with shared requestId.

4. Stock Research Assistant (RESEARCH PIPELINE • EXPLAINABLE AI):
   - AI-Powered Equity Research Platform (GitHub: https://github.com/utkarsh-2033/Stock-Research-Assistant).
   - Research-first stock analysis platform combining financial fundamentals, recent market news, and Gemini to generate structured equity research.
   - Orchestrates external data collection, sentiment processing, context construction, and validated AI responses inside a unified research workspace.
   - Separates data collection from LLM reasoning, outputting structured executive summaries, bull/bear cases, and risk analysis with response validation.
   - Tech: React, TypeScript, Node.js, Express.js, MongoDB, Gemini.

5. AnswersMap AI (MULTIMODAL AI • AUTOMATED ASSESSMENT):
   - AI Assessment Extraction & Answer Mapping (Live Demo: https://answersmapai.vercel.app/, GitHub: https://github.com/utkarsh-2033/AnswersMap-AI).
   - Multimodal AI assessment system that processes question papers and handwritten answer sheets, extracts questions, maps answers to their exact regions, and generates grading and feedback using Gemini.
   - Question papers and answer sheets are rendered into normalized page images in the browser using pdfjs-dist, reducing server-side PDF processing overhead before AI analysis.
   - Two-stage Gemini pipeline: first extracts questions in printed order, then maps handwritten answers to corresponding regions while outputting scores, verdicts, confidence values, and feedback.
   - Tech: Next.js, TypeScript, Gemini, pdfjs-dist, Tailwind CSS.

6. AI Voice Assistant (EMBEDDABLE SDK • VOICE INTERFACE):
   - Embeddable, Config-Driven Voice AI SDK (GitHub: https://github.com/utkarsh-2033/AI-Voice-Assistant).
   - Framework-agnostic voice assistant SDK designed to embed conversational voice experiences into websites with a single script tag.
   - Config-driven embeddable architecture: client-specific behavior is controlled through JSON configuration (different assistants, languages, themes, knowledge, and actions).
   - Three-layer system: browser UI/state, Web Speech API recognition & Speech Synthesis API, and Express backend connected via JSON and REST APIs.
   - Tech: JavaScript, Express.js, Web Speech API, Speech Synthesis API, REST API.

PROFESSIONAL EXPERIENCE:
1. ResumeMate (Oct 2025 – May 2026, SDE Intern):
   - Chrome MV3 Extension engine parsing 40+ ATS platforms & job boards (including Greenhouse, Lever, Workday, Naukri, Indeed) with 500+ active users.
   - ATS Score Checker using PDF.js and real-time DOM highlighting for 3,000+ daily active users (<150ms latency).
   - Next.js 15 Incremental Static Regeneration (ISR) indexing 26,000+ dynamic SEO job pages.
   - Core Web Vitals: INP < 120ms, LCP < 2.1s.

2. Slayyers (Aug 2025 – Sep 2025, Full Stack Developer Intern):
   - Quick-commerce platform frontend delivery in 3-person agile team.
   - Express.js REST APIs, JWT role-based auth, OTP flows, cart state machine.

3. FrugalX (Dec 2024 – Jan 2025, React Developer Intern):
   - High-performance dashboards, TanStack Virtual tabular virtualization, debounced queries, React.memo optimization.

ENGINEERING PHILOSOPHY (4 PRINCIPLES):
1. Don't block the request: Asynchronous task distribution, HTTP 202, BullMQ/Redis queues.
2. Give the model the right context: Boundary chunking, metadata filtering, multimodal RAG, citation validation.
3. Make state predictable: URL-first state, immutable stores, idempotent executions.
4. Design for failure as the default: Circuit breakers, exponential jitter backoff, DLQs, structured logging.

GUIDELINES FOR YOUR RESPONSES:
- Be concise, factual, authoritative, technically precise, and supportive.
- Do not exaggerate or claim skills not listed here.
- Highlight specific architectural design choices (e.g. why BullMQ, why Whisper + RapidOCR, why RRF reranking, why reactive SSE).
- Keep responses within 2 to 4 compact paragraphs or bullet points where appropriate.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const grokApiKey = process.env.GROK_API_KEY || process.env.XAI_API_KEY;

    // If GROK_API_KEY is configured in .env, stream directly from xAI Grok API
    if (grokApiKey) {
      const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...(Array.isArray(history)
          ? history.slice(-6).map((h: { role: string; content: string }) => ({
              role: h.role === "user" ? "user" : "assistant",
              content: h.content,
            }))
          : []),
        { role: "user", content: message },
      ];

      const grokResponse = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${grokApiKey}`,
        },
        body: JSON.stringify({
          model: process.env.GROK_MODEL || "grok-2-latest",
          messages,
          stream: true,
          temperature: 0.3,
        }),
      });

      if (grokResponse.ok && grokResponse.body) {
        // Transform the SSE stream from xAI into readable text delta stream
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();

        const stream = new ReadableStream({
          async start(controller) {
            const reader = grokResponse.body!.getReader();
            let buffer = "";

            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                  const trimmed = line.trim();
                  if (!trimmed || trimmed === "data: [DONE]") continue;

                  if (trimmed.startsWith("data: ")) {
                    try {
                      const json = JSON.parse(trimmed.slice(6));
                      const delta = json.choices?.[0]?.delta?.content || "";
                      if (delta) {
                        controller.enqueue(encoder.encode(delta));
                      }
                    } catch {
                      // ignore parse errors on partial chunks
                    }
                  }
                }
              }
            } catch (err) {
              controller.error(err);
            } finally {
              controller.close();
            }
          },
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Transfer-Encoding": "chunked",
          },
        });
      }
    }

    // Grounded Fallback Engine (when GROK_API_KEY is not yet provided or upstream fails)
    const lower = message.toLowerCase();
    let groundedAnswer = "";
    let citations: { label: string; target: string }[] = [];

    if (
      lower.includes("vidsage") ||
      lower.includes("cross-video") ||
      lower.includes("multimodal rag") ||
      lower.includes("whisper") ||
      lower.includes("rapidocr") ||
      lower.includes("reranking") ||
      lower.includes("rrf")
    ) {
      groundedAnswer =
        "VidSage is Utkarsh's multimodal cross-video RAG system (currently being built as his final-year project). It lets users query an entire video repository using both spoken audio and on-screen visual content.\n\nVideos are processed via Whisper transcription, scene detection, RapidOCR text extraction, semantic chunking, and embeddings. For retrieval, VidSage combines pgvector dense semantic search with PostgreSQL lexical search using Reciprocal Rank Fusion (RRF) before applying ONNX cross-encoder reranking, producing grounded answers with precise word-level timestamp citations.";
      citations = [
        { label: "VidSage Showcase", target: "vidsage" },
        { label: "Featured Systems", target: "featured-projects" },
      ];
    } else if (
      lower.includes("repopilot") ||
      lower.includes("chunking") ||
      lower.includes("hallucination") ||
      lower.includes("ast")
    ) {
      groundedAnswer =
        "RepoPilot solves the LLM codebase hallucination challenge through token chunking and strict context grounding. Rather than raw character splitting, files are segmented along language syntactical boundaries (classes, functions), embedded into a 1536-dimensional PostgreSQL pgvector store, and queried via cosine similarity with repo-scoped metadata filtering.\n\nSpring AI's ChatClient retrieves top-K verified chunks and streams tokens via Spring WebFlux Server-Sent Events (SSE) to a Next.js interface, achieving sub-340ms time-to-first-token with 99.4% source grounding.";
      citations = [
        { label: "RepoPilot Architecture", target: "repopilot" },
        { label: "Case Study 01", target: "cs-repopilot" },
      ];
    } else if (
      lower.includes("clipiq") ||
      lower.includes("transcoding") ||
      lower.includes("queue") ||
      lower.includes("bullmq")
    ) {
      groundedAnswer =
        "ClipIQ decouples heavy media processing (4K video encoding, transcription) by returning an immediate HTTP 202 Accepted status in < 45ms. Ingestion requests generate an idempotent jobId and push payloads to BullMQ queues backed by Redis.\n\nDedicated worker containers execute Cloudinary transcoding, AssemblyAI speech analysis, and Gemini 1.5 summarization with exponential jitter retries and dead-letter queues. Real-time progress is broadcast to client rooms via Socket.IO, ensuring zero HTTP socket drops. A live demo is deployed at https://clipiq.vercel.app/.";
      citations = [
        { label: "ClipIQ Pipeline", target: "clipiq" },
        { label: "Principle 01: Don't Block", target: "principles" },
      ];
    } else if (
      lower.includes("answersmap") ||
      lower.includes("answer map") ||
      lower.includes("assessment") ||
      lower.includes("handwritten") ||
      lower.includes("pdfjs")
    ) {
      groundedAnswer =
        "AnswersMap AI is an automated AI assessment platform that processes question papers and handwritten answer sheets. Question papers and student answer sheets are converted to normalized page images directly in the browser via pdfjs-dist, eliminating heavy server-side rasterization.\n\nOn the backend, a two-stage Gemini multimodal pipeline first extracts questions in printed order, then maps handwritten answers to their exact regions on the page while generating automated grading, verdicts, confidence metrics, and feedback. It is live at https://answersmapai.vercel.app/.";
      citations = [
        { label: "AnswersMap AI Project", target: "answersmap-ai" },
        { label: "Featured Work", target: "featured-projects" },
      ];
    } else if (
      lower.includes("stock") ||
      lower.includes("equity") ||
      lower.includes("market") ||
      lower.includes("finance")
    ) {
      groundedAnswer =
        "Stock Research Assistant is a research-first equity analysis platform. It separates raw financial data gathering from LLM reasoning: company balance sheet fundamentals and recent market news are collected first, transformed into structured context, and only then passed to Gemini for synthesis.\n\nThe system validates outputs before displaying executive summaries, bull/bear scenarios, risk factors, and suggested follow-up queries inside a unified React research console.";
      citations = [
        { label: "Stock Research Platform", target: "stock-research-assistant" },
        { label: "Featured Work", target: "featured-projects" },
      ];
    } else if (
      lower.includes("voice") ||
      lower.includes("assistant sdk") ||
      lower.includes("speech api") ||
      lower.includes("embeddable")
    ) {
      groundedAnswer =
        "AI Voice Assistant is a framework-agnostic, embeddable voice AI SDK designed for single-script integration into any web application. It combines browser Web Speech API (speech recognition) and Speech Synthesis API (voice output) with a lightweight responsive UI and an Express REST backend.\n\nBehavior is entirely config-driven via JSON, allowing different websites to configure assistants, languages, personality, and actions with zero code changes.";
      citations = [
        { label: "Voice Assistant SDK", target: "ai-voice-assistant" },
        { label: "Featured Work", target: "featured-projects" },
      ];
    } else if (
      lower.includes("resumemate") ||
      lower.includes("intern") ||
      lower.includes("ats") ||
      lower.includes("extension") ||
      lower.includes("mv3")
    ) {
      groundedAnswer =
        "During his SDE internship at ResumeMate (Oct 2025 – May 2026), Utkarsh engineered a Chrome MV3 extension background engine that parses dynamic application DOMs across 40+ ATS platforms & job boards (including Greenhouse, Lever, Workday, Naukri, Indeed) with 500+ active users.\n\nHe also authored a client-side ATS Score Checker using PDF.js with instant cross-DOM highlighting for 3,000+ daily active users under 150ms latency, and designed Next.js Incremental Static Regeneration (ISR) indexing 26,000+ SEO pages while maintaining Core Web Vitals (INP < 120ms).";
      citations = [
        { label: "ResumeMate Journey", target: "evolution" },
        { label: "Case Study 03", target: "cs-resumemate" },
      ];
    } else if (
      lower.includes("stack") ||
      lower.includes("tech") ||
      lower.includes("spring") ||
      lower.includes("java") ||
      lower.includes("backend")
    ) {
      groundedAnswer =
        "Utkarsh specializes in Java and Spring Boot, Spring AI for vector pipelines, Spring Security (JWT / OAuth2), and PostgreSQL for relational persistence.\n\nFor distributed asynchronous workloads, he leverages BullMQ, Redis queues, and Node.js microservices. For multimodal AI, he uses pgvector, Whisper, RapidOCR, Gemini, and ONNX cross-encoders. His engineering adheres strictly to clean layered architecture (Routes → Controllers → Services → Repositories) where controllers never execute business queries, inputs are strictly validated at boundaries, and systems are designed for fault tolerance.";
      citations = [
        { label: "Technical Stack Matrix", target: "stack" },
        { label: "CS Fundamentals", target: "stack" },
      ];
    } else if (
      lower.includes("education") ||
      lower.includes("college") ||
      lower.includes("cgpa") ||
      lower.includes("degree")
    ) {
      groundedAnswer =
        "Utkarsh is pursuing his B.Tech in Computer Science and Engineering at JSS Academy of Technical Education, Noida (2023–2027) with a CGPA of 8.46 / 10. Prior to that, he scored 97.4% in CBSE Class XII and 98.4% in CBSE Class X.";
      citations = [{ label: "Academic Background", target: "resume-card" }];
    } else if (lower.includes("leetcode") || lower.includes("dsa") || lower.includes("problem solving")) {
      groundedAnswer =
        "Utkarsh has solved ~500 algorithmic problems on LeetCode (105+ Easy, 280+ Medium, 75+ Hard), demonstrating consistent mastery over Trees, Graphs, Dynamic Programming, Heaps, and Concurrency patterns.";
      citations = [{ label: "Algorithmic Mastery", target: "resume-card" }];
    } else {
      groundedAnswer =
        "Utkarsh Kumar Gupta is a Software Engineer focused on resilient distributed backends, high-throughput pipelines, and grounded AI systems. His key projects include VidSage (multimodal cross-video RAG), RepoPilot (codebase reasoning engine), ClipIQ (distributed video transcode queues), Stock Research Assistant, AnswersMap AI, and an Embeddable Voice Assistant SDK.\n\nAcross all projects, he prioritizes decoupled asynchronous execution, strict validation boundaries, and predictable state.";
      citations = [
        { label: "Featured Systems", target: "featured-projects" },
        { label: "Technical Stack", target: "stack" },
      ];
    }

    // Stream the fallback response word-by-word with realistic token hydration
    const encoder = new TextEncoder();
    const words = groundedAnswer.split(" ");

    const stream = new ReadableStream({
      async start(controller) {
        for (let i = 0; i < words.length; i++) {
          const word = (i === 0 ? "" : " ") + words[i];
          controller.enqueue(encoder.encode(word));
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        // Send citations marker if applicable
        if (citations.length > 0) {
          controller.enqueue(encoder.encode(`\n\n__CITATIONS__:${JSON.stringify(citations)}`));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to process chat query" }, { status: 500 });
  }
}
