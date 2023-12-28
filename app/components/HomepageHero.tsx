import { getProjects, getHome } from "@/sanity/sanity-utils";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import Navbar from "@/app/components/Navbar";
import { PortableText } from "@portabletext/react";

export default async function HomepageHero() {
  const home = await getHome();
  return (
    <div className=" max-w-screen-lg m-auto min-h-screen pt-72 flex flex-col justify-between pb-36">

      <div>
        <ThemeSwitcher />
        <div className="flex flex-col gap-12">
          <h1 className="text-4xl sm:text-[48px] font-bold font-poppins max-w-[400px] leading-tight mt-4 bg-gradient-to-r  from-[#FFC8C8] to-[#C8CDFF] dark:to-[#FFC8C8] dark:from-[#C8CDFF] bg-clip-text text-transparent ">
            {home.heroTitle}
          </h1>

          <div className="text-poppins">
            <PortableText value={home.heroSubtitle} />
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
