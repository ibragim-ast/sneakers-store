import { useEffect, useState, useContext } from "react";
import Card from "../components/Card/Card";
import { ORDERS_URL } from "../utils/constants";
import axios from "axios";
import AppContext from "../context";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(ORDERS_URL);
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        console.log("Ошибка при получении заказов", error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div>
        <h1>Мои заказы</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} isLoading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
