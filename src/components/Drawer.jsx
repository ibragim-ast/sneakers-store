import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="drawer__title">
          Корзина{" "}
          <img
            className="cart-item__remove-btn"
            src="/img/btn-remove.svg"
            alt="Удалить из корзины"
          />
        </h2>
        <div className="cart__items">
          <div className="cart-item">
            <div className="cart-item__img"> </div>
            <div className="cart-item__price-container">
              <p className="cart-item__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <b className="cart-item__price">12 999 руб.</b>
            </div>

            <img
              className="cart-item__remove-btn"
              src="/img/btn-remove.svg"
              alt="Удалить из корзины"
            />
          </div>
          <div className="cart-item">
            <div className="cart-item__img"> </div>
            <div className="cart-item__price-container">
              <p className="cart-item__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <b className="cart-item__price">12 999 руб.</b>
            </div>

            <img
              className="cart-item__remove-btn"
              src="/img/btn-remove.svg"
              alt="Удалить из корзины"
            />
          </div>
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
