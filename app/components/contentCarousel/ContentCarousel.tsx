"use client";
import { useState, useEffect, ReactNode } from "react";

type CarouselProps = {
  children: ReactNode[];
};

const ContentCarousel = ({ children }: CarouselProps) => {
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

      <div className="carousel-nav">
        <button onClick={() => setActiveIndex((prev) => prev - 1)}>Prev</button>
        <button onClick={() => setActiveIndex((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );

  //   return children.map((item: any, index: number) => (
  //     <div key={index} className="carousel-item">
  //       <div>{index} :::: </div>
  //       <div>{item}</div>
  //     </div>
  //   ));
};

export default ContentCarousel;
