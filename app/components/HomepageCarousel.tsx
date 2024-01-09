import { FaArrowRight } from "react-icons/fa";

export default function HomepageCarousel() {
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
    </div>
  );
}
