import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { client } from "~/lib/apollo";
import CaseStudyQuery from "../../queries/";

export async function loader({ params }: LoaderArgs) {
  const slug = params.caseStudy;
  console.log({ slug });

  const { data } = await client.query({ query: CaseStudy });

  return null;
  // return data ?? null;
}

export default function CaseStudy() {
  const data = useLoaderData();
  return <p>Case study</p>;
}
