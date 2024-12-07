import FooterBrowse from "./FooterBrowse";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import FooterServices from "./FooterServices";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <FooterContact />
      <FooterBrowse />
      <FooterServices />
      <FooterLegal />
    </div>
  );
};
export default Footer;
