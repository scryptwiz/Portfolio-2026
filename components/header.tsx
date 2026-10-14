import { profile } from "@/lib/content";
import { ExternalLink } from "./external-link";

const sections = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#direction", label: "Direction" },
];

const profiles = [
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: profile.links.x, label: "X" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 md:px-8">
        <a href="#top" className="shrink-0 text-sm font-medium tracking-tight">
          Kelvin Ajayi
        </a>
        <nav aria-label="Page" className="flex items-center gap-3 sm:gap-5">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] whitespace-nowrap text-muted transition-colors hover:text-ink sm:text-sm"
            >
              {item.label}
            </a>
          ))}
          <span aria-hidden className="hidden h-3 w-px bg-line sm:block" />
          {profiles.map((item) => (
            <ExternalLink
              key={item.href}
              href={item.href}
              className="hidden font-mono text-[0.7rem] tracking-[0.14em] text-ink uppercase transition-colors hover:text-oxide sm:inline"
            >
              {item.label}
            </ExternalLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
