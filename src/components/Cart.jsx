import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Button from "./UI/Button";

const Cart = () => {
  const { items } = useContext(CartContext);
  const cartTotal = items.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
