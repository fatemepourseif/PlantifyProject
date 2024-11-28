import classes from "./ServicesItem.module.css";

const ServicesItem = (props) => {
  return (
    <li className={classes.serviceItem}>
      <img src={props.src} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <button>LEARN MORE</button>
      </div>
    </li>
  );
};
export default ServicesItem;
