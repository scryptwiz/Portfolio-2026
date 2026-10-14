import Image from "next/image";
import { hiring, profile } from "@/lib/content";
import { ExternalLink } from "./external-link";

export function Hero() {
  return (
    <section id="top" className="section-anchor mx-auto max-w-6xl px-5 pt-12 pb-6 md:px-8 md:pt-20">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.72fr)] lg:gap-16">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] text-oxide uppercase">
            {profile.role}
          </p>
          <h1 className="mt-4 text-[clamp(3.15rem,12vw,5.6rem)] leading-[0.88] font-medium tracking-[-0.045em]">
            Kelvin
            <br />
            Ajayi
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
            {profile.aim}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.links.email}
              className="inline-flex h-11 items-center bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-oxide"
            >
              Email me
            </a>
            <a
              href={profile.links.resume}
              download="Kelvin-Ajayi-Resume.pdf"
              className="inline-flex h-11 items-center border border-ink/15 px-5 text-sm font-medium transition-colors hover:border-oxide hover:text-oxide"
            >
              Resume
              <span className="sr-only"> (PDF download)</span>
            </a>
            <ExternalLink
              href={profile.links.linkedin}
              className="inline-flex h-11 items-center border border-ink/15 px-5 text-sm font-medium transition-colors hover:border-oxide hover:text-oxide"
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink
              href={profile.links.github}
              className="inline-flex h-11 items-center border border-ink/15 px-5 text-sm font-medium transition-colors hover:border-oxide hover:text-oxide"
            >
              GitHub
            </ExternalLink>
          </div>
        </div>

        <figure>
          <div className="overflow-hidden border border-line bg-[linear-gradient(165deg,var(--paper-deep),var(--paper-sink))]">
            <Image
              src="/kelvin.jpg"
              alt="Portrait of Kelvin Ajayi"
              width={768}
              height={1024}
              priority
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.68rem] tracking-[0.14em] text-faint uppercase">
            <span>Kelvin Ajayi</span>
            <span>Nigeria</span>
          </figcaption>
        </figure>
      </div>

      <dl className="mt-12 grid border-y border-line sm:grid-cols-3">
        {hiring.map((item) => (
          <div
            key={item.label}
            className="border-b border-line px-0 py-5 last:border-b-0 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
          >
            <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-oxide uppercase">
              {item.label}
            </dt>
            <dd className="mt-2 text-base leading-snug">
              {item.href ? (
                <a href={item.href} className="underline decoration-line underline-offset-4 hover:decoration-oxide">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
