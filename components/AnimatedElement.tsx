"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedElementProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const AnimatedElement = ({ children, className, as: Component = 'div' }: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if(ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold: 0.1 } // 10%表示されたら発火
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={cn('scroll-animate', isVisible && 'is-visible', className)}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;

