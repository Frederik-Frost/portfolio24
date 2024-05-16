import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { HomePage } from "@/types/HomePage";
import { SocialMediaLink } from "@/types/SocialMediaLink";

import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project" ]|order(orderRank){
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
  );
}

export async function getLatestProject(): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project" ]|order(orderRank)[0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "project" && slug.current == $slug ][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug },
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "page"]|order(orderRank){
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`,
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "page" && slug.current == $slug ][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug },
  );
}

export async function getHome(): Promise<HomePage> {
  // Make references available in the query using the "->" operator
  return createClient(clientConfig).fetch(groq`*[ _type == "homepage"][0]{
    ..., 
    latestProjects{
      ...,
      projects[]->{
        ...,
        "imageUrl": image.asset->url
      }
    }
  }`);
}

export async function getSocialMediaLinks(): Promise<SocialMediaLink[]> {
  return createClient(clientConfig).fetch(
    groq`*[ _type == "socialMediaLink"]|order(orderRank){
      _id,
      _createdAt,
      name,
      url
    }`,
  );
}
