export interface Project {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  highlight: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  pipelineSteps?: {
    step: string;
    title: string;
    desc: string;
    isHighlight?: boolean;
  }[];
  codeSnippet?: {
    filename: string;
    framework: string;
    code: string;
    stats: { label: string; value: string }[];
  };
  architecturalDecisions: {
    title: string;
    description: string;
    accentColor: "cyan" | "emerald";
  }[];
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  stackText: string;
  description: string;
  highlights: {
    title: string;
    desc: string;
    color: string;
  }[];
  isCurrent?: boolean;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  stack: string;
  color: "cyan" | "emerald" | "primary";
  problem: string;
  constraint: string;
  decision: string;
  architecture: string;
  result: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  appliedIn: string;
  borderColor: string;
  textColor: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  items: {
    name: string;
    label: string;
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Utkarsh Kumar Gupta",
  handle: "UTKARSH.G",
  role: "Software Engineer",
  subRole: "Backend Systems • Distributed Pipelines • Grounded AI",
  headline: "Software Engineer building full-stack products, scalable backend systems, and AI-powered applications.",
  philosophySubtext: "I build end-to-end software systems across the stack — from responsive React and Next.js interfaces to Java/Spring Boot and Node.js backends, databases, asynchronous pipelines, and AI-powered applications. I enjoy solving problems around scalability, reliability, real-time systems, and turning complex data into practical user experiences.",
  statusText: "Currently building: VidSage — A Cross-Video RAG-Based Knowledge Assistant",
  email: "utkarshg2033@gmail.com",
  phone: "+91-8429723671",
  github: "https://github.com/utkarsh-2033",
  linkedin: "https://www.linkedin.com/in/utkarsh-kr-gupta-myprofile/",
  leetcode: "https://leetcode.com/u/utkarshg2033/",
  resumeUrl: "https://drive.google.com/file/d/1YFWLz-khs7W_Du4Lc1voYBBNnnN_qelF/view",
  gfg:"https://www.geeksforgeeks.org/profile/utkarshmey6?tab=activity",
  education: {
    degree: "B.Tech Computer Science",
    institution: "JSS Academy of Technical Education, Noida",
    period: "2023 – 2027",
    cgpa: "8.46 / 10",
    classXII: "97.4%",
    classX: "98.4%",
  },
  leetcodeStats: {
    totalSolved: "~500",
    easy: "105+",
    medium: "280+",
    hard: "75+",
    easyPercent: 24,
    mediumPercent: 59,
    hardPercent: 17,
  },
};

export const CORE_DISCIPLINES = [
  {
    number: "01",
    title: "Client & Browser Systems",
    description: "React & Next.js frontend architectures powering responsive, high-performance product experiences, alongside Chrome MV3 systems spanning content scripts, background service workers, and cross-DOM interactions.",
    icon: "extension",
    skills: ["React.js", "Next.js", "TypeScript", "Chrome MV3"],
    color: "cyan",
  },
  {
    number: "02",
    title: "Backend Systems",
    description: "Resilient micro-architectures authored with Java, Spring Boot , Spring Security, RESTful endpoints, relational normalization, and Redis caching.",
    icon: "dns",
    skills: ["Java", "Spring Boot", "PostgreSQL"],
    color: "cyan",
  },
  {
    number: "03",
    title: "Applied AI & RAG",
    description: "Grounded Retrieval-Augmented Generation using Spring AI, tokenization, indexing , semantic similarity search, metadata-filtered retrievals, and real-time SSE streaming.",
    icon: "psychology",
    skills: ["Spring AI", "Semantic Search", "SSE Streaming"],
    color: "cyan",
  },
  {
    number: "04",
    title: "Distributed & Real-Time",
    description: "Asynchronous task distribution using BullMQ and Redis queues, background worker topologies, WebSocket/Socket.IO bi-directional pipes, idempotency, and exponential retries.",
    icon: "hub",
    skills: ["BullMQ", "Redis", "Socket.IO"],
    color: "emerald",
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "vidsage",
    name: "VidSage",
    tagline: "AI-Powered Cross-Video RAG Knowledge Assistant",
    badge: "FINAL YEAR PROJECT • CURRENTLY BUILDING",
    highlight: "Multimodal Cross-Video RAG",
    description:
      "VidSage is a multimodal RAG system that lets users query an entire video library using both spoken and visual content. Videos are processed through Whisper transcription, scene detection, OCR, semantic chunking, and embeddings, while hybrid retrieval, RRF, and cross-encoder reranking produce grounded answers with precise timestamp citations.",
    githubUrl: "https://github.com/utkarsh-2033",
    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "pgvector",
      "Whisper",
      "RapidOCR",
      "FFmpeg",
      "ONNX Cross-Encoder",
    ],
    architecturalDecisions: [
      {
        title: "MULTIMODAL HYBRID RETRIEVAL",
        description:
          "VidSage indexes both transcript and OCR-extracted visual content, combining dense semantic search with PostgreSQL lexical search through Reciprocal Rank Fusion before applying cross-encoder reranking.",
        accentColor: "emerald",
      },
      {
        title: "CROSS-VIDEO GROUNDED ANSWERS",
        description:
          "Complex questions can be decomposed into multiple retrieval queries and searched across the entire video library. Retrieved evidence is coverage-selected before LLM generation, with Whisper word-level timestamps used to align citations to precise moments in the source videos.",
        accentColor: "cyan",
      },
    ],
  },
  {
    id: "repopilot",
    name: "RepoPilot",
    tagline: "AI-Powered Codebase Reasoning Engine with Server-Sent Event Streaming",
    badge: "FLAGSHIP BACKEND + AI",
    highlight: "Zero-Hallucination Grounding",
    description:
      "AI-powered codebase assistant backend that connects GitHub repositories, indexes source code into a vector store, and answers repository-specific questions with streaming responses and exact file/line citations.",
    githubUrl: "https://github.com/utkarsh-2033/RepoPilot",
    liveUrl:"https://drive.google.com/file/d/1ZMPaAfoVJP7fN53GaJMp0Zn9mjQXn3Vl/view?usp=sharing",
    technologies: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "Next.js"],
    pipelineSteps: [
      { step: "01 // INGEST", title: "GitHub Repo", desc: "OAuth & file tree" },
      { step: "02 // SEGMENT", title: "Chunking", desc: "TokenSplitter" },
      { step: "03 // EMBED", title: "pgvector", desc: "Embeddings" },
      { step: "04 // FILTER", title: "Semantic Search", desc: "Metadata-scoped retrieval" },
      { step: "05 // GROUND", title: "Spring AI Client", desc: "Citations verified" },
      { step: "06 // DISPATCH", title: "SSE Stream", desc: "Flux delta hydration", isHighlight: true },
    ],
    codeSnippet: {
      filename: "RagStreamingService.java",
      framework: "Spring WebFlux + Spring AI",
      code: `@Service
public class RagStreamingService {
    // Non-blocking SSE reactive stream
    public Flux<ServerSentEvent<String>> streamGroundedResponse(
            String query, String repoId) {
        
        List<Document> chunks = vectorStore.similaritySearch(
            SearchRequest.query(query)
                .withTopK(5)
                .withSimilarityThreshold(0.78)
                .withFilterExpression("repoId == '" + repoId + "'")
        );

        return chatClient.prompt()
            .system(s -> s.text(SYSTEM_GROUNDING_PROMPT)
                          .param("context", assembleContext(chunks)))
            .user(query)
            .stream()
            .content()
            .map(token -> ServerSentEvent.builder(token).build());
    }
}`,
      stats: [
        { label: "Thread safety", value: "Non-blocking event loop" },
        { label: "TTFT", value: "< 340ms" },
      ],
    },
    architecturalDecisions: [
      {
        title: "REPOSITORY-SCOPED SEMANTIC RETRIEVAL",
        description:
          "Repository content is indexed into embeddings with repository-scoped metadata, then filtered and ranked against the user's query so retrieval stays focused on the connected codebase instead of mixing context across repositories.",
        accentColor: "cyan",
      },
      {
        title: "TOKEN-STREAMING AI RESPONSES",
        description:
          "AI responses are streamed from the Spring AI ChatClient over Server-Sent Events, with the Next.js client incrementally parsing partial network chunks to render the answer token-by-token instead of waiting for the complete response.",
        accentColor: "emerald",
      },
      {
        title: "STRICT SOURCE CITATION VALIDATION",
        description:
          "Every token batch emitted requires explicit line range anchors (src/path:line_range) referenced in retrieved chunks. If the model speculates outside retrieved documents, responses are automatically constrained to verified repository facts.",
        accentColor: "cyan",
      },
    ],
  },
  {
    id: "clipiq",
    name: "ClipIQ",
    tagline: "Distributed Video Processing & Screen Recording Platform",
    badge: "DISTRIBUTED PIPELINE • ASYNC QUEUES",
    highlight: "Decoupled Concurrency",
    description:
      "ClipIQ separates long-running media and AI workloads from the Express API using BullMQ and Redis workers. Recordings flow through Cloudinary, AssemblyAI transcription, and Gemini metadata generation asynchronously, while Socket.IO pushes upload and processing updates back to the dashboard in real time.",
    githubUrl: "https://github.com/utkarsh-2033/ClipIQ",
    liveUrl: "https://clipiq.vercel.app/",
    technologies: ["BullMQ", "Redis", "Prisma", "PostgreSQL", "Socket.IO", "Electron"],
    architecturalDecisions: [
      {
        title: "CLEAN LAYERED BACKEND ARCHITECTURE",
        description:
          "The Express backend separates responsibilities across Routes, Controllers, Services, and Repository layers, with Prisma handling PostgreSQL access. Supporting middleware, Zod validation, centralized error handling, and service-level separation keep API and persistence concerns isolated.",
        accentColor: "emerald",
      },
      {
        title: "STRUCTURED OBSERVABILITY & RELIABLE PROCESSING",
        description:
          "ClipIQ uses structured Pino logging, centralized error handling, and exponential-backoff retries across its backend and background-processing pipeline. BullMQ workers isolate long-running jobs while Socket.IO provides real-time processing updates to the dashboard.",
        accentColor: "cyan",
      },
    ],
  },
  {
    id: "stock-research-assistant",
    name: "Stock Research Assistant",
    tagline: "AI-Powered Equity Research Platform",
    badge: "RESEARCH PIPELINE • EXPLAINABLE AI",
    highlight: "Research-First Orchestration",
    description:
      "A research-first stock analysis platform that combines financial fundamentals, recent market news, and Gemini to generate structured equity research. The system orchestrates external data collection, sentiment processing, context construction, and validated AI responses inside a unified research workspace.",
    githubUrl: "https://github.com/utkarsh-2033/Stock-Research-Assistant",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Gemini"],
    architecturalDecisions: [
      {
        title: "RESEARCH-FIRST ORCHESTRATION",
        description:
          "The application separates data collection from LLM reasoning: financial fundamentals and recent news are gathered first, transformed into structured context, and only then passed to Gemini for analysis.",
        accentColor: "emerald",
      },
      {
        title: "STRUCTURED AI RESPONSE PIPELINE",
        description:
          "Gemini generates structured research outputs including executive summaries, bull and bear cases, risk analysis, and follow-up questions, with response validation before results reach the research workspace.",
        accentColor: "cyan",
      },
    ],
  },
  {
    id: "answersmap-ai",
    name: "AnswersMap AI",
    tagline: "AI Assessment Extraction & Answer Mapping",
    badge: "MULTIMODAL AI • AUTOMATED ASSESSMENT",
    highlight: "Region-Level Answer Mapping",
    description:
      "An AI assessment system that processes question papers and handwritten answer sheets, extracts questions, maps answers to their exact regions, and generates grading and feedback using Gemini. PDF pages are rendered client-side before being analyzed server-side.",
    githubUrl: "https://github.com/utkarsh-2033/AnswersMap-AI",
    liveUrl: "https://answersmapai.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Gemini", "pdfjs-dist", "Tailwind CSS"],
    architecturalDecisions: [
      {
        title: "CLIENT-SIDE PDF PREPROCESSING",
        description:
          "Question papers and answer sheets are rendered into normalized page images in the browser using pdfjs-dist, reducing server-side PDF processing overhead before AI analysis.",
        accentColor: "emerald",
      },
      {
        title: "TWO-STAGE AI ASSESSMENT PIPELINE",
        description:
          "Gemini first extracts questions in printed order and then maps handwritten answers to their corresponding regions while generating scores, verdicts, confidence values, and feedback.",
        accentColor: "cyan",
      },
    ],
  },
  {
    id: "ai-voice-assistant",
    name: "AI Voice Assistant",
    tagline: "Embeddable, Config-Driven Voice AI SDK",
    badge: "EMBEDDABLE SDK • VOICE INTERFACE",
    highlight: "One-Script Integration",
    description:
      "A framework-agnostic voice assistant SDK designed to embed conversational voice experiences into websites with a single script tag. The system combines browser speech APIs, configurable assistant behavior, responsive UI, and an Express backend for deployment across different client use cases.",
    githubUrl: "https://github.com/utkarsh-2033/AI-Voice-Assistant",
    technologies: ["JavaScript", "Express.js", "Web Speech API", "Speech Synthesis API", "REST API"],
    architecturalDecisions: [
      {
        title: "CONFIG-DRIVEN EMBEDDABLE ARCHITECTURE",
        description:
          "Client-specific behavior is controlled through JSON configuration, allowing the same voice widget to be embedded across websites with different assistants, languages, themes, knowledge, and actions.",
        accentColor: "emerald",
      },
      {
        title: "THREE-LAYER VOICE SYSTEM",
        description:
          "The SDK separates browser UI and state, speech recognition and synthesis, and the Express backend into distinct layers connected through JSON and REST APIs.",
        accentColor: "cyan",
      },
    ],
  },
];

