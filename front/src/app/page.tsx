import Hero from "@/components/Hero/Hero";
import Section1 from "@/components/Section-1/Section-1";
import Section2 from "@/components/Section-2/Section-2";
import Section3 from "@/components/Section-3/Section-3";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section3 />
      <Section1 />
      <Section2 />
    </div>
  );
}
