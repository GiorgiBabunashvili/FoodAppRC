import { useContext } from "react";
import headerImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((acc, cur) => {
    return (acc += cur.quantity);
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={headerImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
