import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <Link to="/" className="logo-link">
        <p> Fitness Tracker</p>
      </Link>
      <nav>
        <Link to="/activities">Activities!</Link>

        {token ? (
          <button
            onClick={logout}
            style={{
              background: "blue",
              border: "none",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            LOG OUT
          </button>
        ) : (
          <>
            <Link to="register">Register!</Link>
            <Link to="/login">Login Now</Link>
          </>
        )}
      </nav>
    </header>
  );
}
