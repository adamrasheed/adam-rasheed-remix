import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
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
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import { FC } from "react";

import { SocialAccount } from "~/types";

library.add(
  fas,
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

const iconMap: Record<string, IconDefinition> = {
  Twitter: faFacebookF,
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
            <Link
              className="btn lrg footer_btn"
              to={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </Link>
          )}
        </div>
        <div className="footer_social">
          {socialAccounts.map((item) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={item.url.url}
              href={item.url.url}
              target="_blank"
              rel="nopenner noreferrer"
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
