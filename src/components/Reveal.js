'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

export default function Reveal({ children, width = "100%" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it enters
      }
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

  // On the server, we want the content to be visible by default for SEO and accessibility
  // On the client, we'll start it as hidden until the observer triggers it
  return (
    <div 
      ref={ref} 
      className={`${styles.reveal} ${(isVisible || !hasMounted) ? styles.visible : ''}`}
      style={{ width }}
    >
      {children}
    </div>
  );
}
