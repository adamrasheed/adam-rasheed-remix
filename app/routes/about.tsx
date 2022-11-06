import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/lib/apollo";
import { ABOUT_PAGE_QUERY } from "~/queries";
import { IAboutPage } from "~/types";

export async function loader({ params }: LoaderArgs) {
  const slug = params.caseStudy;
  console.log({ slug });

  const { data } = await client.query({
    query: ABOUT_PAGE_QUERY,
  });

  return data;
}

export default function About() {
  const { page } = useLoaderData<{ page: IAboutPage }>();

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
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="about-info">
        <div className="about-info-section"></div>
      </div>
    </div>
  );
}
