import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div className=" min-h-screen bg-cyan-900">{project.name} asd</div>;
}
