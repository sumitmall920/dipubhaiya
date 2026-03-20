import React, { useState } from "react";
import PopupForm from "./PopupForm";

function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between px-3 px-md-5 py-5"
        style={{ minHeight: "80vh", backgroundColor: "#b9c0cfff" }}
      >
        {/* TEXT */}
        <div style={{ maxWidth: "500px" }} className="text-center text-md-start mb-4 mb-md-0">
          
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#0b245b",
              fontSize: "clamp(28px, 5vw, 48px)" // 🔥 responsive font
            }}
          >
            Securing Your Safety Protecting Your World
          </h1>

          <p
            className="mb-4"
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#444"
            }}
          >
            We deliver Modern Fire Safety Solution For a Safe Tomorrow
          </p>

          <button
            className="btn btn-lg"
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
              padding: "10px 25px"
            }}
            onClick={() => setShowPopup(true)}
          >
            Get Started
          </button>
        </div>

        {/* IMAGE */}
        <div className="text-center">
          <img
            src="https://media.istockphoto.com/id/2156908250/photo/industrial-worker-welding-at-the-factory.jpg?s=612x612&w=0&k=20&c=jGOMeC8UN2KwjU6jP3nUsOV0uF6_U_gxan6p6yL6oeQ="
            alt="Hero"
            className="img-fluid"
            style={{
              borderRadius: "10px",
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </div>
      </div>

      {/* Popup */}
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default Hero;