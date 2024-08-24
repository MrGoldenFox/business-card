import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Shared/Footer";
import "./styles/App.css";
import image from "./assets/me.png"
import post_icon from "./assets/post_icon.png"

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
    <main>
      <img src={image} className="photo-img"/>
      <div className="main-content">
      <h1>Tymko Vitalii</h1>
      <h2>Frontend Developer</h2>
      <p><small>tymkovitalii.com</small></p>
      <button>
        <img src={post_icon} />
        Email
      </button>
      <section>
        <article>
          <h3>About</h3>
          <p>
            I am a web developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </article>
        <article>
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </article>
      </section>
      </div>
    </main>
    <Footer />
  </div>
);
