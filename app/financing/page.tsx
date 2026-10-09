import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { FooterModern } from "@/components/footers/FooterModern";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ShieldCheck, Wallet, Clock } from "lucide-react";

export default function Financing() {
  return (
    <main className="pt-20 bg-background">
      <NavbarClassic />
      
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary mb-6 border border-border">
            PSMFC Partnership
          </div>
          <h1 className="text-5xl font-serif font-bold text-primary mb-8">Exclusive Government Financing</h1>
          <p className="text-xl text-muted leading-relaxed">
            FurnCity Livingstone is proud to partner with the Public Service Micro Finance Company (PSMFC) to provide accessible, flexible furniture financing to eligible Public Service and Parastatal Workers across Zambia.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-[2rem] border border-border text-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6"><ShieldCheck className="text-accent" size={32}/></div>
            <h3 className="font-bold text-xl mb-4">Official MOU</h3>
            <p className="text-muted">Fully authorized agreement ensuring safe, deducted payments directly aligned with government payroll.</p>
          </div>
          <div className="bg-surface p-8 rounded-[2rem] border border-border text-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6"><Wallet className="text-accent" size={32}/></div>
            <h3 className="font-bold text-xl mb-4">Flexible Terms</h3>
            <p className="text-muted">Choose repayment structures that fit your monthly budget without compromising on quality.</p>
          </div>
          <div className="bg-surface p-8 rounded-[2rem] border border-border text-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6"><Clock className="text-accent" size={32}/></div>
            <h3 className="font-bold text-xl mb-4">Instant Approval</h3>
            <p className="text-muted">Quick processing for eligible workers means your new furniture is delivered faster.</p>
          </div>
        </div>
      </section>

      <CTASection title="Ready to apply?" subtitle="Bring your required documents to our Livingstone branch today." buttonText="View Store Location" href="/contact" />
      <FooterModern />
    </main>
  );
}
