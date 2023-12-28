import { PortableTextBlock } from "sanity";
export type HomePage = {
  _id: string;
  title: string;
  heroTitle: string;
  description: string;
  heroSubtitle: PortableTextBlock[];
};
