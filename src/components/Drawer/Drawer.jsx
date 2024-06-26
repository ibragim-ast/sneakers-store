import axios from "axios";
import { useState } from "react";
import Info from "../Info/Info";
import styles from "./Drawer.module.scss";
import { ORDERS_URL, CART_ITEMS_URL } from "../../utils/constants";
import { useCart } from "../../hooks/useCart";
import closeCartIcon from "../../images/btn-remove.svg";
import emptyCartImg from "../../images/empty-cart.svg";
import completeOrderImg from "../../images/complete-order.svg";
import arrowRight from "../../images/arrow-right.svg";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onCloseCart, onDelete, opened }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, cartItems, setCartItems } = useCart();

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(ORDERS_URL, { items: cartItems });

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`${CART_ITEMS_URL}/${item.id}`);
        await delay(1000);
        setCartItems([]);
      }
      setTimeout(() => {
        setIsOrderComplete(false);
        onCloseCart();
      }, 3000);
    } catch (error) {
      console.log("Ошибка при создании заказа", error);
    }
    setIsLoading(false);
  };

  return (
    <div className={opened ? styles.overlay : styles.overlay_hidden}>
      <div className={styles.drawer}>
        <div className={styles.drawer__header}>
          <h2>Корзина </h2>
          <img
            className={styles.cart__remove}
            src={closeCartIcon}
            alt="Close"
            onClick={onCloseCart}
          />
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className={styles.cart__items}>
              {cartItems.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    className={styles.cartItem__img}
                    style={{ backgroundImage: `url(${obj.image})` }}
                  >
                    {" "}
                  </div>
                  <div className="cart-item__price-container">
                    <p>{obj.name}</p>
                    <b className={styles.cart_item__price}>{obj.price} руб.</b>
                  </div>

                  <img
                    onClick={() => onDelete(obj.id)}
                    className={styles.cart_item__remove_btn}
                    src={closeCartIcon}
                    alt="Удалить из корзины"
                  />
                </div>
              ))}
            </div>

            <ul className={styles.drawer__list}>
              <li className={styles.drawer__list_item}>
                <span>Итого:</span>
                <div className={styles.drawer__line}></div>
                <b>{totalPrice} руб.</b>
              </li>
              <li className={styles.drawer__list_item}>
                <span>Доставка:</span>
                <div className={styles.drawer__line}></div>
                <b>{((totalPrice / 100) * 3).toFixed(2)} руб.</b>
              </li>
            </ul>
            <button
              disabled={isLoading}
              className={styles.drawer__btn}
              onClick={onClickOrder}
            >
              Оформить заказ{" "}
              <img
                className={styles.drawer__btn_arrow}
                src={arrowRight}
                alt="arrow"
              />
            </button>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            subtitle={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской службе`
                : "Добавьте пару кроссовок"
            }
            image={isOrderComplete ? completeOrderImg : emptyCartImg}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
