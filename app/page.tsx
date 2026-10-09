import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { HeroSplit } from "@/components/heroes/HeroSplit";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTASection } from "@/components/sections/CTASection";
import { FooterModern } from "@/components/footers/FooterModern";
import { ProductCard } from "@/components/cards/ProductCard";
import { siteConfig } from "@/lib/site.config";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="pt-20">
      <NavbarClassic />
      <HeroSplit />
      <TrustBar />
      
      {/* Featured Products Snippet */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Featured Collections</h2>
              <p className="text-muted">Handpicked premium pieces for your home.</p>
            </div>
            <Link href="/catalogue" className="hidden md:flex items-center gap-2 font-medium text-accent hover:text-primary transition-colors">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.products.slice(0,3).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* About the PSMFC MOU Snippet */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-lg border border-border">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Home interior" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-primary mb-6">Empowering Public Workers</h2>
            <p className="text-lg text-muted mb-8">{siteConfig.business.description}</p>
            <ul className="space-y-4 mb-8">
              {['Flexible credit terms', 'Wide selection of premium furniture', 'Dedicated support for PSMFC members'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 className="text-accent" size={20} /> {item}
                </li>
              ))}
            </ul>
            <Link href="/financing" className="inline-flex bg-surface border border-border text-primary px-8 py-4 rounded-full font-bold hover:bg-border transition-colors">
              Learn about Financing
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Ready to upgrade your space?" subtitle="Visit our Livingstone showroom or browse our catalogue online today." buttonText="Contact Us" href="/contact" />
      <FooterModern />
    </main>
  );
}
