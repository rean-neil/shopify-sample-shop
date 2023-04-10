import { useEffect, useState } from "react";

import Modal from "./Modal";
import Stepper from "./Stepper";
import { getOrderFulfillment } from "../api";

const OrderList = ({ orders }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>();
  const [fulfillmentStatus, setFulfillmentStatus] = useState<string>("");
  const steps = ["Unfulfilled", "Fulfilled", "Scheduled", "Shipped"];

  const handleClick = (order: any) => {
    setShowModal(true);
    setSelectedOrder(order.node);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOrder(undefined);
  };

  useEffect(() => {
    if (selectedOrder) {
      getOrderFulfillment(selectedOrder.id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFulfillmentStatus(data.data.fulfillments.edges[0].node.status);
        });
    }
  }, [selectedOrder]);

  return (
    <>
      {orders.map((order: any, index: number) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div>
              <p>
                <b>Order #{order.node.orderNumber}</b>
              </p>
              <p>
                Total Price: {order.node.totalPrice.amount}{" "}
                {order.node.totalPrice.currencyCode}
              </p>
            </div>
            <button onClick={() => handleClick(order)}>Status</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Variant</th>
                <th className="text-right">Unit Price</th>
                <th className="text-right">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {order.node.lineItems.edges.map(
                (product: any, product_index: number) => (
                  <tr key={product_index}>
                    <td>{product.node.title}</td>
                    <td>{product.node.quantity}</td>
                    <td>{product.node.variant.title}</td>
                    <td className="text-right">
                      {product.node.variant.price.amount}{" "}
                      {product.node.variant.price.currencyCode}
                    </td>
                    <td className="text-right">
                      {(
                        parseFloat(product.node.variant.price.amount) *
                        parseInt(product.node.quantity)
                      ).toFixed(2)}{" "}
                      {product.node.variant.price.currencyCode}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ))}

      {selectedOrder && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div style={{ width: "800px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "50px",
              }}
            >
              <div>
                <h2>Order #{selectedOrder.orderNumber} Status</h2>
                <p>
                  Total Price: {selectedOrder.totalPrice.amount}{" "}
                  {selectedOrder.totalPrice.currencyCode}
                </p>
              </div>
              <button
                style={{
                  fontSize: "20px",
                  padding: "2px 10px",
                  backgroundColor: "transparent",
                  marginTop: "10px",
                }}
                onClick={handleClose}
              >
                ⓧ
              </button>
            </div>
            <Stepper steps={steps} status={fulfillmentStatus} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default OrderList;
