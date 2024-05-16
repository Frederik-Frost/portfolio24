import { PortableTextBlock } from 'sanity';
import { Project } from './Project';
export type LatestProjects = {
  _id: string;
  textContent: {
    title: string;
    description: PortableTextBlock[];
  };
  projects: Project[];
};
