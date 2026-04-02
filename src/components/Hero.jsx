import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Learn Smart, Grow Fast 🚀</h1>
      <p>Interactive LMS platform for modern learners</p>

      <div>
        <Link to="/register" className="btn primary">Get Started</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </section>
  );
}