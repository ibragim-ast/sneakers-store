import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import { ORDERS_URL } from "../utils/constants";
import Info from "../components/Info/Info";
import emptyOrdersSmile from "../images/orders-empty.svg";

const Orders = () => {
  const [orders, setOrders] = useState([]);
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
      {orders.length ? (
        <>
          <div>
            <h1>Мои заказы</h1>
          </div>
          <div className="sneakers">
            {(isLoading ? [...Array(8)] : orders).map((item, index) => (
              <Card key={index} isLoading={isLoading} {...item} />
            ))}
          </div>
        </>
      ) : (
        <Info
          title="Заказов пока нет"
          subtitle="Добавьте хотя бы один заказ"
          image={emptyOrdersSmile}
          pathTo="/sneakers-store"
        />
      )}
    </div>
  );
};

export default Orders;
