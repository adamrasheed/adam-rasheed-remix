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

export type ICaseStudy = {
  content: string;
  contentTypeName: string;
} & ICaseStudyPreview;

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
  weather: IWeatherResp;
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

export type IRelatedPost = {
  __typename: "RootQueryToPostConnectionEdge";
  node: {
    id: string;
    title: string;
    uri: string;
    __typename: "Post";
  };
};

export type IRelatedPosts = {
  __typename: "RootQueryToPostConnection";
  edges: IRelatedPost[];
};

export type IPostSEO = {
  title: string;
  metaDesc: string;
  opengraphTitle: string;
  opengraphUrl: string;
  twitterImage: {
    altText: string | null;
    sourceUrl: string | null;
    srcSet: string | null;
    __typename: "MediaItem";
  };
  twitterTitle: string;
  twitterDescription: string;
  __typename: "PostTypeSEO";
};

export type IPost = {
  __typename: "Post";
  title: "Using WordPress as a Headless CMS for your Next React Project";
  date: string;
  contentTypeName: string;
  uri: string;
  id: string;
  seo: IPostSEO;
  excerpt: string;
  content: string;
  postAcf: IPostCustomFields;
  tags: IPostTags;
};

export type IFreelancePage = {
  content: string;
  title: string;
  __typename: "Page";
};

export type IWeather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type IWeatherResp = {
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: IWeather[];
  name: string;
};
