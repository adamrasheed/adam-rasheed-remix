import { gql } from "@apollo/client";
import CASE_STUDY_PREVIEWS from "./caseStudyPreview.fragment.graphql";
import ABOUT_PAGE from "./aboutPage.graphql";
import CASE_STUDY from "./caseStudy.graphql";
import CONTENT_TYPE from "./contentType.fragment.graphql";
import POST_TAGS from "./postTags.fragment.graphql";

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

export const ABOUT_PAGE_QUERY = gql`
  ${ABOUT_PAGE}
`;

export const CASE_STUDY_QUERY = gql`
  ${CASE_STUDY}
`;

export const CASE_STUDIES = gql`
  query CaseStudiesPreviews {
    caseStudies {
      ...caseStudyPreviewsFragment
    }
  }
  ${CASE_STUDY_PREVIEWS}
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
      ...caseStudyPreviewsFragment
    }
  }
  ${CASE_STUDY_PREVIEWS}
`;

export const BLOG_PREVIEWS = gql`
  query BlogPreviews {
    posts {
      edges {
        node {
          id
          title
          uri
          date
          excerpt
          ...ContentTypeFragment
        }
      }
    }
  }
  ${CONTENT_TYPE}
`;

export const BLOG_POST = gql`
  query BlogPost($slug: ID!) {
    post(id: $slug, idType: URI) {
      id
      title
      date
      content
      ...PostTagsFragment
      postAcf {
        ctaTitle
        ctaDescription
        convertkitFormId
      }
    }
  }
  ${POST_TAGS}
`;

export const PAGE_QUERY = gql`
  query Page($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
    }
  }
`;
