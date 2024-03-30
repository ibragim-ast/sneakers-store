import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/img/favr-btn-icon.svg" alt="Add to Favorite" />
      </div>

      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <h5 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card__bottom">
        <div className="card__price-container">
          <span className="card__price-title">Цена:</span>
          <b className="card__price">12 999 руб.</b>
        </div>
        <button className="card__button">
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="Добавить в корзину"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
