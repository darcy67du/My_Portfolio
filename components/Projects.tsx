"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            Featured Projects
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight mb-4">
            Selected work, from side projects to shipped systems.
          </h2>
          <p className="text-muted max-w-[64ch] text-[16px] leading-relaxed">
            GitHub links point to my profile — swap in direct repo URLs as each project goes public.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-[20px] overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors"
              >
                <div className={`h-[170px] flex items-center justify-center text-sm font-semibold text-white/90 bg-gradient-to-br ${p.gradient}`}>
                  {p.title}
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-[19px] font-bold">{p.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-cardBorder text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2.5 mt-2">
                    <a
                      href={p.demo}
                      className="flex-1 text-center text-[13px] font-semibold py-2.5 rounded-[9px] bg-brand-gradient text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-[13px] font-semibold py-2.5 rounded-[9px] border border-cardBorder hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
