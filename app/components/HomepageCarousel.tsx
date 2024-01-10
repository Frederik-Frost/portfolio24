import { getLatestProject } from "@/sanity/sanity-utils";

import { FaArrowRight } from "react-icons/fa";
import { revalidatePath, revalidateTag } from "next/cache";
import { SongResponse } from "@/services/spotify/SongResponse";

const nowPlaying = async () => {
  // revalidate the cache for this tag
  const response = await fetch(`${process.env.URL}/api/spotify/playing`, {
    cache: "no-store",
  });
  const data = await response.json();
  console.log("data", data);
  return data;
};

export default async function HomepageCarousel() {
  const latestProject = await getLatestProject();
  const music: SongResponse = await nowPlaying();

  return (
    <div className="grow m-auto md:m-[unset] max-w-[90%] md:min-w-[350px] md:max-w-[500px] bg-purple dark:bg-purple-o-50 rounded-3xl p-5">
      <h3 className=" tracking-[3px] font-medium text-dark-purple dark:text-purple">Latest project</h3>
      <div className="text-ghost-white mt-3">
        <h4 className="font-bold mb-3 text-lg">IC Ads</h4>
        <p className="font-normal mb-3 max-w-[300px] ">An image transformation app for optimized image creations</p>
        <button className="flex items-center justify-between gap-2 bg-ghost-white rounded-full px-3 py-1 text-purple">
          <span> Show more</span>
          <FaArrowRight className="" />
        </button>
      </div>

      {latestProject.name}

      {music && (
        <div>
          <h3>Now playing</h3>
          <div>
            {music.albumImageUrl && <img src={music.albumImageUrl} alt="album cover" width={64} height="auto" />}
            <div>
              <h4>{music.title}</h4>
              <p>{music.artist}</p>
            </div>
          </div>
        </div>
      )}

      {/* <button onClick={testSpotifyLogin}>Test</button> */}
    </div>
  );
}
