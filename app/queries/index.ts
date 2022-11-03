import { gql } from "@apollo/client";

export const HEADER_FOOTER_INFO = gql`
  query HeaderFooterInfo {
    menuItems {
      nodes {
        id
        uri
        label
      }
    }
    siteOptions {
      options {
        resume
        socialAccounts {
          account
          url {
            url
          }
        }
      }
    }
  }
`;

export const CASE_STUDIES = gql`
  query caseStudies {
    caseStudies {
      edges {
        node {
          id
          title
          uri
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          caseStudies {
            ctaTitle
            ctaDescription
            subtitle
            teaser
            overview {
              overviewPoint
            }
          }
        }
      }
    }
  }
`;

export const HOME_QUERY = gql`
  query Home {
    siteOptions {
      pageTitle
      options {
        title
        tagline
        specialization
        career
        hideCareer
        resume
        socialAccounts {
          account
          url {
            target
            title
            url
          }
        }
      }
    }
    caseStudies(first: 2) {
      nodes {
        title
        date
        id
        slug
        tags {
          nodes {
            id
            name
          }
        }
        caseStudies {
          overview {
            overviewPoint
          }
          subtitle
          teaser
          ctaTitle
          ctaDescription
        }
        featuredImage {
          node {
            id
            altText
            sourceUrl(size: LARGE)
            srcSet(size: LARGE)
          }
        }
      }
    }
  }
`;
