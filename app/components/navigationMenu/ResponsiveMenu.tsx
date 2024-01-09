"use client";
import { Page } from "@/types/Page";

import MobileMenu from "@/app/components/navigationMenu/MobileMenu";
import DesktopMenu from "@/app/components/navigationMenu/DesktopMenu";

import { useMediaQuery } from "@/app/utilities/hooks/useMediaQueryHook";

interface NavMenuProps {
  pages: Page[];
}

const NavMenu = ({ pages }: NavMenuProps) => {
  const showMobileMenu = useMediaQuery(1024);
  return <>{showMobileMenu ? <MobileMenu pages={pages} /> : <DesktopMenu pages={pages} />}</>;
};

export default NavMenu;
