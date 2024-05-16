'use client';
import { useState, useEffect, ReactNode } from 'react';

type CarouselProps = {
  children: ReactNode[];
  dots: boolean;
  placement?: 'center' | 'left' | 'right';
};

const ContentCarousel = ({ children, dots }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex = children.length - 1;

    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    }

    if (activeIndex > lastIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex, children]);

  return (
    <div className="carousel-container">
      <div className="carousel-content">{children[activeIndex]}</div>
      {(dots && (
        <div className="carousel-dots">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
            ></button>
          ))}
        </div>
      )) || (
        <div className="carousel-nav text-inherit">
          <button onClick={() => setActiveIndex((prev) => prev - 1)}>Prev</button>
          <button onClick={() => setActiveIndex((prev) => prev + 1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default ContentCarousel;
