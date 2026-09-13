import { Link } from "react-router-dom";

const Arrow = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
const Spark = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m12 3-1.2 4.1a5 5 0 0 1-3.4 3.4L3 12l4.4 1.5a5 5 0 0 1 3.4 3.4L12 21l1.2-4.1a5 5 0 0 1 3.4-3.4L21 12l-4.4-1.5a5 5 0 0 1-3.4-3.4L12 3Z" /></svg>;

const Home = () => (
  <main className="landing-page">
    <section className="landing-hero">
      <div className="hero-seal"><Spark /> A smarter daily word habit</div>
      <h1>Find the words<br />you’ve been <em>missing.</em></h1>
      <p>Short, memorable lessons that grow your vocabulary, sharpen your expression, and reward every step forward.</p>
      <div className="hero-actions">
        <Link to="/signup" className="landing-primary">Start learning free <Arrow /></Link>
        <Link to="/login" className="landing-secondary">I already have an account</Link>
      </div>
      <div className="word-orbit" aria-hidden="true">
        <span className="orbit-word one">eloquent<small>expressive & persuasive</small></span>
        <span className="orbit-word two">serendipity<small>a fortunate discovery</small></span>
        <span className="orbit-word three">lucid<small>clear & easy to understand</small></span>
      </div>
    </section>
    <section className="landing-features">
      <article><span>01</span><h2>Learn in context</h2><p>Memorable examples turn new words into language you can actually use.</p></article>
      <article><span>02</span><h2>Practice at the right time</h2><p>Quick review sessions strengthen recall without overwhelming your day.</p></article>
      <article><span>03</span><h2>Stay motivated</h2><p>Earn XP, build streaks, collect coins, and unlock rewards as you grow.</p></article>
    </section>
  </main>
);

export default Home;
