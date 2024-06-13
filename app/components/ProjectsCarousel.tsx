'use client';
import ContentCarousel from '@/app/components/contentCarousel/ContentCarousel';
import ContentCarouselItem from '@/app/components/contentCarousel/ContentCarouselItem';
import { motion, AnimatePresence } from 'framer-motion';

import { FaCode, FaAnglesRight } from 'react-icons/fa6';

import { useState } from 'react';
import { Project } from '@/types/Project';

import { useEffect, useRef } from 'react';

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectsCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  const usePrevious = (value: number) => {
    const ref = useRef<number>(0);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const previousIndex: number = usePrevious(activeIndex);

  useEffect(() => {
    console.log('previousIndex', previousIndex);
    console.log('currentIndex', activeIndex);
  }, [activeIndex]);
  console.log('project', projects);
  return (
    <div className="bg-deep-purple dark:bg-dark-gray p-5 rounded-2xl min-w-[340px] shadow-md text-mid-gray grow">
      <ContentCarousel dots={true} placement="center" getActiveIndex={handleActiveIndex}>
        {projects.map((project, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ContentCarouselItem currentIndex={activeIndex}>
                <div className="min-h-[180px] group">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="brightness-50 group-hover:brightness-100 transition-all duration-400 ease-in-out ">
                        {(project.imageUrl && (
                          <img
                            src={project.imageUrl}
                            alt={project.name}
                            width={64}
                            height="auto"
                            className="aspect-square object-cover rounded-lg"
                          />
                        )) || (
                          <div className=" w-[64px] h-[64px] flex items-center justify-center bg-white rounded-lg">
                            <FaCode className="text-mid-gray text-3xl" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-ghost-white text-lg font-bold tracking-wider">
                        {project.name}
                      </h3>
                    </div>
                    <a
                      className="btn btn-underlined-reverse font-normal"
                      href={`projects/${project.slug.current}`}
                    >
                      <span>Read more</span>
                      {/* <FaAnglesRight /> */}
                    </a>
                  </div>
                  <p className="mt-4">{project.shortDescription}</p>
                </div>
              </ContentCarouselItem>
            </motion.div>
          </AnimatePresence>
        ))}
      </ContentCarousel>
    </div>
  );
}
