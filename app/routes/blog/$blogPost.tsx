import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import ConvertKitForm from "~/components/ConvertKitForm";
import PostSidebar from "~/components/PostSidebar";
import { DEFAULT_CK_FORM_ID } from "~/constants";
import { client } from "~/lib/apollo";
import { BLOG_POST } from "~/queries";
import type { IPost } from "~/types";
import { getFormattedDate } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  console.log("YOOOO", formData);

  const email = formData.get("email");
  const firstName = formData.get("firstName");

  const API_KEY = process.env.CK_PUBLIC_API;
  const ENDPOINT = `https://api.convertkit.com/v3/forms/${DEFAULT_CK_FORM_ID}/subscribe`;

  console.log({ email, firstName });

  const res = await fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ api_key: API_KEY, email, first_name: firstName }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return res.json();
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
        <ConvertKitForm />
      </article>
      <PostSidebar tags={tags} />
    </div>
  );
}
