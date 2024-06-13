import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { CustomDeskStructure } from "./sanity/config/desk-structure";

const config = defineConfig({
  projectId: "bvw3b8qc",
  dataset: "production",
  title: "Portfolio App",
  apiVersion: "2023-09-20",
  basePath: "/admin",
  useCdn: false,
  plugins: [
    deskTool({
      structure: CustomDeskStructure,
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});
export default config;
