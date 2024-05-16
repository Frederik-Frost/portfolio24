import { useEffect, useState } from 'react';

export function useScrollPosition(initialScrollPosition: number = 0): number {
  const [scrollPosition, setScrollPosition] = useState<number>(initialScrollPosition);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
