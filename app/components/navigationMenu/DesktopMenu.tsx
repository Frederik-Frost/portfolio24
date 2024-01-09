"use client";
import { Page } from "@/types/Page";

import ThemeSwitcher from "./ThemeSwitcher";
import NavigationList from "./NavigationList";

interface DesktopMenuProps {
  pages: Page[];
}

const DesktopMenu = ({ pages }: DesktopMenuProps) => {
  const listClasses: string = "flex flex-row justify-start items-center gap-4 font-medium tracking-wider";

  return (
    <div className="flex justify-between">
      <NavigationList pages={pages} listClasses={listClasses} />
      <ThemeSwitcher />
    </div>
  );
};

export default DesktopMenu;
