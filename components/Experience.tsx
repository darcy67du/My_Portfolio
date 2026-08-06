import RevealOnScroll from "./RevealOnScroll";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            Experience
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight">
            A quick history of how I got here.
          </h2>
        </RevealOnScroll>

        <div className="relative pl-9">
          <div className="absolute left-[6px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          {experience.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1} className="relative pb-11 last:pb-0">
              <div className="absolute -left-9 top-1 w-3.5 h-3.5 rounded-full bg-bg border-[3px] border-primary" />
              <div className="glass rounded-[20px] p-6">
                <div className="text-xs font-bold text-accent tracking-[0.08em] uppercase mb-1.5">
                  {item.date}
                </div>
                <div className="text-lg font-bold mb-1.5">{item.title}</div>
                <div className="text-sm text-muted leading-relaxed">{item.description}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
