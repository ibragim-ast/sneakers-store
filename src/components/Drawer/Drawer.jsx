import styles from "./Drawer.module.scss";

const Drawer = ({ onCloseCart, cartItems = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина{" "}
          <img
            className={styles.cart__remove}
            src="/img/btn-remove.svg"
            alt="Close"
            onClick={onCloseCart}
          />
        </h2>
        <div className={styles.cart__items}>
          {cartItems.map((obj) => (
            <div className={styles.cartItem}>
              <div
                className={styles.cartItem__img}
                style={{ backgroundImage: `url(${obj.image})` }}
              >
                {" "}
              </div>
              <div className="cart-item__price-container">
                <p>{obj.name}</p>
                <b className="cart-item__price">{obj.price} руб.</b>
              </div>

              <img
                className="cart-item__remove-btn"
                src="/img/btn-remove.svg"
                alt="Удалить из корзины"
              />
            </div>
          ))}
        </div>
        <ul className="drawer__list">
          <li className="drawer__list-item">
            <span>Итого:</span>
            <div className="drawer__line"></div>
            <b>19 999 руб.</b>
          </li>
          <li className="drawer__list-item">
            <span>Налог:</span>
            <div className="drawer__line"></div>
            <b>20 руб.</b>
          </li>
        </ul>
        <button className="drawer__btn">
          Оформить заказ{" "}
          <img className="drawer__btn-arrow" src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Drawer;
