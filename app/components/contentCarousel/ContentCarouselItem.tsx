'use client';

import React from 'react';
import { useState, useEffect,  } from 'react';


type CarouselItemProps = {
  children?: any;
  currentIndex: number;
};

const ContentCarouselItem: React.FC<CarouselItemProps> = ({
  children,
  currentIndex,
}: CarouselItemProps) => {


  const [animateDirection, setAnimateDirection] = useState<string>('right');

  useEffect(() => {
    if (currentIndex === 0) {
      setAnimateDirection('left');
    } else if (currentIndex === 1) {
      setAnimateDirection('right');
    }
  }, [currentIndex]);

  return <>{children}</>;
};

export default ContentCarouselItem;
