import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <span className="logo-text">🛍️ ShopNow</span>
      </div>

      {/* RIGHT MENU */}
      <ul className="nav-right">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            Cart 🛒 <span className="cart-count">{cartCount}</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
