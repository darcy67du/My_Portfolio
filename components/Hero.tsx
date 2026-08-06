"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import { roles, GITHUB_AVATAR } from "@/lib/data";

const floatIcons = [
  { emoji: "🐍", pos: "top-[-6%] left-[-8%]", delay: 0.2 },
  { emoji: "⚛️", pos: "bottom-[2%] left-[-12%]", delay: 1 },
  { emoji: "🟢", pos: "top-[8%] right-[-10%]", delay: 1.6 },
  { emoji: "☁️", pos: "bottom-[-6%] right-[2%]", delay: 2.2 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setTyped(roles[0]);
      return;
    }
    let ri = 0, ci = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[ri];
      setTyped(deleting ? current.slice(0, ci--) : current.slice(0, ci++));
      let delay = deleting ? 35 : 60;
      if (!deleting && ci === current.length + 1) { delay = 1400; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 300; }
      timeout = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <header
      id="hero"
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center px-[6vw] pt-32 pb-20 overflow-hidden"
    >
      <ParticlesBackground />
      <div
        className="hidden md:block absolute w-[480px] h-[480px] rounded-full pointer-events-none blur-md z-0"
        style={{
          left: glow.x,
          top: glow.y,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(59,130,246,0.28), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center text-center md:text-left">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-6 px-3.5 py-2 rounded-full border border-cardBorder glass"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_0_3px_rgba(34,197,94,0.25)] animate-pulse" />
            Available for freelance &amp; full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(38px,5.6vw,68px)] font-extrabold leading-[1.05] tracking-tight"
          >
            Hi, I&apos;m <span className="gradient-text">Darcy Dushime</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-[clamp(18px,2.4vw,26px)] font-semibold text-muted min-h-[34px]"
          >
            {typed}
            <span className="inline-block w-[2px] h-[1em] align-middle ml-0.5 bg-accent animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[17px] text-muted max-w-[52ch] mx-auto md:mx-0 leading-relaxed"
          >
            Building scalable web applications, AI-powered solutions, and modern digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-brand-gradient transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.6)]"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl text-sm font-semibold glass transition-transform hover:-translate-y-0.5 hover:border-primary border border-cardBorder"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold glass transition-transform hover:-translate-y-0.5 hover:border-primary border border-cardBorder"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center">
          {floatIcons.map((f, i) => (
            <motion.div
              key={i}
              className={`hidden md:flex absolute w-[52px] h-[52px] rounded-2xl glass items-center justify-center text-2xl shadow-lg ${f.pos}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: f.delay, ease: "easeInOut" }}
            >
              {f.emoji}
            </motion.div>
          ))}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-[min(340px,80vw)] aspect-square rounded-full bg-brand-gradient p-[5px]"
          >
            <Image
              src={GITHUB_AVATAR}
              alt="Darcy Dushime"
              width={340}
              height={340}
              priority
              className="w-full h-full rounded-full object-cover border-4 border-bg"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-muted">
        <span>Scroll</span>
        <motion.span
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </header>
  );
}