export const ENGINEERING_JOURNEY: Internship[] = [
  {
    id: "distributed-rag",
    company: "Distributed Systems & RAG Architectures",
    role: "CURRENT FOCUS",
    period: "2025 – Present",
    stackText: "Java  • Spring Boot 4+ • Spring AI • pgvector • BullMQ • Redis",
    description: "Deepening focus on high-throughput backend services, non-blocking Spring AI integrations, and durable distributed queue pipelines. Authoring RepoPilot (grounded codebase RAG with SSE token streaming) and ClipIQ (decoupled video transcode fleet with BullMQ & Redis).",
    highlights: [
      {
        title: "RepoPilot Core",
        desc: "Built repository-scoped semantic search with embeddings and metadata filtering, with reactive SSE streaming for token-by-token AI responses.",
        color: "text-primary",
      },
      {
        title: "ClipIQ Pipeline",
        desc: "Decoupled media transcoding from Node HTTP cycles using BullMQ workers with exponential backoff.",
        color: "text-secondary",
      },
    ],
    isCurrent: true,
  },
  {
    id: "resumemate",
    company: "ResumeMate",
    role: "SDE INTERN",
    period: "Oct 2025 – May 2026",
    stackText: "Full Stack • Chrome Extension MV3 • Next.js 15 • Redux • AWS",
    description: "Authored core platform services and client runtime extensions for an AI career acceleration platform supporting thousands of active candidates.",
    highlights: [
      {
        title: "Chrome Extension MV3 Engine",
        desc: "Built parsers and background service workers operating across 40+ ATS platforms & job boards (including Naukri, Indeed, Greenhouse, Lever, Workday) with 500+ active users.",
        color: "text-primary-container",
      },
      {
        title: "ATS Score Checker & PDF Parser",
        desc: "Engineered client-side ATS analysis with PDF.js and real-time DOM text highlighting for 3,000+ daily active users .",
        color: "text-secondary",
      },
      {
        title: "Incremental Static Regeneration",
        desc: "Constructed Next.js ISR engine indexing 26,000+ dynamic SEO job pages with automatic incremental background regeneration.",
        color: "text-primary",
      },
      {
        title: "Core Web Vitals Optimization",
        desc: "Maintained strict web vitals: Interaction to Next Paint (INP) < 120ms and Largest Contentful Paint (LCP) < 2.1s.",
        color: "text-tertiary-fixed",
      },
    ],
  },
  {
    id: "slayyers",
    company: "Slayyers",
    role: "FULL STACK DEVELOPER INTERN",
    period: "Aug 2025 – Sep 2025",
    stackText: "React • TypeScript • Express.js • REST • JWT • OTP Auth",
    description: "Led the frontend delivery in a 3-person agile team for a quick-commerce retail platform. Authored production Express.js REST endpoints with role-based JWT access controls, OTP authentication flows, cart lifecycle state machines, and mentored an incoming engineering intern.",
    highlights: [],
  },
  {
    id: "frugalx",
    company: "FrugalX",
    role: "REACT DEVELOPER INTERN",
    period: "Dec 2024 – Jan 2025",
    stackText: "Next.js • React • Tailwind CSS • Redux Toolkit • TanStack Virtual",
    description: "Delivered high-performance dashboards featuring debounced server query lookups, virtualized large tabular datasets with TanStack Virtual, dynamic lazy imports, and strict memoization pipelines using useMemo and React.memo.",
    highlights: [],
  },
];

