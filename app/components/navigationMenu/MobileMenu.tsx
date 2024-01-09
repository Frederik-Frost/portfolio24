"use client";
import { useState } from "react";

import ThemeSwitcher from "./ThemeSwitcher";
import NavigationList from "./NavigationList";

import { Page } from "@/types/Page";

interface MobileMenuProps {
  pages: Page[];
}

const MobileMenu = ({ pages }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  // Styling for the bar menu icon
  const defaultBarClasses: string = "h-[2px] dark:bg-ghost-white bg-dark-gray rounded-full transition-all";
  const normalBarClasses: string = defaultBarClasses.concat(" ", "w-[24px]");
  const smallBarClasses: string = defaultBarClasses.concat(" ", "w-[18px]") + (isOpen ? " w-[0]" : "");
  const topBarClasses: string = normalBarClasses + (isOpen ? " transform rotate-45 translate-y-[6px]" : "");
  const bottomBarClasses: string = normalBarClasses + (isOpen ? " transform -rotate-45 -translate-y-[6px]" : "");

  // styling for the navigation list
  const listClasses: string = "flex flex-col justify-center items-end gap-4 pt-20 font-medium text-2xl tracking-wider";
  const listItemClasses: string = `list-none text-dark-gray dark:text-ghost-white dark:hover:text-deep-purple hover:text-purple ease-in-out duration-300 delay-100 ${
    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
  }`;

  const overlayWrapperStyles: string = `absolute top-0 left-0 w-screen h-screen bg-ghost-white dark:bg-dark-gray transition-all ${
    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
  }`;

  return (
    <div className=" flex justify-end">
      <div className={overlayWrapperStyles}>
        <div className="flex flex-col items-end gap-4 px-4 ">
          <NavigationList pages={pages} listClasses={listClasses} listItemClasses={listItemClasses} onClose={onClose} />
          <div className={listItemClasses}>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <button className={"flex flex-col justify-center items-end gap-1 relative z-50 "} onClick={toggleOpen}>
        <div className={topBarClasses}></div>
        <div className={smallBarClasses}></div>
        <div className={bottomBarClasses}></div>
      </button>
    </div>
  );
};

export default MobileMenu;
