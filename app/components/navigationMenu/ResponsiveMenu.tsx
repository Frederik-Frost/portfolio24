'use client';
import { Page } from '@/types/Page';

import { ReactNode, useEffect, useState, useRef } from 'react';

import MobileMenu from '@/app/components/navigationMenu/MobileMenu';
import DesktopMenu from '@/app/components/navigationMenu/DesktopMenu';

import { useMediaQuery } from '@/app/utilities/hooks/useMediaQueryHook';
import { useScrollPosition } from '@/app/utilities/hooks/useScrollPositionHook';

import { useThrottle } from '@/app/utilities/hooks/useThrottleHook';

interface NavMenuProps {
  pages: Page[];
  children?: ReactNode;
}
const NavMenu = ({ pages, children }: NavMenuProps) => {
  const scrollPosition: number = useScrollPosition();
  const showMobileMenu: boolean = useMediaQuery(1024);

  // Show background color of header when scrolling down
  const [showBackground, setShowBackground] = useState<boolean>(false);
  useEffect(() => {
    setShowBackground(scrollPosition > 40);
  }, [scrollPosition]);



  
  // get previous scroll position to check if user is scrolling up or down
  const usePreviousScroll: Function = (value: number) => {
    const ref = useRef<number>(0);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const previousScrollPosition: number = usePreviousScroll(scrollPosition);

  // Hide menu when scrolling down and show when scrolling up
  const [hideMenu, setHideMenu] = useState(false);
  const checkScrollPosition: Function = () => {
    setHideMenu(previousScrollPosition <= scrollPosition && scrollPosition > 20);
  };


  // Check scroll position on scroll
  useEffect(() => {
    if (scrollPosition > 20) return checkScrollPosition();
    setTimeout(() => {
      checkScrollPosition();
    }, 300);
  }, [scrollPosition]);

  // Throttle the hide menu state
  const throttledHideMenu = useThrottle(hideMenu, 300);

  return (
    <div
      className={` transition-all  fixed top-0 w-full z-[999]  ${
        showBackground && !throttledHideMenu
          ? 'bg-deep-purple text-ghost-white dark:bg-dark-gray  dark:text-ghost-white shadow'
          : 'delay-200'
      }`}
    >
      <div
        className={`max-w-screen-lg m-auto h-[82px] px-4 lg:px-0 flex justify-between items-center ${
          throttledHideMenu ? 'translate-y-[-20px] delay-100 opacity-0' : 'translate-y-0 '
        } transition-all duration-300  `}
      >
        {showMobileMenu ? (
          <MobileMenu pages={pages} showBackground={showBackground}>
            {children}
          </MobileMenu>
        ) : (
          <DesktopMenu pages={pages} showBackground={showBackground}>
            {children}
          </DesktopMenu>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
