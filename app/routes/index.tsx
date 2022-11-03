import { Link, NavLink, useLoaderData } from "@remix-run/react";
import { client } from "~/lib/apollo";
import { HOME_QUERY } from "~/queries";
import { Home } from "~/types";

export async function loader() {
  const { data } = await client.query({ query: HOME_QUERY });

  return data ?? null;
}

export default function Index() {
  const {
    siteOptions: { options },
    caseStudies: { nodes: caseStudyPreviews },
  } = useLoaderData<Home>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="hero">
        <h1 className="hero-title">{options.tagline}</h1>
        <div
          className="her-description body"
          dangerouslySetInnerHTML={{ __html: options.career }}
        />
      </div>
      <div className="case-study-previews">
        <div className="preview-category-header">
          <h3 className="preview-category-title">Case Studies</h3>
          <NavLink
            to={"/case-studies"}
            className="font-bold preview-category-link"
          >
            More Case Studies +
          </NavLink>
        </div>
        {caseStudyPreviews.map((caseStudy) => (
          <div className="case-study-preview" key={caseStudy.id}>
            <Link to={`/case-studies/${caseStudy.slug}`}>
              <img
                src={caseStudy.featuredImage.node.sourceUrl}
                srcSet={caseStudy.featuredImage.node.srcSet}
                alt={caseStudy.featuredImage.node.altText}
                className="case-study-preview-image"
              />
            </Link>
            <div className="case-study-preview-content">
              <div>
                <h3 className="case-study-preview-title">
                  <Link to={`/case-studies/${caseStudy.slug}`}>
                    {caseStudy.title}
                  </Link>
                </h3>
                <ul className="case-study-overviews">
                  {caseStudy.caseStudies.overview?.map((overview) => (
                    <li
                      className="case-study-overview"
                      key={overview.overviewPoint}
                    >
                      {overview.overviewPoint}
                    </li>
                  ))}
                </ul>
                <NavLink className="btn" to={`case-studies/${caseStudy.slug}`}>
                  View Case Study
                </NavLink>
              </div>
              <div>
                <h3 className="case-study-subtitle">
                  {caseStudy.caseStudies.subtitle}
                </h3>
                <p className="case-study-teaser">
                  {caseStudy.caseStudies.teaser}
                </p>
              </div>
            </div>
          </div>
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
