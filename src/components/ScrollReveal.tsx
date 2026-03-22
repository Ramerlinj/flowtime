import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  duration = 700,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const transitionStyles: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={ref}
      style={transitionStyles}
      className={cn(
        "transform-gpu transition-all ease-out will-change-transform motion-reduce:transform-none motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[2px] motion-reduce:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
