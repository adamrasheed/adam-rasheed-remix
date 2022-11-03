import { useLoaderData } from "@remix-run/react";
import CaseStudyPreview from "~/components/CaseStudyPreview";
import { client } from "~/lib/apollo";
import { CASE_STUDIES } from "~/queries";
import { ICaseStudyPreview } from "~/types";

export async function loader() {
  const { data } = await client.query({ query: CASE_STUDIES });

  const caseStudies: ICaseStudyPreview[] = data?.caseStudies?.edges?.map(
    (caseStudy) => {
      const {
        id,
        title,
        uri,
        featuredImage: { node: img },
        caseStudies: { ctaTitle, ctaDescription, subtitle, teaser, overview },
        ...rest
      } = caseStudy.node;
      console.log("rest", overview);

      const overviewPoints = overview.map((item) => item.overviewPoint);

      return {
        __typename: "CaseStudy",
        id,
        title,
        uri,
        featuredImg: {
          src: img.sourceUrl,
          alt: img.altText,
        },
        ctaTitle,
        ctaDescription,
        subtitle,
        teaser,
        overviewPoints,
      };
    }
  );

  return { caseStudies };
}

export default function CaseStudies() {
  const { caseStudies } = useLoaderData<{ caseStudies: ICaseStudyPreview[] }>();

  console.log(caseStudies);

  return (
    <div className="page-container">
      <h1 className="page-title">Case Studies</h1>
      <div className="case-study-previews">
        {!!caseStudies.length &&
          caseStudies.map((preview) => <CaseStudyPreview />)}
      </div>
    </div>
  );
}
