import { Check } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_80%_55%/0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:py-32">
        {/* Text */}
        <ScrollReveal className="flex-1 space-y-8">
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            FLOWTIME: Tu negocio en su estado máximo de{" "}
            <span className="text-gold">fluidez</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            La plataforma definitiva para profesionales que escalan. Gestiona citas, automatiza pagos y fideliza clientes en un solo flujo inteligente.
          </p>
          <a
            href="#beta"
            className="gradient-gold inline-block rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Unirme a la lista de espera VIP
          </a>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-gold" /> Acceso anticipado exclusivo
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-gold" /> Descuentos de fundador
            </span>
          </div>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal className="flex-1" delay={180}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
            <img
              src={heroPhone}
              alt="FLOWTIME app preview"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
