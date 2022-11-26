import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BreadCrumbs, { BreadCrumbType } from "~/components/BreadCrumbs";

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
      description: "Adam Rasheed is a dope AF developer.",
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
    contentTypeName,
    uri,
    featuredImage: { node: img },
    content,
  } = caseStudy;

  const breadcrumbs: BreadCrumbType[] = [
    { title: "Home", path: "/" },
    { title: "Case Studies", path: `/${contentTypeName}` },
    { title, path: uri },
  ];

  return (
    <>
      <div className="container">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
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
          className="page-content case-study-content prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
