import { Link } from "react-router-dom";
import LogoSrc from "../../../assets/Plantify_Website_Logo.avif";

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoSrc} alt="Plantify website logo" />
    </Link>
  );
};
export default Logo;
