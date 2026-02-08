import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const { placeOrder } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      placeOrder("Online Payment", "Paid");
      alert("✅ Payment successful! Order placed.");
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Processing Payment</h1>
        <p>Please do not refresh the page...</p>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default Payment;
