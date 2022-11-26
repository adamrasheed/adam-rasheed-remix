import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@remix-run/react";
import type { FC } from "react";
import clsx from "clsx";

export type BreadCrumbType = { title: string; path: string };

type BreadCrumbsProps = {
  breadcrumbs: BreadCrumbType[];
};

const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div>
      <ul className="flex gap-2 mb-4 items-center">
        {breadcrumbs.map((link, idx) => (
          <li
            key={`${link.path}_${idx}`}
            className={clsx("flex", "items-center")}
          >
            <NavLink
              className={clsx("text-sm font-normal", {
                ["opacity-50"]: idx < breadcrumbs.length - 1,
              })}
              to={link.path}
            >
              {link.title}
            </NavLink>
            <FontAwesomeIcon
              className={clsx("text-[0.5rem] ml-2 opacity-70", {
                ["hidden"]: idx === breadcrumbs.length - 1,
              })}
              icon={faCaretRight}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
