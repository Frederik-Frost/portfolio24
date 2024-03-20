import HomepageHero from "@/app/components/HomepageHero";
import SoMeLinks from "@/app/components/someLinks/SoMeLinks";

export default async function Home() {
  return (
    <div className="flex flex-col justify-between">
      <section id="heroSection" className="min-h-screen">
        <HomepageHero />
      </section>
      <section id="aboutSection" className="">
      
      
      </section>




      <footer className="max-w-screen-lg w-full mx-auto pb-12 flex-none flex sm:px-4 lg:px-0  justify-center md:justify-start">
        <SoMeLinks />        
      </footer>
    </div>
  );
}
