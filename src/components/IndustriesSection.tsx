import barbershopImg from "@/assets/industry-barbershop.jpg";
import salonImg from "@/assets/industry-salon.jpg";
import clinicImg from "@/assets/industry-clinic.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  { label: "Barberías", image: barbershopImg },
  { label: "Salones de belleza", image: salonImg },
  { label: "Clínicas", image: clinicImg },
];

const IndustriesSection = () => {
  return (
    <section id="industrias" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Una solución para <span className="text-gold">cada industria</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Barberías, Salones de belleza, Clínicas y más. FLOWTIME se adapta a tu modelo de negocio.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((ind, index) => (
            <ScrollReveal
              key={ind.label}
              delay={index * 130}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={ind.image}
                alt={ind.label}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <h3 className="absolute bottom-4 left-5 text-lg font-bold">
                {ind.label}
              </h3>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
