import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/lib/apollo";
import { PAGE_QUERY } from "~/queries";
import type { IFreelancePage } from "~/types";

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
      <article>
        <h1 className="page-title">{title}</h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}
