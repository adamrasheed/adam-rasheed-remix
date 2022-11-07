import { useLoaderData } from "@remix-run/react";
import CaseStudyPreview from "~/components/CaseStudyPreview";
import { client } from "~/lib/apollo";
import { CASE_STUDIES } from "~/queries";
import type { ICaseStudyPreview, IHome } from "~/types";

export async function loader() {
  const { data } = await client.query<{ caseStudies: IHome["caseStudies"] }>({
    query: CASE_STUDIES,
  });

  const caseStudies: ICaseStudyPreview[] = data?.caseStudies?.edges?.map(
    ({ node }) => node
  );

  return { caseStudies };
}

export default function CaseStudies() {
  const { caseStudies } = useLoaderData<{
    caseStudies: ICaseStudyPreview[];
  }>();

  return (
    <div className="page-container">
      <h1 className="page-title">Case Studies</h1>
      <div className="case-study-previews">
        {!!caseStudies.length &&
          caseStudies.map((preview) => (
            <CaseStudyPreview key={preview.id} {...{ ...preview }} />
          ))}
      </div>
    </div>
  );
}
