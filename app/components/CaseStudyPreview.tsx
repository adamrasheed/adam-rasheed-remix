import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { ICaseStudyPreview } from "~/types";

const CaseStudyPreview: FC<ICaseStudyPreview> = ({
  id,
  title,
  uri,
  featuredImage,
  customFields,
}) => {
  const img = featuredImage.node;
  console.log("casetsutdyURI", uri);

  return (
    <div className="case-study-preview" key={id}>
      <Link to={uri}>
        <img
          src={img.sourceUrl}
          srcSet={img.srcSet}
          alt={img.altText}
          className="case-study-preview-image"
        />
      </Link>
      <div className="case-study-preview-content">
        <div>
          <h3 className="case-study-preview-title">
            <Link to={`/case-studies/`}>{title}</Link>
          </h3>
          <ul className="case-study-overviews">
            {customFields.overview?.map((overview) => (
              <li className="case-study-overview" key={overview.overviewPoint}>
                {overview.overviewPoint}
              </li>
            ))}
          </ul>
          <Link className="btn" to={`case-studies/`}>
            View Case Study
          </Link>
        </div>
        <div>
          <h3 className="case-study-subtitle">{customFields.subtitle}</h3>
          <p className="case-study-teaser">{customFields.teaser}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPreview;
