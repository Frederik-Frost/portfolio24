import { getPage } from "@/sanity/sanity-utils";
import { redirect } from 'next/navigation'

type Props = {
  params: {
    page: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.page;
  const page = await getPage(slug);

  if (!page) return redirect("/");
  

  return <div className="min-h-screen">{page.title}</div>;
}
