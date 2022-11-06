import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/lib/apollo";
import { BLOG_POST } from "~/queries";
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
  const { post } = useLoaderData();
  const { title, date, content } = post;
  console.log(post);

  return (
    <div className="post-container">
      <div className="post-content-container">
        <h1 className="page-title">{title}</h1>
        <p>{getFormattedDate(date)}</p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
