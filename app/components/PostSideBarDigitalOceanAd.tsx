import { AFFILIATE_LINKS } from "~/constants";

const PostSideBarDigitalOceanAd = () => {
  const url = AFFILIATE_LINKS["digital-ocean"];

  return (
    <div className="">
      <div className="p-4 bg-slate-50">
        <a
          href={url}
          target={"_blank"}
          rel="noreferrer"
          className="block font-bold"
        >
          Get a DigitalOcean starting at $5/Month!
        </a>
        <p className="my-4 font-light">
          Host your WordPress backend on a lightning-fast SSD-based VPS hosting
          solution. <strong>I only pay $5/mo. for mine!</strong>
        </p>

        <a href={url} className="btn primary block text-center w-full">
          Learn More
        </a>
      </div>
      <p className="affiliate_disclaimer">DOPE AF AFFILIATE LINK</p>
    </div>
  );
};

export default PostSideBarDigitalOceanAd;
