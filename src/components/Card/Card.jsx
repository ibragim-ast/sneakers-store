import { useContext } from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import { useLocation } from "react-router-dom";
import favoriteIcon from "../../images/favr-btn-icon.svg";
import favoriteIconActive from "../../images/favr-btn-icon-active.svg";
import addToCartIcon from "../../images/plus.svg";
import addToCartIconActive from "../../images/plus-checked.svg";

const Card = ({ id, name, price, image, onPlus, isLoading = false }) => {
  const { onAddToFavorite, isItemAdded, isFavorite } = useContext(AppContext);
  const location = useLocation();
  const obj = { id, name, price, image };

  const handleClickPlus = () => {
    onPlus(obj);
  };

  const handleToFavouriteClick = () => {
    onAddToFavorite(obj);
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
          {location.pathname !== "/orders" && (
            <div
              onClick={handleToFavouriteClick}
              className={styles.card__favorite}
            >
              <img
                src={isFavorite(id) ? favoriteIconActive : favoriteIcon}
                alt="Add to Favorite"
              />
            </div>
          )}

          <img className={styles.card__image} src={image} alt="sneakers" />
          <h5>{name}</h5>
          <div className={styles.card__bottom}>
            <div className={styles.card__price_container}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                src={isItemAdded(id) ? addToCartIconActive : addToCartIcon}
                alt="Добавить в корзину"
                onClick={handleClickPlus}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
