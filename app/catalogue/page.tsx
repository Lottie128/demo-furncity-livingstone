import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { FooterModern } from "@/components/footers/FooterModern";
import { ProductCard } from "@/components/cards/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/site.config";

export default function Catalogue() {
  return (
    <main className="pt-20 bg-background">
      <NavbarClassic />
      <section className="bg-surface py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Our Catalogue</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">Browse our extensive collection of premium furniture designed for modern Zambian homes. All items available via PSMFC financing.</p>
        </div>
      </section>
      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <aside className="hidden md:block space-y-8 pr-8 border-r border-border">
            <div>
              <h3 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Categories</h3>
              <ul className="space-y-3 text-muted">
                <li><a href="#" className="text-accent font-medium">All Furniture</a></li>
                <li><a href="#" className="hover:text-primary">Living Room</a></li>
                <li><a href="#" className="hover:text-primary">Bedroom</a></li>
                <li><a href="#" className="hover:text-primary">Dining</a></li>
                <li><a href="#" className="hover:text-primary">Office</a></li>
              </ul>
            </div>
          </aside>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-8">
            {siteConfig.products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <CTASection title="Can't find what you're looking for?" subtitle="Visit our store in Livingstone to see our complete inventory." buttonText="Get Directions" href="/contact" />
      <FooterModern />
    </main>
  );
}
