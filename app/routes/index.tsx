import { Link, useLoaderData } from "@remix-run/react";

import CaseStudyPreview from "~/components/CaseStudyPreview";
import { client } from "~/lib/apollo";
import { HOME_QUERY } from "~/queries";
import type { IHome } from "~/types";

export async function loader() {
  const { data } = await client.query({ query: HOME_QUERY });

  return data ?? null;
}

export default function Index() {
  const {
    siteOptions: { options },
    caseStudies: { edges: caseStudyPreviews },
  } = useLoaderData<IHome>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="container mt-10 mb-20">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight mb-4">
          {options.tagline}
        </h1>
        <div
          className="her-description body"
          dangerouslySetInnerHTML={{ __html: options.career }}
        />
      </div>
      <div className="case-study-previews">
        <div className="preview-category-header">
          <h3 className="preview-category-title">Case Studies</h3>
          <Link
            to={"/case-studies"}
            className="font-bold preview-category-link"
          >
            More Case Studies +
          </Link>
        </div>
        {caseStudyPreviews.map(({ node }) => (
          <CaseStudyPreview key={node.id} {...{ ...node }} />
        ))}
      </div>
      <section className="cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-2">Let’s Chat.</h2>
          <p>
            Think I'd be a good fit for a role? Need help with a project?{" "}
            <a href="/">Get in Touch</a>
          </p>
        </div>
      </section>
    </div>
  );
}
