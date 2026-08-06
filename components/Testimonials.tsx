import RevealOnScroll from "./RevealOnScroll";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            Testimonials
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight mb-4">
            What people say after working together.
          </h2>
          <p className="text-muted max-w-[64ch] text-[16px] leading-relaxed">
            Sample testimonials — replace with real client or collaborator quotes as they come in.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.08}>
              <div className="glass rounded-[20px] p-7 h-full flex flex-col">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-[14px] text-muted leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
