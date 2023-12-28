import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Navbar() {
  const pages = await getPages();
  return (
    <header className="flex flex-row w-full items-end gap-16 sticky top-0">
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <Link href={`/`}>logo here</Link>
      </div>
      <ul className="flex flex-row gap-4">
        {pages.map((page) => (
          <li key={page._id} className=" list-none">
            <Link href={`/${page.slug}`} className="">
              <p className="">{page.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
