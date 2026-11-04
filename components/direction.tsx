import { credentials, profile } from "@/lib/content";
import { ExternalLink } from "./external-link";

export function Direction() {
  const course = credentials[0];

  return (
    <section id="direction" className="section-anchor bg-pine text-pine-text">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[0.72rem] tracking-[0.18em] text-lime uppercase">
          Direction
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
          Interested in robotics and autonomous systems.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-lg leading-relaxed text-pine-muted">
            Provolo retrieves real proposals before it writes. Lexicon generates articles through the OpenAI API. That is applied AI already in production. The certificate below is extra.
          </p>
          <p className="text-lg leading-relaxed">
            Software, hardware, and intelligence meet there.
            <sup className="text-lime">1</sup> The roles I am looking at now are mobile, backend, and AI engineering. Fullstack is welcome when the job is the whole product.
          </p>
        </div>

        <article className="mt-14 border-t border-pine-text/15 pt-10">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-lime uppercase">
              {course.status}
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{course.name}</h3>
            <p className="mt-1 text-sm text-pine-muted">{course.source}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {course.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  className="inline-flex font-mono text-[0.68rem] tracking-[0.14em] text-lime uppercase underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </article>

        <div id="contact" className="section-anchor mt-16 border-t border-pine-text/15 pt-12">
          <h2 className="max-w-3xl text-4xl leading-[0.95] font-medium tracking-[-0.04em] md:text-6xl">
            If you are hiring, write to me.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-muted">
            I am open to mobile, backend, and AI engineering roles, and to fullstack when the job is the whole product. Remote from Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.links.email}
              className="inline-flex h-12 items-center bg-lime px-5 text-sm font-medium text-pine transition-colors hover:bg-[#d7e48a]"
            >
              {profile.email}
            </a>
            <a
              href={profile.links.resume}
              download="Kelvin-Ajayi-Resume.pdf"
              className="inline-flex h-12 items-center border border-pine-text/25 px-5 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              Resume
              <span className="sr-only"> (PDF download)</span>
            </a>
            <ExternalLink
              href={profile.links.linkedin}
              className="inline-flex h-12 items-center border border-pine-text/25 px-5 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink
              href={profile.links.github}
              className="inline-flex h-12 items-center border border-pine-text/25 px-5 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={profile.links.x}
              className="inline-flex h-12 items-center border border-pine-text/25 px-5 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              X
            </ExternalLink>
            <a
              href={profile.links.phone}
              className="inline-flex h-12 items-center border border-pine-text/25 px-5 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              {profile.phone}
            </a>
          </div>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-pine-muted">
            <sup className="text-lime">1</sup> Robotics, for me, is where software meets hardware: sensing, control, and a model that has to work under real constraints.
          </p>
          <p className="mt-8 font-mono text-[0.68rem] tracking-[0.14em] text-pine-muted uppercase">
            Nigeria · Remote · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
