import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Industrias", href: "#industrias" },
  { label: "Únete", href: "#beta" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-xl font-extrabold tracking-tight text-gold">
          FLOWTIME
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#beta"
            className="gradient-gold rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Lista VIP
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#beta"
            onClick={() => setMobileOpen(false)}
            className="gradient-gold rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Lista VIP
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
