import { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

const Favorites = () => {
  const { favorites, onAddToFavorite } = useContext(AppContext);

  return (
    <div className="content">
      <div>
        <h1>Избранное</h1>
      </div>

      <div className="sneakers">
        {favorites.map((item, index) => (
          <Card key={index} onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
