import { FaMoon, FaSun, FaPhoneAlt } from 'react-icons/fa';
import { TbForklift } from 'react-icons/tb';
import { MdForklift } from 'react-icons/md';
import { PiHandWavingFill } from 'react-icons/pi';
import { HeroBlock } from '@/types/HeroBlock';

type HeroProps = {
  heroData: HeroBlock;
};

export default async function HomepageHero({ heroData }: HeroProps) {
  return (
    <div className="max-w-screen-lg m-auto pt-32 md:pt-72 flex flex-col items-center  sm:px-4 lg:px-0">
      <h1 className="font-poppins text-5xl sm:text-[48px] font-bold max-w-[400px] tracking-[4px] mt-4 text-deep-purple dark:text-ghost-white ">
        {heroData.title}
      </h1>
      <h2>
        {heroData.subtitle}
      </h2>

      <div className="flex flex-row gap-4">
        <button className="btn-primary btn-icon mt-8">
          <span>Say hi</span>
          <PiHandWavingFill />
        </button>
        <button className="btn-primary-outline btn-icon mt-8">
          <span>Check my work</span>
          <TbForklift className="" />
        </button>
      </div>
    </div>
  );
}
