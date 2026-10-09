import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { HeroSplit } from "@/components/heroes/HeroSplit";
import { TrustBar } from "@/components/sections/TrustBar";
import { FooterModern } from "@/components/footers/FooterModern";

export default function Page() {
  return (
    <main>
      <NavbarClassic />
      <HeroSplit />
      <TrustBar />
      <FooterModern />
    </main>
  );
}
