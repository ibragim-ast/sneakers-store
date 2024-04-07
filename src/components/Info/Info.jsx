import { Link, useLocation } from "react-router-dom";
import styles from "./Info.module.scss";

const Info = ({ title, subtitle, pathTo }) => {
  const location = useLocation();

  return (
    <div className={styles.info}>
      <img
        src={
          location.pathname === "/favorites"
            ? "/img/favorites-empty.svg"
            : location.pathname === "/orders"
            ? "/img/orders-empty.svg"
            : "/img/empty-cart.svg"
        }
        alt="Empty"
      />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={pathTo}>
        <button>
          <img src="/img/arrow-left" alt="Вернуться назад" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
