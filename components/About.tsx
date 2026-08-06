import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.4fr] gap-14 items-center">
        <RevealOnScroll className="glass rounded-[20px] p-9">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center py-4 px-2">
              <div className="text-2xl font-extrabold gradient-text">9+</div>
              <div className="text-xs text-muted mt-1">Repositories</div>
            </div>
            <div className="text-center py-4 px-2">
              <div className="text-2xl font-extrabold gradient-text">6+</div>
              <div className="text-xs text-muted mt-1">Projects Shipped</div>
            </div>
            <div className="text-center py-4 px-2">
              <div className="text-2xl font-extrabold gradient-text">3+</div>
              <div className="text-xs text-muted mt-1">Years Coding</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-7">
            {["🤖 Artificial Intelligence", "☁️ Cloud Computing", "🔐 Cybersecurity"].map((t) => (
              <span
                key={t}
                className="text-[13px] font-semibold px-4 py-2 rounded-full glass text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            About Me
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight mb-5">
            Engineering things that actually get used.
          </h2>
          <p className="text-muted text-[16px] leading-[1.8] mb-4">
            I&apos;m a <strong className="text-white">Software Engineering student</strong> based
            in Kigali, Rwanda, with a deep passion for building software that solves real
            problems — not just technically impressive demos. Whether it&apos;s a payment
            system, a notification engine, or a small business&apos;s first online store, I
            care about the same thing: does it actually work for the people using it.
          </p>
          <p className="text-muted text-[16px] leading-[1.8] mb-4">
            My experience spans <strong className="text-white">full-stack web development</strong>,
            from PHP and MySQL-backed systems to modern React and Node.js applications, along
            with <strong className="text-white">mobile development in Flutter</strong>. I enjoy
            the full lifecycle of a product — architecture, implementation, and the unglamorous
            but critical work of testing.
          </p>
          <p className="text-muted text-[16px] leading-[1.8]">
            Lately I&apos;ve been going deeper into{" "}
            <strong className="text-white">Artificial Intelligence, Cloud Computing, and
            Cybersecurity</strong> — areas I believe will define the next decade of software,
            and where I want to keep growing as an engineer.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
