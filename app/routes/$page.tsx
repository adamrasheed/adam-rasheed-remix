import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/lib/apollo";
import { PAGE_QUERY } from "~/queries";
import type { IFreelancePage } from "~/types";

export const meta: MetaFunction = ({
  data,
}: {
  data: IFreelancePage | undefined;
}) => {
  if (!data) {
    return {
      title: "Adam Rasheed",
      description: "what",
    };
  }

  const { title: rawTitle } = data;

  const title = `${rawTitle} | Adam Rasheed`;

  return {
    title,
  };
};

export async function loader({ params }: LoaderArgs) {
  const { page } = params;
  const { data } = await client.query({
    query: PAGE_QUERY,
    variables: { slug: page },
  });

  return data.page;
}
export default function Page() {
  const { title, content } = useLoaderData<IFreelancePage>();

  return (
    <div className="page-container">
      <article className="prose dark:prose-invert">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
}
