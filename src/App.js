import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const onClickButton = () => {};

  useEffect(() => {
    fetch("https://6609f4c60f324a9a2883f918.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          cartItems={cartItems}
          onCloseCart={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__container">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="content__search-block">
            <img src="/img/search-icon.svg" alt="Search" />
            <input
              className="content__input"
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="sneakers">
          {items.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              image={obj.image}
              onClickFavorite={() => console.log("dsfsd")}
              onClickPlus={onClickButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
