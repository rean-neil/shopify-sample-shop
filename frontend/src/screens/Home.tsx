import { OrderList, TopBar } from "../components";
import { useEffect, useState } from "react";

import { getCustomerOrders } from "../api";

const Home = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getCustomerOrders()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrders(data.data.customer.orders.edges);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <div className="orders-container">
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default Home;
