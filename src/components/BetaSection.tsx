import { useState } from "react";
import { toast } from "sonner";

const BetaSection = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Te has registrado exitosamente!");
    setEmail("");
    setCategory("");
    setWhatsapp("");
  };

  return (
    <section id="beta" className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="glow-gold rounded-2xl border border-primary/30 bg-card p-8 sm:p-12">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-gold">
              Cupos Limitados
            </span>
            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
              Únete al{" "}
              <span className="text-gold">lanzamiento Beta</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Estamos seleccionando a los primeros{" "}
              <span className="font-semibold text-foreground">20 fundadores</span>{" "}
              para el lanzamiento Beta. Acceso exclusivo, precios especiales y soporte prioritario.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Correo Electrónico <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Categoría de Negocio <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ej: Barbería, Spa, Clínica..."
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                WhatsApp <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Ej: 000-000-0000"
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="gradient-gold w-full rounded-lg py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar mi lugar VIP
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Al unirte aceptas recibir comunicaciones exclusivas sobre FLOWTIME
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
