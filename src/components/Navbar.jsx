import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">LearnX</h2>

      <div>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <Link to="/login" className="btn">Sign In</Link>
        <Link to="/register" className="btn primary">Register</Link>
      </div>
    </nav>
  );
}