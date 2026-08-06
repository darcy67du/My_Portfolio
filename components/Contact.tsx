"use client";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

type Status = { type: "idle" | "sending" | "success" | "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus({ type: "sending", message: "Sending your message…" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent — I'll get back to you soon.",
      });
      form.reset();
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            Contact
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-muted max-w-[64ch] text-[16px] leading-relaxed">
            Have a project in mind, or just want to say hi? My inbox is open.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          <RevealOnScroll className="flex flex-col gap-6">
            <p className="text-muted text-[15px] leading-relaxed">
              Based in Kigali, Rwanda — open to remote work and freelance collaborations
              worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/darcy67du"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-[46px] h-[46px] rounded-xl glass flex items-center justify-center hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/darcy-dushime"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[46px] h-[46px] rounded-xl glass flex items-center justify-center hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-[46px] h-[46px] rounded-xl glass flex items-center justify-center hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:hello@darcydushime.dev"
                aria-label="Email"
                className="w-[46px] h-[46px] rounded-xl glass flex items-center justify-center hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-[20px] p-8 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-[13px] font-semibold text-muted mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name" name="name" type="text" required placeholder="Your name"
                    className="w-full px-3.5 py-3 rounded-[10px] border border-cardBorder bg-white/[0.04] text-white text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[13px] font-semibold text-muted mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email" name="email" type="email" required placeholder="you@example.com"
                    className="w-full px-3.5 py-3 rounded-[10px] border border-cardBorder bg-white/[0.04] text-white text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-[13px] font-semibold text-muted mb-1.5 block">
                  Subject
                </label>
                <input
                  id="subject" name="subject" type="text" required placeholder="What's this about?"
                  className="w-full px-3.5 py-3 rounded-[10px] border border-cardBorder bg-white/[0.04] text-white text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-[13px] font-semibold text-muted mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message" name="message" required placeholder="Tell me about your project..." rows={5}
                  className="w-full px-3.5 py-3 rounded-[10px] border border-cardBorder bg-white/[0.04] text-white text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={status.type === "sending"}
                className="py-3 rounded-xl text-sm font-semibold text-white bg-brand-gradient hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status.type === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status.message && (
                <p
                  className={`text-[13px] ${
                    status.type === "error" ? "text-red-400" : "text-accent"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
