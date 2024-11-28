import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.btn} ${props.className || ""}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
export default Button;
