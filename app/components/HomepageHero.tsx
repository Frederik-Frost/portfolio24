'use client';

import { FaMoon, FaSun, FaPhoneAlt } from 'react-icons/fa';
import { TbForklift } from 'react-icons/tb';
import { MdForklift } from 'react-icons/md';
import { PiHandWavingFill } from 'react-icons/pi';
import { HeroBlock } from '@/types/HeroBlock';

import { useScroll, motion, useTransform, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/app/utilities/hooks/useMediaQueryHook';

type HeroProps = {
  heroData: HeroBlock;
};

export default function HomepageHero({ heroData }: HeroProps) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [50, 100], [0, -50]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const handleScrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="max-w-screen-lg m-auto pt-32 md:pt-72 flex flex-col items-center  sm:px-4 lg:px-0 relative">
      <h1 className="font-poppins text-clamp-title  font-bold max-w-[400px] tracking-[4px] mt-4 text-deep-purple dark:text-ghost-white  text-center">
        {heroData.title}
      </h1>
      <h2 className={' text-lg md:text-2xl px-2 text-center '}>{heroData.subtitle}</h2>

      <div className="flex flex-row gap-x-4 gap-y-2 flex-wrap mt-8 justify-center">
        <button className="btn-primary btn-icon ">
          <span>Say hi</span>
          <PiHandWavingFill />
        </button>
        <button className="btn-primary-outline btn-icon ">
          <span>Check my work</span>
          <TbForklift className="" />
        </button>
        
      </div>

      <motion.div
        style={{ y: y, x: '-50%', opacity: opacity}}
        className="absolute top-full left-1/2 -translate-x-1/2  w-auto flex items-center justify-center z-[0] overflow-hidden cursor-pointer group"
        onClick={() => {
          handleScrollToNextSection();
        }}
      >
        {/* reveal arrow */}
        <motion.div
          className="absolute w-full h-full bg-white dark:bg-dark-bg z-[-1]"
          initial={{ y: '10%' }}
          animate={{ y: '100%', transition: { duration: 1, delay: 0.5 } }}
        ></motion.div>

        <img
          src="pencil-arrow.png"
          alt="pencil arrow"
          className=" z-[-2] sm:h-[150px] md:h-[300px] w-auto group-hover:scale-105 group-hover:translate-y-2 transition-transform duration-300 ease-in-out mix-blend-multiply dark:brightness-[1000]"
        />
      </motion.div>
    </div>
  );
}
