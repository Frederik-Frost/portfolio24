import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _CreatedAt: Date;
    name: string;
    slug: string;
    image: string;
    imageUrl: string;
    url: string;
    content: PortableTextBlock[];
    shortDescription: string;
};