import { Direction } from "@/components/direction";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Range } from "@/components/range";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Experience />
      <Range />
      <Direction />
    </main>
  );
}
