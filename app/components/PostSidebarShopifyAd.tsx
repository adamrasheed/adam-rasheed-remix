import { AFFILIATE_LINKS } from "~/constants";
import Logo from "~/assets/shopify_logo_whitebg.svg";

const PostSidebarShopifyAd = () => {
  const url = AFFILIATE_LINKS["shopify"];

  return (
    <div className="">
      <div className="p-8 bg-slate-50 shadow-md">
        <a
          href={url}
          target={"_blank"}
          rel="noreferrer"
          className="block font-bold"
        >
          <img src={Logo} alt="Shopify" className="pr-8" />
        </a>
        <a
          href={url}
          target={"_blank"}
          rel="noreferrer"
          className="block font-bold"
        >
          <h4 className="font-bold text-lg my-4">
            Get Started with Shopify Today!
          </h4>
        </a>
        <p className="my-4 font-light">
          Get started with Shopify and level up your eCommerce business! Start
          your free trial today.
        </p>

        <a
          href={url}
          className="btn bg-Shopify block text-white text-center w-full hover:bg-Shopify focus:bg-Shopify"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default PostSidebarShopifyAd;
