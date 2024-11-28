import { FaBars, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import Menu from "./Menu";

import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    setIsNarrow(window.innerWidth < 926);
    const handleResize = () => setIsNarrow(window.innerWidth < 926);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.navbarContainer}>
      {isNarrow ? (
        <>
          <FaBars className={classes.icon} />
          <Link to="/">
            <Logo />
          </Link>

          <div>
            <FaSearch className={classes.icon} />
            <FaShoppingBag className={classes.icon} />
          </div>
        </>
      ) : (
        <>
          <FaSearch className={classes.icon} />
          <Menu className={classes.menu} />
          <div>
            <Link to="/account/login">
              <FaUser className={classes.icon} />
            </Link>

            <FaShoppingBag className={classes.icon} />
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
