import { stack, studies } from "@/lib/content";
import { ExternalLink } from "./external-link";

export function Range() {
  return (
    <section id="projects" className="section-anchor mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] text-oxide uppercase">
            Projects
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-medium tracking-[-0.03em] md:text-4xl">
            Smaller proofs of range.
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Product builds and the smaller systems around them.
          </p>
          <ul className="mt-8 border-t border-line">
            {studies.map((project) => (
              <li key={project.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-oxide uppercase">
                  {project.meta}
                </p>
                <div>
                    {project.href ? (
                      <ExternalLink
                        href={project.href}
                        className="mt-1 inline-block font-medium tracking-tight hover:text-oxide"
                      >
                        {project.name}
                      </ExternalLink>
                    ) : (
                      <p className="mt-1 font-medium tracking-tight">{project.name}</p>
                    )}
                    <p className="mt-1 text-sm leading-relaxed text-muted">{project.detail}</p>
                    {project.links ? (
                      <div className="mt-2 flex gap-4">
                        {project.links.map((link) => (
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
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] text-oxide uppercase">
            Tools on the job
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-medium tracking-[-0.03em]">
            What I reach for.
          </h2>
          <dl className="mt-8">
            {stack.map((group) => (
              <div key={group.label} className="border-t border-line py-4">
                <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                  {group.label}
                </dt>
                <dd className="mt-2 leading-relaxed">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
