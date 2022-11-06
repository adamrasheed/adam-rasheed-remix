import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AboutInfoSection from "~/components/AboutInfoSection";
import PostPreview from "~/components/PostPreview";
import PostPreviews from "~/components/PostPreviews";
import { client } from "~/lib/apollo";
import { ABOUT_PAGE_QUERY } from "~/queries";
import { IAboutPage } from "~/types";

export async function loader({ params }: LoaderArgs) {
  const slug = params.caseStudy;
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

  console.log("posts", postPreviews);

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
        <div
          className="page-content my-0"
          dangerouslySetInnerHTML={{ __html: content }}
        />

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
