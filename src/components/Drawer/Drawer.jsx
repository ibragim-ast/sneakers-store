import { useState, useContext } from "react";
import Info from "../Info/Info";
import styles from "./Drawer.module.scss";
import AppContext from "../../context";
import axios from "axios";
import { ORDERS_URL, CART_ITEMS_URL } from "../../utils/constants";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onCloseCart, onDelete }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawer__header}>
          <h2>Корзина </h2>
          <img
            className={styles.cart__remove}
            src="/img/btn-remove.svg"
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
                    src="/img/btn-remove.svg"
                    alt="Удалить из корзины"
                  />
                </div>
              ))}
            </div>

            <ul className={styles.drawer__list}>
              <li className={styles.drawer__list_item}>
                <span>Итого:</span>
                <div className={styles.drawer__line}></div>
                <b>19 999 руб.</b>
              </li>
              <li className={styles.drawer__list_item}>
                <span>Налог:</span>
                <div className={styles.drawer__line}></div>
                <b>20 руб.</b>
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
                src="/img/arrow.svg"
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
            image={
              isOrderComplete
                ? "/img/complete-order.svg"
                : "/img/empty-cart.svg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
