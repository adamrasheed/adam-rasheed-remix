import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostSidebar from "~/components/PostSidebar";
import { client } from "~/lib/apollo";
import { BLOG_POST } from "~/queries";
import type { IPost } from "~/types";
import { getFormattedDate } from "~/utils";

export async function loader({ params }: LoaderArgs) {
  const slug = params.blogPost;
  const { data } = await client.query({
    query: BLOG_POST,
    variables: { slug },
  });

  return data;
}

export default function BlogPost() {
  const { post } = useLoaderData<{ post: IPost }>();
  const { title, date, content, tags } = post;

  return (
    <div className="post-container">
      <article className="post-article">
        <h1 className="page-title">{title}</h1>
        <p>{getFormattedDate(date)}</p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
      <PostSidebar tags={tags} />
    </div>
  );
}
