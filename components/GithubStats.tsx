import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { GITHUB_USERNAME } from "@/lib/data";

const cards = [
  {
    alt: "Darcy Dushime's GitHub stats",
    src: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&bg_color=00000000`,
  },
  {
    alt: "Darcy Dushime's top languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`,
  },
  {
    alt: "Darcy Dushime's GitHub streak",
    src: `https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=00000000`,
  },
  {
    alt: "Darcy Dushime's GitHub activity graph",
    src: `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true&bg_color=00000000`,
  },
];

export default function GithubStats() {
  return (
    <section id="github" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <div className="text-[13px] font-bold text-accent tracking-[0.14em] uppercase mb-3">
            GitHub Statistics
          </div>
          <h2 className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-tight">
            Live from{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              github.com/{GITHUB_USERNAME}
            </a>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <RevealOnScroll key={c.src} delay={i * 0.06}>
              <div className="glass rounded-[20px] p-5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={c.alt} loading="lazy" className="w-full rounded-xl" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
