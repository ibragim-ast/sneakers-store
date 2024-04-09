import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Drawer from "./components/Drawer/Drawer";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import {
  SNEAKERS_URL,
  CART_ITEMS_URL,
  FAVORITES_URL,
  //ORDERS_URL,
} from "./utils/constants";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getCartItems();
    getFavorites();
    getSneakers();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (cartOpened) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
    return () => {
      document.body.classList.remove("no_scroll");
    };
  }, [cartOpened]);

  const getSneakers = async () => {
    const itemsResponce = await axios.get(SNEAKERS_URL);
    setItems(itemsResponce.data);
  };

  const getCartItems = async () => {
    const cartResponce = await axios.get(CART_ITEMS_URL);
    setCartItems(cartResponce.data);
  };

  const getFavorites = async (obj) => {
    const favoritesResponce = await axios.get(FAVORITES_URL);
    setFavorites(favoritesResponce.data);
  };

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`${CART_ITEMS_URL}/${obj.id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post(CART_ITEMS_URL, obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`${CART_ITEMS_URL}/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      const isAlreadyInFavorites = favorites.some(
        (favObj) => favObj.id === obj.id
      );

      if (isAlreadyInFavorites) {
        await axios.delete(`${FAVORITES_URL}/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(FAVORITES_URL, obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось выполнить операцию");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        onAddToFavorite,
        setCartItems,
        setCartOpened,
      }}
    >
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            cartItems={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onDelete={onRemoveItem}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                items={items}
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
