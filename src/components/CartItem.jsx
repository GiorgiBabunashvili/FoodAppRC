import { currencyFormatter } from "../util/formating";

const CartItem = ({ name, quantity, price, decrease, increase }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
