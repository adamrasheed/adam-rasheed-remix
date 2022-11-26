import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagramSquare,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import type { FC } from "react";

import type { SocialAccount } from "~/types";

library.add(
  faFacebookF,
  faInstagramSquare,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faDribbble,
  faGithub,
  faYoutube
);

type Props = {
  socialAccounts: SocialAccount[];
  resume?: string;
};

const socialHoverMap: Record<string, string> = {
  Instagram: "hover:text-Instagram focus:text-Instagram",
  Facebook: "hover:text-Facebook focus:text-Facebook",
  Youtube: "hover:text-Youtube focus:text-Youtube",
  Dribbble: "hover:text-Dribbble focus:text-Dribbble",
  LinkedIn: "hover:text-LinkedIn focus:text-LinkedIn",
  Twitter: "hover:text-Twitter focus:text-Twitter",
};

const iconMap: Record<string, IconDefinition> = {
  Twitter: faTwitter,
  Facebook: faFacebookF,
  Instagram: faInstagram,
  Youtube: faYoutube,
  GitHub: faGithub,
  Dribbble: faDribbble,
  LinkedIn: faLinkedinIn,
};

const Footer: FC<Props> = ({ socialAccounts, resume }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_info">
          <p className="text-sml">Adam Rasheed © {year}</p>
          {resume && (
            <a
              className="btn lrg footer_btn"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          )}
        </div>
        <div className="footer_social">
          {socialAccounts.map((item) => (
            <a
              key={item.url.url}
              href={item.url.url}
              target="_blank"
              rel="nopenner noreferrer"
              className={clsx(
                socialHoverMap[item.account],
                "block",
                "self-center",
                "flex",
                "justify-center",
                "items-center",
                "focus:outline-hidden"
              )}
            >
              <FontAwesomeIcon
                icon={iconMap[item.account]}
                aria-label={item.account}
                className="footer_icon"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
