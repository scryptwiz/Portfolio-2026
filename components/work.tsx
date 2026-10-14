import { work } from "@/lib/content";
import { ExternalLink } from "./external-link";

export function Work() {
  return (
    <section id="work" className="section-anchor mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] text-oxide uppercase">
            Selected work
          </p>
          <h2 className="mt-3 max-w-xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-4xl">
            Production work a hiring manager can check.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted">
          Five roles, newest first. Personal builds are further down the page.
        </p>
      </div>

      <div className="mt-10 border-b border-line">
        {work.map((item) => (
          <article
            key={item.name}
            className="group border-t border-line py-10 transition-colors hover:bg-paper-deep md:py-12"
          >
            <div className="grid gap-5 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="font-mono text-sm text-oxide transition-transform motion-safe:group-hover:translate-x-1">
                  {item.index}
                </p>
                <p className="mt-3 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                  {item.when}
                </p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-[2rem] leading-none font-medium tracking-[-0.03em] md:text-4xl">
                    {item.name}
                  </h3>
                  {item.links ? (
                    <div className="flex gap-4">
                      {item.links.map((link) => (
                        <ExternalLink
                          key={link.href}
                          href={link.href}
                          className="font-mono text-[0.68rem] tracking-[0.14em] text-oxide uppercase underline decoration-oxide/30 underline-offset-4 hover:decoration-oxide"
                        >
                          {link.label}
                        </ExternalLink>
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="mt-3 text-muted">
                  {item.role}
                  <span className="px-2 text-line">/</span>
                  {item.context}
                </p>
                <ul className="mt-6 max-w-3xl space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-[0.7rem] h-px w-3 shrink-0 bg-oxide" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[0.68rem] tracking-[0.12em] text-faint uppercase">
                  {item.stack.join("  ·  ")}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
