import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import "./Checkout.css";

function Checkout() {
  const { cartItems, totalPrice, placeOrder } = useCart();

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: ""
  });

  const [payment, setPayment] = useState("cod");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
  if (
    !address.name ||
    !address.phone ||
    !address.street ||
    !address.city ||
    !address.pincode
  ) {
    alert("Please fill all address fields");
    return;
  }

  if (payment === "cod") {
    placeOrder("Cash on Delivery", "Pending");
    alert("🎉 Order placed successfully!");
    navigate("/home");
  } else {
    navigate("/payment");
  }
};



  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        {/* LEFT SECTION */}
        <div className="checkout-left">
          {/* ADDRESS */}
          <div className="card">
            <h2>Shipping Address</h2>

            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} />
            <input name="street" placeholder="Street Address" onChange={handleChange} />
            <input name="city" placeholder="City" onChange={handleChange} />
            <input name="pincode" placeholder="Pincode" onChange={handleChange} />
          </div>

          {/* PAYMENT */}
          <div className="card">
            <h2>Payment Method</h2>

            <label className="radio">
              <input
                type="radio"
                name="payment"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Cash on Delivery
            </label>

            <label className="radio">
              <input
                type="radio"
                name="payment"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              Credit / Debit Card
            </label>

            <label className="radio">
              <input
                type="radio"
                name="payment"
                checked={payment === "upi"}
                onChange={() => setPayment("upi")}
              />
              UPI / Net Banking
            </label>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="checkout-right">
          <div className="summary-card">
            <h2>Order Summary</h2>

            {cartItems.map((item, i) => (
              <div key={i} className="summary-item">
                <span>{item.title.slice(0, 25)}...</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}

            <hr />
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
<button className="place-btn" onClick={handlePlaceOrder}>
  Place Order
</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
