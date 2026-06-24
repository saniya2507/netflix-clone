import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-overlay">

        <nav className="landing-navbar">
          <h1 className="landing-logo">NETFLIX</h1>
        </nav>

        <div className="landing-content">
          <h1>
            Unlimited movies,
            <br />
            TV shows and
            <br />
            more.
          </h1>

          <p>
            Watch anywhere. Cancel anytime.
          </p>

          <button
            className="get-started-btn"
            onClick={() => navigate("/browse")}
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

export default Landing;