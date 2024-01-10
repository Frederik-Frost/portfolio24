// import { getProjects, getHome } from "@/sanity/sanity-utils";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcher from "@/app/components/ThemeSwitcher";
// import Navbar from "@/app/components/Navbar";
// import { PortableText } from "@portabletext/react";

import HomepageHero from "@/app/components/HomepageHero";
import SoMeLinks from "@/app/components/someLinks/SoMeLinks";

export default async function Home() {
  // const home = await getHome();
  // const projects = await getProjects();

  return (
    <div className="">
      <HomepageHero />

      <div className="mt-44 pb-12 max-w-screen-lg m-auto sm:px-4 lg:px-0 flex  justify-center md:justify-start ">
        <SoMeLinks />
      </div>
    </div>
  );
}
