import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { client } from "~/lib/apollo";
import type { ICaseStudy } from "~/types";
import { CASE_STUDY_QUERY } from "../../queries";

export const meta: MetaFunction = ({
  data,
}: {
  data: { caseStudy: ICaseStudy } | undefined;
}) => {
  if (!data) {
    return {
      title: "Adam Rasheed",
      description: "what",
    };
  }

  const { title: rawTitle } = data.caseStudy;

  const title = `${rawTitle} | Adam Rasheed`;

  return {
    title,
  };
};

export async function loader({ params }: LoaderArgs) {
  const slug = params.caseStudy;

  const { data } = await client.query({
    query: CASE_STUDY_QUERY,
    variables: { slug },
  });

  return data;
}

export default function CaseStudy() {
  const { caseStudy } = useLoaderData<{ caseStudy: ICaseStudy }>();

  const {
    title,
    featuredImage: { node: img },
    content,
  } = caseStudy;

  return (
    <>
      <div className="container">
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="container p-0">
        <img
          src={img.sourceUrl}
          alt={img.sourceUrl}
          srcSet={img.srcSet}
          className="case-study-img"
        />
      </div>
      <div className="container">
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
