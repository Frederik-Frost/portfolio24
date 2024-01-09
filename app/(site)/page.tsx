// import { getProjects, getHome } from "@/sanity/sanity-utils";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcher from "@/app/components/ThemeSwitcher";
// import Navbar from "@/app/components/Navbar";
// import { PortableText } from "@portabletext/react";

import HomepageHero from "@/app/components/HomepageHero";

export default async function Home() {
  // const home = await getHome();
  // const projects = await getProjects();

  return (
    <div className=" ">
      <HomepageHero />
      {/* <h2 className="text-3xl text-gray-950 font-bold">My projects go here</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project._id} href={`/projects/${project.slug}`} className="border border-gray-500 rounded-lg">
            <p className="text-cyan-500 font-extrabold">{project.name}</p>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
