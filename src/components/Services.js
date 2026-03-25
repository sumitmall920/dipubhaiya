import React from "react";
import { Link } from "react-router-dom";
import {
  FaTools,
  FaFire,
  FaWater,
  FaChalkboardTeacher,
  FaClipboardList,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Fabrication Work",
      desc: "Fabrication of Industrial & Commercial Structures.",
      icon: <FaTools size={26} color="#ff4d6d" />,
      link: "/fabrication",
    },
    {
      title: "Fire Alarm System",
      desc: "Installation and maintenance of fire alarm systems.",
      icon: <FaFire size={26} color="#ffc107" />,
      link: "/fire-alarm",
    },
    {
      title: "Fire Hydrant System",
      desc: "Hydrant installation for industrial & commercial buildings.",
      icon: <FaWater size={26} color="#00bcd4" />,
      link: "/fire-hydrant",
    },
    {
      title: "Fire Safety Training",
      desc: "Safety training sessions for employees and staff.",
      icon: <FaChalkboardTeacher size={26} color="#4caf50" />,
      link: "/fire-training",
    },
    {
      title: "Annual Maintenance Contract",
      desc: "Complete AMC services for fire & safety systems.",
      icon: <FaClipboardList size={26} color="#8bc34a" />,
      link: "/amc",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-3">WHAT WE OFFER</h2>
      <p className="text-center text-muted mb-5">
        We provide high-quality fire & safety solutions tailored to your needs.
      </p>

      <div className="row g-4 justify-content-center">
        {services.map((s, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <Link to={s.link} style={{ textDecoration: "none" }}>
              <div
                className="p-4 rounded shadow-sm h-100 d-flex align-items-start"
                style={{
                  background: "#f5f7fa",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                {/* LEFT ICON */}
                <div
                  className="me-3 d-flex align-items-center justify-content-center"
                  style={{
                    minWidth: "45px",
                    height: "45px",
                    borderRadius: "8px",
                    background: "#fff",
                  }}
                >
                  {s.icon}
                </div>

                {/* RIGHT TEXT */}
                <div>
                  <h6 className="fw-bold text-dark mb-1">{s.title}</h6>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "14px" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;