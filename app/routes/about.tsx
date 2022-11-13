import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AboutInfoSection from "~/components/AboutInfoSection";
import PostPreview from "~/components/PostPreview";
import { META } from "~/constants";
import { client } from "~/lib/apollo";
import { ABOUT_PAGE_QUERY } from "~/queries";
import type { IAboutPage } from "~/types";

export const meta: MetaFunction = ({
  data,
}: {
  data: IAboutPage | undefined;
}) => {
  if (!data) {
    return {
      title: "Adam Rasheed",
      description: "what",
    };
  }

  const {
    page: {
      title: rawTitle,
      featuredImage: {
        node: { sourceUrl },
      },
    },
  } = data;

  const { twitter } = META.social;

  const title = `${rawTitle} | Adam Rasheed`;

  return {
    title,
    description:
      "Adam Rasheed is a Los Angeles based front-end software engineer who creates well-designed enterprise software and e-commerce stores in Shopify.",
    "twitter:image": sourceUrl,
    "twitter:site": twitter.handle,
    "twitter:title":
      '"Adam Rasheed is a Los Angeles based front-end software engineer who creates well-designed enterprise software and e-commerce stores in Shopify.',
    "twitter:creator": twitter.handle,
    "twitter:card": "summary_large_image",
  };
};

export async function loader() {
  const { data } = await client.query({
    query: ABOUT_PAGE_QUERY,
  });

  return data;
}

export default function About() {
  const {
    page,
    posts: { edges: postPreviews },
  } = useLoaderData<IAboutPage>();

  const {
    title,
    featuredImage: { node: img },
    content,
    customFields: { education, talks },
  } = page;

  return (
    <div className="page-container">
      <h1 className="page-title">{title}</h1>
      <div className="container p-0">
        <img
          src={img.sourceUrl}
          alt={img.sourceUrl}
          srcSet={img.srcSet}
          className="case-study-img"
        />
      </div>
      <div className="about-container">
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />

        <div className="about-info">
          <AboutInfoSection title="Talks" data={talks} />
          <AboutInfoSection title="Teaching" data={education} />
        </div>
      </div>
      <section className="mt-4">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="container p-0 grid gap-8 grid-cols-1 md:grid-cols-2">
          {postPreviews.map(({ node }) => (
            <PostPreview key={node.id} {...{ ...node }} />
          ))}
        </div>
      </section>
    </div>
  );
}
