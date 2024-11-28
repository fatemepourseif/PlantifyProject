import ServicesList from "./ServicesList";

import classes from "./Services.module.css"

const Services = () => {
  return (
    <div className={classes.services}>
      <h1>Our Services</h1>
      <h3>
        Explore some of our Value Added Services.{" "}
        <span>Find them All Here.</span>
      </h3>
      <ServicesList />
    </div>
  );
};
export default Services;
