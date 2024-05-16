import HomepageHero from '@/app/components/HomepageHero';
import SoMeLinks from '@/app/components/someLinks/SoMeLinks';
import ContentCarousel from '@/app/components/contentCarousel/ContentCarousel';
import ContentCarouselItem from '@/app/components/contentCarousel/ContentCarouselItem';

import { getHome } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

import { FaCode } from 'react-icons/fa6';

export default async function Home() {
  const home = await getHome();
  return (
    <div className="flex flex-col justify-between">
      <section id="heroSection" className="min-h-screen">
        <HomepageHero heroData={home.hero} />
      </section>

      <section id="latestProjects">
        <div className="flex justify-between max-w-screen-lg m-auto">
          <div className="bg-deep-purple p-4 rounded-2xl min-w-[340px] w-full max-w-[33vw] shadow-md text-mid-gray">
            <ContentCarousel dots={true} placement="center">
              {home.latestProjects.projects.map((project, index) => (
                <ContentCarouselItem>
                  <div key={index} className="p-4 m-4">
                    {(project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        width={64}
                        height="auto"
                        className="aspect-square object-cover rounded-lg"
                      />
                    )) || (
                      <div className=" w-[64px] h-[64px] flex items-center justify-center bg-white rounded-lg">
                        <FaCode className="text-mid-gray text-3xl" />
                      </div>
                    )}
                    <h3 className="text-purple">{project.name}</h3>
                    <p>{project.shortDescription}</p>
                  </div>
                </ContentCarouselItem>
              ))}
            </ContentCarousel>
          </div>
          <div className="max-w-[305px]">
            <h2 className="opacity-75"> {home.latestProjects.textContent.title}</h2>
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
