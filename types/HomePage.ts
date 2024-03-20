import { PortableTextBlock } from "sanity";
export type HomePage = {
  _id: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: PortableTextBlock[];
  
};
