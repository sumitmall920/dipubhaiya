import React from "react";

function TopBar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-3 px-md-4"
      style={{
        backgroundColor: "#0b245b",
        color: "white",
        fontSize: "clamp(12px, 2vw, 14px)",
        padding: "6px 0",
        flexWrap: "wrap"
      }}
    >
      
      {/* LEFT SIDE */}
      <div className="d-flex align-items-center flex-wrap">

        {/* 📱 Mobile view */}
        <div className="d-flex d-md-none justify-content-between w-100">
          <a
            href="mailto:Shreeramenterprise7226@gmail.com"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            📧shreeramenterprise7226@gmail.com
          </a>

          <a
            href="tel:+917226023372"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            📞7226023372
          </a>
        </div>

        {/* 💻 Desktop view */}
        <div className="d-none d-md-flex align-items-center">
          <a
            href="mailto:Shreeramenterprise7226@gmail.com"
            className="text-white me-3"
            style={{ textDecoration: "none" }}
          >
            📧 Shreeramenterprise7226@gmail.com
          </a>

          <a
            href="tel:+917226023372"
            className="text-white me-3"
            style={{ textDecoration: "none" }}
          >
            📞 +91-72260 23372
          </a>

          <a
            href="tel:+918320370280"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
                        PHONE:📞 +91-8320370280
          </a>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="d-none d-md-flex align-items-center mt-1 mt-md-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-white me-3"
          style={{ textDecoration: "none" }}
        >
          Facebook
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-white me-3"
          style={{ textDecoration: "none" }}
        >
          LinkedIn
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          Instagram
        </a>
      </div>

    </div>
  );
}

export default TopBar;