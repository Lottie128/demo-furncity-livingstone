import { NavbarClassic } from "@/components/navigation/NavbarClassic";
import { FooterModern } from "@/components/footers/FooterModern";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site.config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-20 bg-background">
      <NavbarClassic />
      
      <section className="py-24 px-6 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-8">Get in touch</h1>
            <p className="text-xl text-secondary/80 mb-12 max-w-lg">
              Visit our showroom to experience the quality firsthand, or send us a message to inquire about PSMFC financing and delivery.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0"><MapPin size={20} /></div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-secondary/70 mt-1 max-w-xs">{siteConfig.business.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0"><Phone size={20} /></div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-secondary/70 mt-1">{siteConfig.business.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0"><Clock size={20} /></div>
                <div>
                  <h3 className="font-semibold text-lg">Operating Hours</h3>
                  <p className="text-secondary/70 mt-1">Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <FooterModern />
    </main>
  );
}
