export type ICaseStudyPreview = {
  __typename: "CaseStudy";
  id: string;
  title: string;
  uri: string;
  featuredImage: {
    __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
    node: {
      __typename: "MediaItem";
      altText: string;
      sourceUrl: string;
      srcSet: string;
    };
  };
  customFields: {
    __typename: "CaseStudy_Customfields";
    overview: {
      overviewPoint: string;
      __typename: "CaseStudy_Casestudies_overview";
    }[];
    subtitle: string;
    teaser: string;
  };
};

export type IPage = {
  __typename: "Page";
  id: string;
  title: string;
  uri: string;
  featuredImage: {
    __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
    node: {
      __typename: "MediaItem";
      altText: string;
      sourceUrl: string;
      srcSet: string;
    };
  };
  content: string;
};

export type IAboutEducation = {
  __typename: "Page_Customfields_education";
  title: "UI Design in Sketch Course";
  description: "Exclusive course for sitepoint.com";
  url: {
    __typename: "AcfLink";
    url: string;
  };
};

export type IAboutTalk = {
  __typename: "Page_Customfields_talks";
  title: "Design for Entrepreneurs";
  url: {
    __typename: "AcfLink";
    url: string;
  };
  description: string;
};

export type IAboutPage = {
  customFields: {
    __typename: "Page_Customfields";
    education: IAboutEducation[];
    talks: IAboutTalk[];
  };
} & IPage;

export type ICaseStudy = { content: string } & ICaseStudyPreview;

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
  __typename: "SiteOptions";
  account: string;
  url: {
    __typename: "AcfLink";
    url: string;
  };
};

export type IHome = {
  siteOptions: SiteOptions;
  caseStudies: {
    __typename: "RootQueryToPostConnection";
    edges: {
      __typename: "RootQueryToCaseStudyConnectionEdge";
      node: ICaseStudyPreview;
    }[];
  };
};
