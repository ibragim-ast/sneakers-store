import { Link } from "react-router-dom";
import styled from "./Header.module.scss";
import { useCart } from "../../hooks/useCart";

const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart();

  return (
    <header className={styled.header}>
      <Link to="/sneakers-store">
        <div className={styled.headerLeft}>
          <img
            className={styled.header__logo}
            width={40}
            height={40}
            src="img/logo.svg"
            alt="Logo"
          />
          <div className={styled.headerInfo}>
            <h3 className={styled.header__title}>C4 Sneakers</h3>
            <p className={styled.header__description}>Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styled.headerRight}>
        <li onClick={onClickCart}>
          <img
            className={styled.header__icon}
            width={18}
            height={18}
            src="img/cart.svg"
            alt="Logo"
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="favorites">
            <img
              className={styled.header__icon}
              width={18}
              height={18}
              src="img/favorite.svg"
              alt="Logo"
            />
            <span>Избранное</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              className={styled.header__icon}
              width={18}
              height={18}
              src="img/user.svg"
              alt="Logo"
            />
            <span>Заказы</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
