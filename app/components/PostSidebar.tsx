import { FC } from "react";
import type { IPostTags, IRelatedPosts } from "~/types";
import PostSideBarDigitalOceanAd from "./PostSideBarDigitalOceanAd";
import PostSidebarShopifyAd from "./PostSidebarShopifyAd";
import RelatedPosts from "./RelatedPosts";

export enum TAGS {
  SHOPIFY = "shopify",
  DIGITAL_OCEAN = "digital-ocean",
}

type Props = {
  relatedPosts: IRelatedPosts;
  tags: IPostTags;
};

const PostSidebar: FC<Props> = ({ tags, relatedPosts }) => {
  const tagsArray = tags.edges.map((edge) => edge.node.slug);

  const showDOAd = tagsArray.includes(TAGS.DIGITAL_OCEAN);
  const showShopifyAd = tagsArray.includes(TAGS.SHOPIFY);

  return (
    <aside className="sidebar md:sticky md:top-8 md:place-self-start space-y-8 max-w-[16rem]">
      <RelatedPosts posts={relatedPosts} />
      {showDOAd && <PostSideBarDigitalOceanAd />}
      {showShopifyAd && <PostSidebarShopifyAd />}
    </aside>
  );
};

export default PostSidebar;
