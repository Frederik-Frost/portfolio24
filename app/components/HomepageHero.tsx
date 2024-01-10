import { FaMoon, FaSun, FaPhoneAlt } from "react-icons/fa";
import { PortableText } from "@portabletext/react";

import { getProjects, getHome } from "@/sanity/sanity-utils";

import HomepageCarousel from "@/app/components/HomepageCarousel";

export default async function HomepageHero() {
  const home = await getHome();

  return (
    <div className="max-w-screen-lg m-auto pt-32 md:pt-72 flex flex-col md:flex-row md:justify-between gap-8 sm:px-4 lg:px-0">
      <div className="flex flex-col items-center md:items-start ">
        <h1 className="font-poppins text-4xl sm:text-[48px] font-bold max-w-[400px] tracking-[4px] mt-4 text-deep-purple dark:text-ghost-white">
          {home.heroTitle}
        </h1>
        <h2 className="font-poppins mt-4 text-2xl font-medium text-deep-purple dark:text-ghost-white">
          {home.heroSubtitle}
        </h2>
        <div className="font-poppins mt-4 dark:text-mid-gray text-dark-gray max-w-sm text-center md:text-start">
          <PortableText value={home.heroDescription} />
        </div>

        <button className="btn-primary btn-icon mt-3">
          <span>Say hi</span>
          <FaPhoneAlt />
        </button>
      </div>
      <div className="grow flex md:justify-end flex-row">
        {/* carousel here - latest relevant info  */}
        <HomepageCarousel />
      </div>
    </div>
  );
}
