import { credentials, profile } from "@/lib/content";
import { ExternalLink } from "./external-link";

export function Direction() {
  const course = credentials[0];
  const progress = Math.round((course.progress / course.total) * 100);

  return (
    <section id="direction" className="section-anchor bg-pine text-pine-text">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[0.72rem] tracking-[0.18em] text-lime uppercase">
          Direction
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
          Full-time mobile and fullstack. An AI engineering internship, too.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-lg leading-relaxed text-pine-muted">
            Provolo retrieves real proposals before it writes. Lexicon generates articles through the OpenAI API. The course is how that work gets deeper: models, evaluation, and production.
          </p>
          <p className="text-lg leading-relaxed">
            The role I am growing toward is forward deployed engineer.
            <sup className="text-lime">1</sup> What I can start now is a full-time mobile or fullstack role, or an AI engineering internship.
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-pine-text/15 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-lime uppercase">
              {course.status}
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{course.name}</h3>
            <p className="mt-1 text-sm text-pine-muted">{course.source}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-pine-muted">{course.detail}</p>
            <div
              className="mt-6 h-1.5 max-w-md bg-pine-text/10"
              role="meter"
              aria-valuenow={course.progress}
              aria-valuemin={0}
              aria-valuemax={course.total}
              aria-label={`${course.name}, week ${course.progress} of ${course.total}`}
            >
              <div className="h-full bg-lime" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 font-mono text-[0.68rem] tracking-[0.14em] text-pine-muted uppercase">
              Week {course.progress} / {course.total}
            </p>
            <ExternalLink
              href={course.href}
              className="mt-5 inline-flex font-mono text-[0.68rem] tracking-[0.14em] text-lime uppercase underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
            >
              Course repo
            </ExternalLink>
          </article>

          <article className="border border-dashed border-pine-text/25 bg-[linear-gradient(165deg,rgb(19_36_31),rgb(24_46_40))] p-6 md:p-8">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pine-muted uppercase">
              Open slot
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">
              The next credential lands here.
            </h3>
            <p className="mt-4 leading-relaxed text-pine-muted">
              This row is reserved for certificates that finish after the LLM course. The section grows as the credentials do.
            </p>
          </article>
        </div>

        <div id="contact" className="section-anchor mt-16 border-t border-pine-text/15 pt-12">
          <h2 className="max-w-3xl text-4xl leading-[0.95] font-medium tracking-[-0.04em] md:text-6xl">
            If you are hiring, write to me.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-muted">
            I am open to full-time mobile and fullstack roles, and to an AI engineering internship, remote from Nigeria.
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
            <sup className="text-lime">1</sup> Forward deployed engineering means embedding with a customer and shipping the AI system against their real constraints: infrastructure, data, and the people who have to use it.
          </p>
          <p className="mt-8 font-mono text-[0.68rem] tracking-[0.14em] text-pine-muted uppercase">
            Nigeria · Remote · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
