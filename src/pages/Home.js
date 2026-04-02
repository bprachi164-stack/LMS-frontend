import "./Home.css";
import heroImg from "../hero.jpg";
import img1 from "../interactive.jpeg";
import img2 from "../progess.jpeg";
import img3 from "../career.jpeg";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <h2 className="logo">LearnActive</h2>
 
        <div className="right-section">
          <nav>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
 
          <div className="auth-buttons">
            <button className="btn outline">Sign In</button>
            <button className="btn primary">Sign Up</button>
          </div>
        </div>
      </header>
 
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Learn Smarter with LearnActive 🚀</h1>
          <p>
            Build skills with interactive courses, real-world projects,
            and smart tracking.
          </p>
 
          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn outline-dark">Sign In</button>
          </div>
        </div>
 
        <div className="hero-image">
          <img src={heroImg} alt="Learning" className="hero-img" />
        </div>
      </section>
 
      {/* FEATURES */}
      <section className="features">
        <h2>Why LearnActive?</h2>
 
        <div className="card-container">
          <div className="card">
           <img src={img1} alt="feature" className="card-img" />
            <h3>Interactive Learning</h3>
            <p>Engaging content with quizzes and projects.</p>
          </div>
 
          <div className="card">
            <img src={img2} alt="feature" className="card-img" />
            <h3>Track Progress</h3>
            <p>Monitor your learning with smart analytics.</p>
          </div>
 
          <div className="card">
            <img src={img3} alt="feature" className="card-img" />
            <h3>Career Growth</h3>
            <p>Build skills that matter in real-world jobs.</p>
          </div>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <h3>LearnActive</h3>
          <p>Empowering learners with smart education.</p>
 
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
 
          <p className="copy">© 2026 LearnActive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}