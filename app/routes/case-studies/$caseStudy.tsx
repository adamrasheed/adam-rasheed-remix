import { LoaderArgs } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  const slug = params.caseStudy;
  console.log({ slug });
  // const { data } = await client.query({ query: HOME_QUERY });

  return null;
  // return data ?? null;
}

export default function CaseStudy() {
  return <p>Case study</p>;
}
