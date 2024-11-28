import classes from "./HeroSection.module.css";
import HeroImage from "../../assets/Austen_Gordon_Studio.webp";
import HeroImageNarrowPage from "../../assets/Austen_Gordon_Studio_narrowSize.webp";

const HeroSection = () => {
  return (
    <div className={classes.heroContainer}>
      <img
        src={HeroImage}
        alt="austen gorden studio"
        className={classes.heroImage}
      />
      <img
        src={HeroImageNarrowPage}
        alt="austen gorden studio"
        className={classes.heroImageNarrowPage}
      />
    </div>
  );
};
export default HeroSection;
