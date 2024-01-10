import HomepageHero from "@/app/components/HomepageHero";
import SoMeLinks from "@/app/components/someLinks/SoMeLinks";

export default async function Home() {
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-64px)]">
      <section id="heroSection">
        <HomepageHero />
      </section>

      <footer className="max-w-screen-lg w-full mx-auto pb-12 flex-none flex sm:px-4 lg:px-0  justify-center md:justify-start">
        <SoMeLinks />
        
        {/* <a href="mailto:f.frostjensen@gmail.com">f.frostjensen@gmail.com</a> */}
      </footer>
    </div>
  );
}
