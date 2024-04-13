import { useState, useContext } from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

const Card = ({ id, name, price, image, onPlus, isLoading = false }) => {
  const { onAddToFavorite, isItemAdded, isFavorite } = useContext(AppContext);

  const handleClickPlus = () => {
    onPlus({ name, price, image, id });
  };

  const handleToFavouriteClick = () => {
    onAddToFavorite({ id, name, image, price });
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="32" />
          <rect x="120" y="234" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div
            onClick={handleToFavouriteClick}
            className={styles.card__favorite}
          >
            <img
              src={
                isFavorite(id)
                  ? "/img/favr-btn-icon-active.svg"
                  : "/img/favr-btn-icon.svg"
              }
              alt="Add to Favorite"
            />
          </div>

          <img width="100%" height={135} src={image} alt="" />
          <h5>{name}</h5>
          <div className={styles.card__bottom}>
            <div className={styles.card__price_container}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              src={isItemAdded(id) ? "/img/plus-checked.svg" : "/img/plus.svg"}
              alt="Добавить в корзину"
              onClick={handleClickPlus}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
