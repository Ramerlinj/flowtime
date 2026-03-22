import { CalendarDays, MessageSquare, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: CalendarDays,
    title: "0 Inasistencias",
    description: "Recordatorios automáticos por WhatsApp que mantienen tu agenda llena y productiva.",
  },
  {
    icon: MessageSquare,
    title: "Productividad",
    description: "Deja de responder mensajes. Tus clientes agendan cuando quieran, tú te enfocas en crecer.",
  },
  {
    icon: BarChart3,
    title: "Control Total",
    description: "Tus métricas de dinero y clientes en un solo lugar. Decisiones basadas en datos reales.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="soluciones" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Problema vs <span className="text-gold">Solución</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Todo lo que necesitas para profesionalizar tu negocio
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, index) => (
            <ScrollReveal
              key={f.title}
              delay={index * 120}
              className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-6 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-3">
                <f.icon size={24} className="text-gold" />
              </div>
              <h3 className="mb-3 text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
