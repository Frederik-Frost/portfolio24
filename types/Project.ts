import { PortableTextBlock, Slug } from 'sanity';

export type Project = {
  _id: string;
  _CreatedAt: Date;
  name: string;
  slug: Slug;
  image: string;
  imageUrl: string;
  url: string;
  content: PortableTextBlock[];
  shortDescription: string;
};
