import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  const [target, setTarget] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!start) return;

    let value = 0;
    const interval = setInterval(() => {
      value++;
      setProgress(value);

      if (value === 100) {
        clearInterval(interval);
        setTimeout(() => navigate(target), 300);
      }
    }, 30); // 3 seconds

    return () => clearInterval(interval);
  }, [start, target, navigate]);

  const handleClick = (path) => {
    setTarget(path);
    setProgress(0);
    setStart(true);
  };

  return (
    <section className="hero">
      <div className="promo-card">
        <h1>Everything You Need, All in One Place</h1>
        <p>Fast delivery. Secure login. Easy shopping.</p>

        {/* BUTTONS */}
        <div className="auth-buttons">
          <button className="auth-btn login" onClick={() => handleClick("/login")}>
            Login
          </button>
          <button className="auth-btn signup" onClick={() => handleClick("/signup")}>
            Sign Up
          </button>
        </div>

        {/* PROGRESS */}
        {start && (
          <div className="progress-container">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>

            <div
              className="truck"
              style={{ left: `calc(${progress}% - 14px)` }}
            >
              🚚
            </div>

            <span className="percent">{progress}%</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
