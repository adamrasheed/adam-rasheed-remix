export type CaseStudy = {
  __typename: "CaseStudy";
  id: string;
  title: string;
  date: string;
  slug: string;
  tags: {
    __typename: "CaseStudyToTagConnection";
    nodes: {
      id: string;
      name: string;
      __typename: "Tag";
    }[];
  };
  featuredImage: {
    __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
    node: {
      __typename: "MediaItem";
      id: string;
      altText: string;
      sourceUrl: string;
      srcSet: string;
    };
  };
  caseStudies: {
    __typename: "CaseStudy_Casestudies";
    overview: {
      overviewPoint: string;
      __typename: "CaseStudy_Casestudies_overview";
    }[];
    subtitle: string;
    teaser: string;
  };
};

export type ICaseStudyPreview = {
  __typename: "CaseStudy";
  id: string;
  title: string;
  uri: string;
  featuredImg: {
    src: string;
    alt: string;
  };
  ctaTitle: string;
  ctaDescription: string;
  subtitle: string;
  teaser: string;
  overviewPoints: string[];
};

export type SiteOptions = {
  __typename: "SiteOptions";
  options: {
    __typename: "SiteOptions_Options";
    title: string;
    tagline: string;
    specialization: string;
    career: string;
    hideCareer: boolean | null;
    resume: string;
    socialAccounts: {
      __typename: "SiteOptions_Options_socialAccounts";
      account: string;
      url: {
        __typename: "AcfLink";
        target: string;
        title: string;
        url: string;
      };
    }[];
  };
};

export type MenuItemWrapper = {
  __typename: "MenuToMenuItemConnectionEdge";
  node: MenuItem;
};

export type MenuItem = {
  __typename: "MenuItem";
  id: string;
  label: string;
  uri: string;
};

export type SocialAccount = {
  __typename: "SiteOptions_Options_socialAccounts";
  account: string;
  url: {
    __typename: "AcfLink";
    url: string;
  };
};

export type Home = {
  siteOptions: SiteOptions;
  caseStudies: {
    __typename: "RootQueryToPostConnection";

    nodes: CaseStudy[];
  };
};
