import React from "react";

type CarouselItemProps = {
  children?: any;
};

const ContentCarouselItem: React.FC<CarouselItemProps> = ({ children }: CarouselItemProps ) => {
  return <>{children}</>;
};

export default ContentCarouselItem;
