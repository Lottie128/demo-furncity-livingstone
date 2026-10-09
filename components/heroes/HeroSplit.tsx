import { siteConfig } from "@/lib/site.config";
import { ArrowRight } from "lucide-react";

export function HeroSplit() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary mb-6 border border-border">
            {siteConfig.business.industry}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-primary mb-6 leading-[1.1]">
            Elevating your <span className="text-accent">living spaces.</span>
          </h1>
          <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
            {siteConfig.business.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#catalogue" className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all gap-2">
              View Collection <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=80" 
            alt="Premium Furniture Showroom" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
