import { PortableTextBlock } from 'sanity';
import { HeroBlock } from './HeroBlock';
import { LatestProjects } from './LatestProjects';
export type HomePage = {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  hero: HeroBlock;
  latestProjects: LatestProjects;
};
