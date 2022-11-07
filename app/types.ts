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
  page: {
    customFields: {
      __typename: "Page_Customfields";
      education: IAboutEducation[];
      talks: IAboutTalk[];
    };
  } & IPage;
  posts: IAboutPostPreviews;
};

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

export type IPostPreviewSansExcerpt = {
  __typename: "RootQueryToPostConnectionEdge";
  node: Omit<IPostPreview, "excerpt">;
};

export type IPostPreviewEdge = {
  __typename: "RootQueryToPostConnectionEdge";
  node: IPostPreview;
};

export type IPostPreview = {
  __typename: "Post";
  id: string;
  title: string;
  date: string;
  uri: string;
  excerpt: string;
  contentType: IContentType;
};

export type IPostPreviews = {
  __typename: "RootQueryToPostConnection";
  edges: IPostPreviewEdge[];
};

export type IAboutPostPreviews = {
  __typename: "RootQueryToPostConnection";
  edges: IPostPreviewSansExcerpt[];
};

export type IContentType = {
  node: { name: string; uri: string; __typename: "ContentType" };
};

export type IPostCustomFields = {
  convertkitFormId: string | null;
  ctaDescription: string | null;
  ctaTitle: string | null;
  __typename: "Post_Postacf";
};

export type IPostTagNode = {
  name: string;
  slug: string;
  __typename: "Tag";
};

export type IPostTag = {
  __typename: "PostToTagConnectionEdge";
  node: IPostTagNode;
};

export type IPostTags = {
  __typename: "PostToTagConnection";
  edges: IPostTag[];
};

export type IPost = {
  __typename: "Post";
  title: "Using WordPress as a Headless CMS for your Next React Project";
  date: string;
  uri: string;
  id: string;
  content: string;
  postAct: IPostCustomFields;
  tags: IPostTags;
};

export type IFreelancePage = {
  content: string;
  title: string;
  __typename: "Page";
};