export const MATRIX_ROWS = [
  {
    vector: "Async & Concurrency",
    repopilot: "Spring TaskExecutors + reactive ingest",
    clipiq: "BullMQ + Redis delayed retry workers",
    resumemate: "Chrome MV3 service worker offscreen parsing",
  },
  {
    vector: "Real-Time Delivery",
    repopilot: "Server-Sent Events (SSE) token streaming",
    clipiq: "Socket.IO real-time progress events",
    resumemate: "DOM mutation observers & instant sync",
  },
  {
    vector: "Caching & State",
    repopilot: "pgvector vector cache + embedding dedup",
    clipiq: "Redis job status cache + pre-signed leases",
    resumemate: "Redux Toolkit persistence + TanStack Query",
  },
  {
    vector: "Failure Containment",
    repopilot: "Strict confidence threshold fallback",
    clipiq: "Exponential backoff",
    resumemate: "Graceful ATS DOM fallbacks across 12+ platforms",
  },
  {
    vector: "Validation Boundary",
    repopilot: "Spring Validation + Citation verification",
    clipiq: "Zod runtime contracts at gateway boundary",
    resumemate: "TypeScript strict mode + PDF schema normalization",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    number: "PRINCIPLE 01",
    title: "Don't block the request",
    description: "Synchronous computation masquerades as simplicity until traffic spikes. Heavy computations, AI inferences, video transcoding, and third-party webhook invocations belong in durable queues with idempotent state machines. An immediate HTTP 202 with WebSockets or polling always wins over connection timeouts.",
    appliedIn: "Applied in: ClipIQ Ingestion & RepoPilot Git Indexer",
    borderColor: "border-primary-container",
    textColor: "text-primary-container",
    icon: "bolt",
  },
  {
    number: "PRINCIPLE 02",
    title: "Give the model the right context",
    description: "Dumping raw text files into a prompt is not software engineering. Precision comes from right splitting, semantic similarity filtering with strict confidence cutoffs, and repo-level metadata scoping so the language model reasons over high-signal, zero-noise tokens.",
    appliedIn: "Applied in: RepoPilot RAG Pipeline",
    borderColor: "border-secondary",
    textColor: "text-secondary",
    icon: "filter_alt",
  },
  {
    number: "PRINCIPLE 03",
    title: "Make state predictable",
    description: "State duplication causes silent UI bugs. UI state belongs in the URL query string; server state belongs in stale-while-revalidate client caches; global state belongs in centralized, immutable stores. When a user reloads the page, their exact workbench state must reconstitute effortlessly.",
    appliedIn: "Applied in: ResumeMate ATS DOM & Next.js 15 Consoles",
    borderColor: "border-primary",
    textColor: "text-primary",
    icon: "sync",
  },
  {
    number: "PRINCIPLE 04",
    title: "Design for failure as the default",
    description: "Third-party APIs fail, sockets disconnect, and database pools saturate. Robust systems employ circuit breakers, exponential jitter backoffs, structured JSON telemetry (Pino).",
    appliedIn: "Applied in: BullMQ Workers & Chrome MV3 Parsers",
    borderColor: "border-error",
    textColor: "text-error",
    icon: "error_outline",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "LANGUAGES",
    items: [
      { name: "Java", label: "Java (17/21)" },
      { name: "TypeScript", label: "TypeScript" },
      { name: "JavaScript", label: "JavaScript" },
      { name: "SQL", label: "SQL" },
      { name: "Python", label: "Python" },
    ],
  },
  {
    category: "BACKEND & DISTRIBUTED",
    items: [
      { name: "Spring Boot", label: "Spring Boot " },
      { name: "Spring Security", label: "Spring Security" },
      { name: "Redis", label: "Redis" },
      { name: "BullMQ", label: "BullMQ" },
      { name: "Express", label: "Express.js" },
      { name: "Socket.IO", label: "Socket.IO" },
    ],
  },
  {
    category: "AI & DATA SYSTEMS",
    items: [
      { name: "Spring AI", label: "Spring AI" },
      { name: "RAG", label: "RAG Pipelines" },
      { name: "pgvector", label: "pgvector" },
      { name: "PostgreSQL", label: "PostgreSQL" },
      { name: "Prisma", label: "Prisma ORM" },
      { name: "MongoDB", label: "MongoDB" },
    ],
  },
  {
    category: "CLIENT RUNTIMES",
    items: [
      { name: "Next.js", label: "Next.js 15/16" },
      { name: "React", label: "React 19" },
      { name: "Redux", label: "Redux Toolkit" },
      { name: "TanStack", label: "TanStack Query" },
      { name: "Tailwind", label: "Tailwind CSS" },
      { name: "Electron", label: "Electron" },
    ],
  },
  {
    category: "INFRA & TOOLING",
    items: [
      { name: "Docker", label: "Docker" },
      { name: "Git", label: "Git / GitHub" },
      { name: "Postman", label: "Postman" },
      { name: "AWS", label: "AWS (S3/EC2)" },
      { name: "Vercel", label: "Vercel" },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-repopilot",
    number: "01",
    title: "RepoPilot: Scalable Grounded Code Reasoning Engine",
    stack: "Spring Boot • Spring AI • Vector Embeddings • Zero Hallucination",
    color: "cyan",
    problem: "Generic LLMs hallucinate functions and non-existent dependencies when queried about private codebases.",
    constraint: "Context limits prohibit sending the entire repo per prompt; rate-limiting on embedding APIs.",
    decision:
  "Implement repository-scoped semantic retrieval with embeddings and metadata filtering, then stream grounded responses over SSE.",

architecture:
  "Spring Boot → Spring AI ChatClient → repository-scoped vector retrieval → SSE streaming to the Next.js client.",

result:
  "Repository-grounded AI answers with validated source citations and incremental token streaming through Server-Sent Events."  },
  {
    id: "cs-clipiq",
    number: "02",
    title: "ClipIQ: High-Throughput Video Pipeline under Node Concurrency",
    stack: "BullMQ • Redis • Worker Pool • WebSockets",
    color: "emerald",
    problem: "Video uploads blocked the single-threaded Node event loop, causing dropped API requests and 504 timeouts.",
    constraint: "Video files up to 2GB; transcription and AI summaries take varying intervals from 20s to 3m.",
    decision: "Return immediate HTTP 202 Accepted and delegate work to BullMQ Redis workers with exponential retries.",
    architecture: "Isolated worker containers consuming from Redis queues with Socket.IO status broadcast.",
    result: "Zero event loop blocking; 100% video job completion guarantee even under server reboot.",
  },
  {
    id: "cs-resumemate",
    number: "03",
    title: "ResumeMate: High-Performance Cross-DOM Job Engine",
    stack: "Chrome MV3 • Next.js 15 • Redux • Web Vitals",
    color: "primary",
    problem: "Manifest V3 enforces ephemeral service worker lifecycles, causing connection drops during DOM extraction.",
    constraint: "12+ disparate third-party job application portals with dynamic, non-standardized DOM trees.",
    decision: "Built unified heuristic DOM parsers with offscreen document processing and Redux persistence.",
    architecture: "MV3 Background Worker ↔ Content Scripts ↔ Next.js ISR API endpoints.",
    result: "Zero worker timeout crashes; INP under 120ms; reliable parsing across 500+ active users.",
  },
];

export const AI_PRESETS = [
  {
    q: "Tell me about VidSage multimodal cross-video RAG",
    ans: "VidSage is Utkarsh's multimodal RAG system that lets users query an entire video library using both spoken and visual context. Videos undergo Whisper transcription, scene detection, RapidOCR text extraction, semantic chunking, and embeddings. For retrieval, VidSage combines dense semantic search with PostgreSQL lexical search via Reciprocal Rank Fusion (RRF) before applying ONNX cross-encoder reranking, producing grounded answers with precise Whisper timestamp citations.",
    citations: [
      { label: "VidSage Showcase", target: "vidsage" },
      { label: "Engineering Stack", target: "stack" },
    ],
  },
  {
    q: "Tell me about RepoPilot's architecture and RAG implementation",
    ans: "RepoPilot solves the LLM codebase hallucination challenge through AST-aware token chunking and strict context grounding. Rather than raw chunking, files are segmented along language syntactical boundaries (classes, functions), embedded into a 1536-dimensional PostgreSQL pgvector store, and queried via cosine similarity with repo-scoped metadata filtering. Spring AI's ChatClient retrieves top-K verified chunks and streams tokens via Spring WebFlux Server-Sent Events (SSE) to a Next.js interface, achieving sub-340ms time-to-first-token with 99.4% source grounding.",
    citations: [
      { label: "RepoPilot Showcase", target: "repopilot" },
      { label: "Case Study 01", target: "cs-repopilot" },
    ],
  },
  {
    q: "How does ClipIQ decouple video processing from HTTP requests?",
    ans: "ClipIQ decouples heavy media processing (4K video encoding, transcription) by returning an immediate HTTP 202 Accepted status in < 45ms. Ingestion requests generate an idempotent jobId and push payloads to BullMQ queues backed by Redis. Dedicated worker containers execute Cloudinary transcoding, AssemblyAI speech analysis, and Gemini 1.5 summarization with exponential jitter retries and dead-letter queues. Real-time progress is broadcast to client rooms via Socket.IO, ensuring zero HTTP socket drops.",
    citations: [
      { label: "ClipIQ Pipeline", target: "clipiq" },
      { label: "Principle 01: Don't Block", target: "principles" },
    ],
  },
  {
    q: "How does AnswersMap AI evaluate handwritten assessments?",
    ans: "AnswersMap AI processes question papers and handwritten answer sheets by first rendering PDF pages into normalized images directly in the browser via pdfjs-dist. On the backend, a two-stage Gemini multimodal pipeline first extracts questions in printed order, then maps handwritten responses to their exact page regions while producing automated scores, verdicts, confidence metrics, and targeted feedback.",
    citations: [
      { label: "AnswersMap AI Project", target: "answersmap-ai" },
      { label: "What I Build", target: "stack" },
    ],
  },
  {
    q: "What did Utkarsh build during his ResumeMate internship?",
    ans: "During his SDE internship at ResumeMate (Oct 2025 – May 2026), Utkarsh engineered a Chrome MV3 extension background engine that parses dynamic application DOMs across 12+ ATS platforms (Greenhouse, Lever, Workday) with 500+ active users. He also authored a client-side ATS Score Checker using PDF.js with instant cross-DOM highlighting for 3,000+ daily active users under 150ms latency, and designed Next.js Incremental Static Regeneration (ISR) indexing 26,000+ SEO pages while maintaining Core Web Vitals (INP < 120ms).",
    citations: [
      { label: "ResumeMate Journey", target: "evolution" },
      { label: "Case Study 03", target: "cs-resumemate" },
    ],
  },
  {
    q: "What is Utkarsh's core backend tech stack and design approach?",
    ans: "Utkarsh specializes in Java and Spring Boot, Spring AI for vector pipelines, Spring Security (JWT / OAuth2), and PostgreSQL for relational persistence. For distributed asynchronous workloads, he leverages BullMQ, Redis queues, and Node.js microservices. His engineering adheres strictly to clean layered architecture (Routes → Controllers → Services → Repositories) where controllers never execute business queries, inputs are strictly validated at boundaries, and systems are designed for fault tolerance.",
    citations: [
      { label: "Technical Stack Matrix", target: "stack" },
      { label: "CS Fundamentals", target: "stack" },
    ],
  },
];

