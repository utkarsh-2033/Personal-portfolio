import React from "react";
import {
  SiOpenjdk,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiLangchain,
  SiPython,
  SiElectron,
  SiPrisma,
  SiPostman,
  SiVercel,
  SiRedux,
  SiSocketdotio,
  SiCloudinary,
  SiGooglegemini,
  SiLeetcode,
  SiGeeksforgeeks,
  SiFfmpeg,
  SiOnnx,
} from "react-icons/si";
import { FaAws, FaLinkedin, FaDatabase } from "react-icons/fa6";
import {
  Cpu,
  Terminal,
  Globe,
  Layers,
  Workflow,
  Mic,
  Volume2,
  ScanText,
  FileText,
  Network,
  AudioWaveform,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "", size = 16 }: TechIconProps) {
  const norm = name.trim().toLowerCase();

  // Normalize icon mapping
  if (norm.includes("java 21") || norm.includes("java 17") || norm === "java" || norm.includes("openjdk")) {
    return <SiOpenjdk size={size} className={`inline-block shrink-0 text-[#f89820] ${className}`} title="Java" />;
  }
  if (norm.includes("spring boot")) {
    return <SiSpringboot size={size} className={`inline-block shrink-0 text-[#6db33f] ${className}`} title="Spring Boot" />;
  }
  if (norm.includes("spring security")) {
    return <SiSpringsecurity size={size} className={`inline-block shrink-0 text-[#6db33f] ${className}`} title="Spring Security" />;
  }
  if (norm.includes("spring ai") || norm === "spring") {
    return <SiSpring size={size} className={`inline-block shrink-0 text-[#6db33f] ${className}`} title="Spring" />;
  }
  if (norm === "typescript" || norm.includes("ts")) {
    return <SiTypescript size={size} className={`inline-block shrink-0 text-[#3178c6] ${className}`} title="TypeScript" />;
  }
  if (norm === "javascript" || (norm.includes("js") && !norm.includes("next") && !norm.includes("node") && !norm.includes("express") && !norm.includes("pdf"))) {
    return <SiJavascript size={size} className={`inline-block shrink-0 text-[#f7df1e] ${className}`} title="JavaScript" />;
  }
  if (norm.includes("next.js") || norm.includes("nextjs") || norm.includes("next")) {
    return <SiNextdotjs size={size} className={`inline-block shrink-0 text-current ${className}`} title="Next.js" />;
  }
  if (norm.includes("react") && !norm.includes("reactive")) {
    return <SiReact size={size} className={`inline-block shrink-0 text-[#61dafb] ${className}`} title="React" />;
  }
  if (norm.includes("node.js") || norm.includes("nodejs") || norm === "node") {
    return <SiNodedotjs size={size} className={`inline-block shrink-0 text-[#5fa04e] ${className}`} title="Node.js" />;
  }
  if (norm.includes("express")) {
    return <SiExpress size={size} className={`inline-block shrink-0 text-current ${className}`} title="Express.js" />;
  }
  if (norm.includes("postgres") || norm.includes("pgvector")) {
    return <SiPostgresql size={size} className={`inline-block shrink-0 text-[#4169e1] ${className}`} title="PostgreSQL" />;
  }
  if (norm.includes("mongo")) {
    return <SiMongodb size={size} className={`inline-block shrink-0 text-[#47a248] ${className}`} title="MongoDB" />;
  }
  if (norm.includes("redis")) {
    return <SiRedis size={size} className={`inline-block shrink-0 text-[#dc382d] ${className}`} title="Redis" />;
  }
  if (norm.includes("bullmq") || norm.includes("queue")) {
    return (
      <span title="BullMQ" className="inline-flex items-center">
        <Layers size={size} className={`inline-block shrink-0 text-[#dc382d] ${className}`} />
      </span>
    );
  }
  if (norm.includes("docker")) {
    return <SiDocker size={size} className={`inline-block shrink-0 text-[#2496ed] ${className}`} title="Docker" />;
  }
  if (norm === "git") {
    return <SiGit size={size} className={`inline-block shrink-0 text-[#f05032] ${className}`} title="Git" />;
  }
  if (norm.includes("github")) {
    return <SiGithub size={size} className={`inline-block shrink-0 text-current ${className}`} title="GitHub" />;
  }
  if (norm.includes("aws")) {
    return <FaAws size={size} className={`inline-block shrink-0 text-[#ff9900] ${className}`} title="AWS" />;
  }
  if (norm.includes("tailwind")) {
    return <SiTailwindcss size={size} className={`inline-block shrink-0 text-[#06b6d4] ${className}`} title="Tailwind CSS" />;
  }
  if (norm.includes("langchain")) {
    return <SiLangchain size={size} className={`inline-block shrink-0 text-[#00a389] ${className}`} title="LangChain" />;
  }
  if (norm.includes("python")) {
    return <SiPython size={size} className={`inline-block shrink-0 text-[#3776ab] ${className}`} title="Python" />;
  }
  if (norm.includes("electron")) {
    return <SiElectron size={size} className={`inline-block shrink-0 text-[#47848f] ${className}`} title="Electron" />;
  }
  if (norm.includes("prisma")) {
    return <SiPrisma size={size} className={`inline-block shrink-0 text-[#2d3748] dark:text-[#5a67d8] ${className}`} title="Prisma" />;
  }
  if (norm.includes("redux")) {
    return <SiRedux size={size} className={`inline-block shrink-0 text-[#764abc] ${className}`} title="Redux Toolkit" />;
  }
  if (norm.includes("socket.io") || norm.includes("socket")) {
    return <SiSocketdotio size={size} className={`inline-block shrink-0 text-current ${className}`} title="Socket.IO" />;
  }
  if (norm.includes("tanstack") || norm.includes("virtual") || norm.includes("query")) {
    return (
      <span title="TanStack" className="inline-flex items-center">
        <Workflow size={size} className={`inline-block shrink-0 text-[#ff4154] ${className}`} />
      </span>
    );
  }
  if (norm.includes("postman")) {
    return <SiPostman size={size} className={`inline-block shrink-0 text-[#ff6c37] ${className}`} title="Postman" />;
  }
  if (norm.includes("vercel")) {
    return <SiVercel size={size} className={`inline-block shrink-0 text-current ${className}`} title="Vercel" />;
  }
  if (norm.includes("cloudinary")) {
    return <SiCloudinary size={size} className={`inline-block shrink-0 text-[#3448c5] ${className}`} title="Cloudinary" />;
  }
  if (norm.includes("gemini")) {
    return <SiGooglegemini size={size} className={`inline-block shrink-0 text-[#1a73e8] ${className}`} title="Gemini" />;
  }
  if (norm.includes("leetcode")) {
    return <SiLeetcode size={size} className={`inline-block shrink-0 text-[#ffa116] ${className}`} title="LeetCode" />;
  }
  if (norm.includes("gfg")) {
    return <SiGeeksforgeeks size={size} className={`inline-block shrink-0 text-[#28a745] ${className}`} title="GeeksforGeeks" />;
  }
  if (norm.includes("linkedin")) {
    return <FaLinkedin size={size} className={`inline-block shrink-0 text-[#0077b5] ${className}`} title="LinkedIn" />;
  }
  if (norm.includes("chrome") || norm.includes("mv3")) {
    return (
      <span title="Chrome MV3" className="inline-flex items-center">
        <Globe size={size} className={`inline-block shrink-0 text-[#4285f4] ${className}`} />
      </span>
    );
  }
  if (norm.includes("sql")) {
    return <FaDatabase size={size} className={`inline-block shrink-0 text-[#00758f] ${className}`} title="SQL" />;
  }
  if (norm.includes("vector") || norm.includes("rag")) {
    return (
      <span title="Vector / AI" className="inline-flex items-center">
        <Cpu size={size} className={`inline-block shrink-0 text-[#00f0ff] ${className}`} />
      </span>
    );
  }
  if (norm.includes("sse") || norm.includes("stream")) {
    return (
      <span title="SSE Streaming" className="inline-flex items-center">
        <Workflow size={size} className={`inline-block shrink-0 text-[#4edea3] ${className}`} />
      </span>
    );
  }
  if (norm.includes("ffmpeg")) {
    return <SiFfmpeg size={size} className={`inline-block shrink-0 text-[#007808] ${className}`} title="FFmpeg" />;
  }
  if (norm.includes("onnx")) {
    return <SiOnnx size={size} className={`inline-block shrink-0 text-[#005ced] ${className}`} title="ONNX" />;
  }
  if (norm.includes("whisper")) {
    return (
      <span title="Whisper" className="inline-flex items-center">
        <AudioWaveform size={size} className={`inline-block shrink-0 text-[#10a37f] ${className}`} />
      </span>
    );
  }
  if (norm.includes("ocr")) {
    return (
      <span title="OCR" className="inline-flex items-center">
        <ScanText size={size} className={`inline-block shrink-0 text-[#f59e0b] ${className}`} />
      </span>
    );
  }
  if (norm.includes("pdf")) {
    return (
      <span title="pdfjs-dist" className="inline-flex items-center">
        <FileText size={size} className={`inline-block shrink-0 text-[#ef4444] ${className}`} />
      </span>
    );
  }
  if (norm.includes("speech synthesis")) {
    return (
      <span title="Speech Synthesis API" className="inline-flex items-center">
        <Volume2 size={size} className={`inline-block shrink-0 text-[#06b6d4] ${className}`} />
      </span>
    );
  }
  if (norm.includes("speech")) {
    return (
      <span title="Web Speech API" className="inline-flex items-center">
        <Mic size={size} className={`inline-block shrink-0 text-[#8b5cf6] ${className}`} />
      </span>
    );
  }
  if (norm.includes("cross-encoder")) {
    return (
      <span title="Cross-Encoder" className="inline-flex items-center">
        <Network size={size} className={`inline-block shrink-0 text-[#ec4899] ${className}`} />
      </span>
    );
  }
  if (norm.includes("rest")) {
    return (
      <span title="REST API" className="inline-flex items-center">
        <Globe size={size} className={`inline-block shrink-0 text-[#3b82f6] ${className}`} />
      </span>
    );
  }

  // Fallback subtle technical icon
  return (
    <span title={name} className="inline-flex items-center">
      <Terminal size={size} className={`inline-block shrink-0 text-outline ${className}`} />
    </span>
  );
}
