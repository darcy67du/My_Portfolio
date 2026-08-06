import RevealOnScroll from "./RevealOnScroll";
import { GraduationCap, Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            Education
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight">
            Formal training, put to practical use.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="glass rounded-[20px] p-8 flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <div className="text-[19px] font-bold mb-1">
                Bachelor&apos;s Degree in Software Engineering
              </div>
              <div className="text-muted text-sm mb-0.5">
                University of Lay Adventists of Kigali (UNILAK)
              </div>
              <div className="text-muted text-sm">Kigali, Rwanda</div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-3 gap-5 mt-8">
          {certifications.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="glass rounded-[20px] p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto mb-3.5 rounded-xl bg-brand-gradient flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <h4 className="text-[15px] font-bold mb-1">{c.name}</h4>
                <p className="text-xs text-muted">{c.issuer} · {c.year}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
