'use client';
import { Page } from '@/types/Page';
import { ReactNode } from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import NavigationList from './NavigationList';

interface DesktopMenuProps {
  pages: Page[];
  children?: ReactNode;
  showBackground: boolean;
}

const DesktopMenu = ({ pages, children, showBackground }: DesktopMenuProps) => {
  const listClasses: string =
    'flex flex-row justify-start items-center gap-4 font-medium tracking-wider text-inherit';

  return (
    <div className="grow flex">
      <div className='flex gap-3 items-center grow'>
        <NavigationList pages={pages} listClasses={listClasses} />
        {children}
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default DesktopMenu;
