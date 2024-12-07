import { useState } from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCloseHandler}></div>
      <div className={classes.cart}>
        <div className={classes.cartHeader}>
          <h1>CART</h1>
          <button onClick={props.onCloseHandler}>X</button>
        </div>
        {cartIsEmpty && <p>Your Cart Is Currently Empty.</p>}
      </div>
    </div>
  );
};
export default Cart;
