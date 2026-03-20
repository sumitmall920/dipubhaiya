import React from "react";

function TopBar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-3 px-md-4"
      style={{
        backgroundColor: "#0b245b",
        color: "white",
        fontSize: "clamp(12px, 2vw, 14px)",
        padding: "5px 0"
      }}
    >

      {/* LEFT SIDE */}
      <div>

        {/* 📱 Mobile view (only 1 mail + 1 number) */}
        <div className="d-block d-md-none space-bt-1">
          <a
            href="mailto:Shreeramenterprise7226@gmail.com"
            className="text-white me-3"
            style={{ textDecoration: "none" }}
          >
            📧 EMail Service
          </a>

          <a
            href="tel:+917226023372"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            📞 Call:+91-7226023372
          </a>
        </div>

        {/* 💻 Desktop view (full details) */}
        <div className="d-none d-md-block">
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
            📞 +91-8320370280
          </a>
        </div>

      </div>

      {/* RIGHT SIDE (only desktop) */}
      <div className="d-none d-md-block">
        <a href="#" className="text-white me-3" style={{ textDecoration: "none" }}>
          Facebook
        </a>
        <a href="#" className="text-white me-3" style={{ textDecoration: "none" }}>
          LinkedIn
        </a>
        <a href="#" className="text-white" style={{ textDecoration: "none" }}>
          Instagram
        </a>
      </div>

    </div>
  );
}

export default TopBar;