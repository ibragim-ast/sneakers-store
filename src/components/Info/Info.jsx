import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Info.module.scss";
import AppContext from "../../context";

const Info = ({ title, subtitle, image, pathTo }) => {
  const location = useLocation();
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className={styles.info}>
      <img src={image} alt="Empty" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={pathTo}>
        <button onClick={() => setCartOpened(false)}>
          <img src="img/arrow-left.svg" alt="Вернуться назад" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
