import type { ActionFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ConvertKitForm from "~/components/ConvertKitForm";
import PostSidebar from "~/components/PostSidebar";
import { DEFAULT_CK_FORM_ID } from "~/constants";
import { client } from "~/lib/apollo";
import { BLOG_POST } from "~/queries";
import type { IPost, IRelatedPosts } from "~/types";
import { getFormattedDate } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const firstName = formData.get("firstName");
  const FORM_ID = formData.get("formId");

  const API_KEY = process.env.CK_PUBLIC_API;
  const ENDPOINT = `https://api.convertkit.com/v3/forms/${
    FORM_ID || DEFAULT_CK_FORM_ID
  }/subscribe`;

  console.log({ email, firstName, FORM_ID });

  const res = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ api_key: API_KEY, email, first_name: firstName }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return res.json();
};

type LoaderData = {
  post: IPost;
  posts: IRelatedPosts;
};

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data) {
    return {
      title: "Adam Rasheed",
      description: "what",
    };
  }

  const { title, excerpt: excerptHtml } = data.post;

  const description = excerptHtml
    .replace(/(<([^>]+)>)/gi, "")
    .replace(" [&hellip;]\n", "")
    .replace("\n", "");

  return {
    title,
    description,
  };
};

export async function loader({ params }: LoaderArgs) {
  const slug = params.blogPost;
  const { data } = await client.query({
    query: BLOG_POST,
    variables: { slug },
  });

  return data;
}

export default function BlogPost() {
  const { post, posts } = useLoaderData<LoaderData>();

  const { title, date, content, tags, postAcf } = post;

  return (
    <div className="post-container">
      <article className="post-article">
        <h1 className="page-title">{title}</h1>
        <p>{getFormattedDate(date)}</p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <ConvertKitForm formId={postAcf.convertkitFormId} />
      </article>
      <PostSidebar relatedPosts={posts} tags={tags} />
    </div>
  );
}
