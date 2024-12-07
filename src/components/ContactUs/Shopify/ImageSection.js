import classes from "./ImageSection.module.css";
const ImageSection = ({
  title,
  subtitle,
  ctaText,
  imageUrl,
  children,
  buttonText,
  buttonAction,
  text,
  className
}) => (
  <div style={{width:"50%"}}>
    <div className={`${classes.container_part} ${className}`}>
      <div>
        <h3>{title}</h3>
        <h1>{subtitle}</h1>
        <h3 className={`${className}-cta`}>{ctaText}</h3>
      </div>
      {children}
      {imageUrl && <img src={imageUrl} alt={title} />}
    </div>
    <section className={classes.buttonContainer}>
      <h3>{text}</h3>
      <button className={classes.actionButton} onClick={buttonAction}>
        {buttonText}
      </button>
    </section>
  </div>
);
export default ImageSection;
