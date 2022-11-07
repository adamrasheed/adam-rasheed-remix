import { useLoaderData } from "@remix-run/react";
import PostPreview from "~/components/PostPreview";
import { client } from "~/lib/apollo";
import { BLOG_PREVIEWS } from "~/queries";
import type { IPostPreviews } from "~/types";

export async function loader() {
  const { data } = await client.query({
    query: BLOG_PREVIEWS,
  });

  return data;
}

export default function Blog() {
  const {
    posts: { edges },
  } = useLoaderData<{ posts: IPostPreviews }>();

  return (
    <div className="page-container">
      <h1 className="page-title">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {edges.map(({ node }) => (
          <PostPreview key={node.id} {...{ ...node }} />
        ))}
      </div>
    </div>
  );
}
