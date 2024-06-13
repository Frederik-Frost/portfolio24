import HomepageHero from '@/app/components/HomepageHero';
import SoMeLinks from '@/app/components/someLinks/SoMeLinks';
import ProjectsCarousel from '@/app/components/ProjectsCarousel';

import { getHome } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';


export default async function Home() {
  const home = await getHome();

  return (
    <div className="flex flex-col justify-between overflow-x-hidden">
      <section id="heroSection" className="min-h-screen">
        <HomepageHero heroData={home.hero} />
      </section>

      <section id="latestProjects" className="mb-4">
        <div className="max-w-screen-lg m-auto px-4 md:px-2 flex flex-col-reverse md:grid md:grid-cols-5 gap-16">
          <div className='col-span-3'>
            <ProjectsCarousel projects={home.latestProjects.projects} />
          </div>
          <div className="col-span-2">
            <h2 className="opacity-75 mt-0 tracking-widest">
              {home.latestProjects.textContent.title}
            </h2>
            <div className="text-mid-gray mt-3">
              <PortableText value={home.latestProjects.textContent.description} />
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-screen-lg w-full mx-auto pb-12 flex-none flex sm:px-4 lg:px-0  justify-center md:justify-start">
        <SoMeLinks />
      </footer>
    </div>
  );
}
