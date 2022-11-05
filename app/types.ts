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

// siteOptions: {
//     __typename: 'SiteOptions',
//     options: {
//       __typename: 'SiteOptions_Options',
//       title: 'Front-end Developer',
//       tagline: 'I’m a Front-end Engineer Based in Southern California  ☀️🏖.',
//       specialization: 'I specialize in Enterprise Apps (in React) and Shopify projects.',
//       career: '<p>Currently working as a software engineer at <a href="https://www.doordash.com/">DoorDash</a><br />\n' +
//         'Previously at <a href="https://sureapp.com/">Sure</a> and <a href="https://nexttrucking.com/">NEXT Trucking</a>.</p>\n',
//       hideCareer: null,
//       resume: 'https://www.dropbox.com/s/vl9bc3sciauqgxv/Adam-Rasheed-CV-2021.pdf?dl=0',
//       socialAccounts: [Array]
//     }
//   },

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
