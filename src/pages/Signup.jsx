import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-submit" onClick={() => navigate("/home")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
