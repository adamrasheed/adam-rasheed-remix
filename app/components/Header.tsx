import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { Link, NavLink } from "@remix-run/react";
import type { MenuItem } from "~/types";
import { useState } from "react";
import MobileNav from "./MobileNav";

type Props = {
  menuItems: MenuItem[];
};
const Header: React.FC<Props> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="my-8 header">
        <Link
          className="header-title flex gap-1 items-center justify-self-start"
          to="/"
        >
          <h1 className="font-bold text-xl header-title-text">Adam Rasheed</h1>
          <span className="text-xs font-normal small-caps">
            Frontend Developer
          </span>
        </Link>
        <button
          className="justify-self-end p-3 fixed top-6 right-5 z-20  md:hidden"
          onClick={handleMenuToggleClick}
        >
          <FontAwesomeIcon size={"lg"} icon={faBars} />
        </button>
        <nav
          className={clsx(
            "justify-end",
            "items-center",
            "gap-4",
            "justify-self-end",
            "hidden md:flex"
          )}
        >
          {!!menuItems.length &&
            menuItems.map((item) => (
              <NavLink
                prefetch="render"
                className="font-medium small-caps letter-spacing leading-none"
                key={item.id}
                to={item.uri}
              >
                {item.label}
              </NavLink>
            ))}
        </nav>
      </header>
      <MobileNav
        menuItems={menuItems}
        isMenuOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
    </>
  );
};

export default Header;
