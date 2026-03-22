const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div>
          <span className="text-lg font-extrabold text-gold">GABO'S TIME</span>
          <p className="mt-1 text-xs text-muted-foreground">
            Desarrollando el futuro del flujo empresarial
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground sm:items-end">
          <span>© 2026 GABO'S TIME. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-foreground">Privacidad</a>
            <a href="#" className="transition-colors hover:text-foreground">Términos</a>
            <a href="#" className="transition-colors hover:text-foreground">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
