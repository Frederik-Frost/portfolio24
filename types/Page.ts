import { ModularPage } from "./ModularPage";
export type Page = {
  _id: string;
  _CreatedAt: Date;
  title: string;
  slug: string;
  content: ModularPage[];
};
