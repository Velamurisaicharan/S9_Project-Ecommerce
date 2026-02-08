import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const { orders } = useCart();
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2 className="empty-orders">No orders placed yet 📦</h2>
      </div>
    );
  }

  return (
    <div className="orders-page">
      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>Your Orders</h1>

      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <span>Order ID: #{order.id}</span>
            <span>{order.date}</span>
          </div>

          <div className="order-items">
            {order.items.map((item, i) => (
              <div key={i} className="order-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-footer">
            <span>
              Payment:{" "}
              <span
                className={`status ${
                  order.paymentStatus === "Paid" ? "paid" : "pending"
                }`}
              >
                {order.paymentStatus}
              </span>
            </span>
            <span>Total: ${order.total.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
