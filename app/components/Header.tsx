import { NavLink } from "@remix-run/react";
import { MenuItem } from "~/types";

type Props = {
  menuItems: MenuItem[];
};
const Header: React.FC<Props> = ({ menuItems }) => {
  return (
    <header>
      <NavLink to="/">Adam Rasheed</NavLink>
      <button>Toggle</button>
      <nav>
        {!!menuItems.length &&
          menuItems.map((item) => (
            <NavLink key={item.id} to={item.uri}>
              {item.label}
            </NavLink>
          ))}
      </nav>
    </header>
  );
};

export default Header;
