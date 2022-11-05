import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import type { Dispatch, FC, SetStateAction } from "react";
import type { MenuItem } from "~/types";

type Props = {
  menuItems: MenuItem[];
  isMenuOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNav: FC<Props> = ({ menuItems, isMenuOpen, setIsOpen }) => {
  return (
    <div className={clsx("mobile-menu", { open: isMenuOpen })}>
      <p className="p-8 small-caps text-xl accent">Menu</p>
      <nav className="divide-y divide-slate-200">
        {!!menuItems.length &&
          menuItems.map((item) => (
            <NavLink
              prefetch="render"
              onClick={() => {
                setIsOpen(false);
              }}
              className="block font-medium small-caps letter-spacing leading-none py-4 px-8 text-lg"
              key={item.id}
              to={item.uri}
            >
              {item.label}
            </NavLink>
          ))}
      </nav>
    </div>
  );
};

export default MobileNav;
