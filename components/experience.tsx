import { education, experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-anchor border-t border-line bg-paper-deep"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[0.72rem] tracking-[0.18em] text-oxide uppercase">
          Experience
        </p>
        <h2 className="mt-3 max-w-xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-4xl">
          The short version of the same story.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A compact timeline. The longer version of each role is in the work above, and on LinkedIn.
        </p>

        <ol className="mt-10 border-t border-line">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <p className="font-mono text-[0.68rem] tracking-[0.12em] text-muted uppercase md:col-span-3">
                {role.when}
              </p>
              <div className="md:col-span-4">
                <p className="font-medium tracking-tight">{role.title}</p>
                <p className="text-muted">{role.company}</p>
              </div>
              <p className="leading-relaxed text-muted md:col-span-5">{role.summary}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-t border-line pt-8">
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-oxide uppercase">
            {education.when}
          </p>
          <p className="mt-2 font-medium tracking-tight">{education.title}</p>
          <p className="text-muted">
            {education.school}
            <span className="px-2 text-faint">/</span>
            {education.place}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Focus: {education.focus}
          </p>
        </div>
      </div>
    </section>
  );
}
