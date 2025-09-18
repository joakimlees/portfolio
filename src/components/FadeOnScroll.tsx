import { useEffect, useRef, useState } from "react";
import { FadeOnScrollWrapper } from "./styles/index";

export function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <FadeOnScrollWrapper ref={ref} $visible={visible}>
      {children}
    </FadeOnScrollWrapper>
  );
}
