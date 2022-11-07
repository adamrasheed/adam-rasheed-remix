import { FC } from "react";
import type { IPostTags } from "~/types";
import PostSideBarDigitalOceanAd from "./PostSideBarDigitalOceanAd";
import PostSidebarShopifyAd from "./PostSidebarShopifyAd";

export enum TAGS {
  SHOPIFY = "shopify",
  DIGITAL_OCEAN = "digital-ocean",
}

type Props = {
  tags: IPostTags;
};

const PostSidebar: FC<Props> = ({ tags }) => {
  const tagsArray = tags.edges.map((edge) => edge.node.slug);

  const showDOAd = tagsArray.includes(TAGS.DIGITAL_OCEAN);
  const showShopifyAd = tagsArray.includes(TAGS.SHOPIFY);

  return (
    <aside className="sidebar max-w-[16rem]">
      {showDOAd && <PostSideBarDigitalOceanAd />}
      {showShopifyAd && <PostSidebarShopifyAd />}
    </aside>
  );
};

export default PostSidebar;
