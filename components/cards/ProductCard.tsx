import { ArrowRight } from "lucide-react";

export function ProductCard({ product }: { product: any }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-4">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
        <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div>
        <div className="text-xs font-semibold text-accent mb-1 uppercase tracking-wider">{product.category}</div>
        <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">{product.name}</h3>
        <p className="text-muted font-medium mt-1">{product.price}</p>
      </div>
    </div>
  );
}
