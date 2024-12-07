import { Link } from "react-router-dom";
import Logo from "./Logo";

import classes from "./Menu.module.css";

const Menu = (props) => {
  const menuClasses = `${props.className || ""} ${classes.menuList}`;
  return (
    <ul className={menuClasses}>
      <li>SHOP</li>
      <li>
        <Link to="/services" className={classes.link}>
          SERVICES
        </Link>{" "}
      </li>
      <Logo />
      <li>PLANT CARE</li>
      <li>
        <Link to="/contactUs" className={classes.link}>
          CONTACT
        </Link>
      </li>
    </ul>
  );
};
export default Menu;
