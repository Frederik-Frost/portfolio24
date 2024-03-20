'use client';
import { Page } from '@/types/Page';

import { ReactNode, use, useEffect, useState } from 'react';

import MobileMenu from '@/app/components/navigationMenu/MobileMenu';
import DesktopMenu from '@/app/components/navigationMenu/DesktopMenu';

import { useMediaQuery } from '@/app/utilities/hooks/useMediaQueryHook';
import { useScrollPosition } from '@/app/utilities/hooks/useScrollPositionHook';

interface NavMenuProps {
  pages: Page[];
  children?: ReactNode;
}
const NavMenu = ({ pages, children }: NavMenuProps) => {
  const showMobileMenu = useMediaQuery(1024);

  const scrollPosition = useScrollPosition();
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    console.log('runs', scrollPosition);
    if (scrollPosition > 20) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  }, [scrollPosition]);

  return (
    <div
      className={` transition-all fixed top-0 w-full ${
        showBackground
          ? 'bg-deep-purple text-ghost-white dark:bg-ghost-white dark:text-deep-purple'
          : ''
      }`}
    >
      <div className="max-w-screen-lg m-auto h-[82px] px-4 lg:px-0 flex justify-between items-center">
        {showMobileMenu ? (
          <MobileMenu pages={pages}>{children}</MobileMenu>
        ) : (
          <DesktopMenu pages={pages}>{children}</DesktopMenu>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
