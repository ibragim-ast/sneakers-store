import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, image, onClickPlus, onClickFavorite }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div onClick={onClickFavorite} className={styles.card__favorite}>
        <img src="/img/favr-btn-icon.svg" alt="Add to Favorite" />
      </div>

      <img width={133} height={112} src={image} alt="" />
      <h5>{title}</h5>
      <div className={styles.card__bottom}>
        <div className={styles.card__price_container}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "/img/plus-checked.svg" : "/img/plus.svg"}
          alt="Добавить в корзину"
          onClick={handleClickPlus}
        />
      </div>
    </div>
  );
};

export default Card;
