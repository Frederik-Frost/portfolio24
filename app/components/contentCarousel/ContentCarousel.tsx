'use client';
import { useState, useEffect, ReactNode } from 'react';

type CarouselProps = {
  children: ReactNode[];
  dots: boolean;
  placement?: 'center' | 'left' | 'right';
  getActiveIndex: (index: number) => void;
};

const ContentCarousel = ({ children, dots, getActiveIndex }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const emitActiveIndex = (index: number) => {
    getActiveIndex(index);
  };

  useEffect(() => {
    const lastIndex = children.length - 1;

    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    }

    if (activeIndex > lastIndex) {
      setActiveIndex(0);
    }

    emitActiveIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className="carousel-container flex flex-col items-stretch ">
      <div className="carousel-content">{children[activeIndex]}</div>

      <div className="">
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
    </div>
  );
};

export default ContentCarousel;
