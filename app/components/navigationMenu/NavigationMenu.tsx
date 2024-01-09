// Parent 
// Fetches and passes the pages to the ResponsiveMenu component

import { getPages } from "@/sanity/sanity-utils";
import ResponsiveMenu from "./ResponsiveMenu";

export default async function Navbar() {
  const pages = await getPages();
  return (
    <>
      <ResponsiveMenu pages={pages} />
    </>
  );
}
