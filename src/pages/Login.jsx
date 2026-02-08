import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-submit" onClick={() => navigate("/home")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
