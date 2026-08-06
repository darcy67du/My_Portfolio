import { Code2, LayoutTemplate, Server, Database, Cloud, TestTube2, Wrench, LucideIcon } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { skills } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Code2, LayoutTemplate, Server, Database, Cloud, TestTube2, Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            Skills
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight mb-4">
            A well-rounded, production-ready toolkit.
          </h2>
          <p className="text-muted max-w-[64ch] text-[16px] leading-relaxed">
            From languages to cloud infrastructure, here&apos;s what I reach for when building
            something real.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <RevealOnScroll key={group.category} delay={i * 0.05}>
                <div className="glass rounded-[20px] p-7 h-full">
                  <h3 className="text-[17px] font-bold mb-4 flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-[10px] bg-brand-gradient flex items-center justify-center text-white">
                      <Icon size={17} />
                    </span>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[12.5px] font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-cardBorder text-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
