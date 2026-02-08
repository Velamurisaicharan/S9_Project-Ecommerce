import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2 className="empty-cart">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>Your Cart</h1>

      <div className="cart-list">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => removeFromCart(index)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="buy-btn" onClick={() => navigate("/checkout")}>
  Proceed to Buy
</button>
      </div>
    </div>
  );
}

export default Cart;
