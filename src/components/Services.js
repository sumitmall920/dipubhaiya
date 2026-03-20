import React from "react";
import { Link } from "react-router-dom";

// Images
import fabrication from "../assets/fabrication.jpg";
import firealarm from "../assets/firealarm.jpg";
import firehydrant from "../assets/firehydrant.jpg";
import firesafety from "../assets/firesafety.jpg";
import annualmaintenance from "../assets/annualmaintenance.jpg";

function Services() {
  const services = [
    {
      title: "Fabrication Work",
      desc: "Fabrication of Industrial & Commercial Structures.",
      img: fabrication,
      link: "/fabrication",
    },
    {
      title: "Fire Alarm System",
      desc: "Installation and maintenance of fire alarm systems.",
      img: firealarm,
      link: "/fire-alarm",
    },
    {
      title: "Fire Hydrant System",
      desc: "Hydrant installation for industrial & commercial buildings.",
      img: firehydrant,
      link: "/fire-hydrant",
    },
    {
      title: "Fire Safety Training",
      desc: "Safety training sessions for employees and staff.",
      img: firesafety,
      link: "/fire-training",
    },
    {
      title: "Annual Maintenance Contract",
      desc: "Complete AMC services for fire & safety systems.",
      img: annualmaintenance,
      link: "/amc",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Our Services</h1>

      <div className="row g-4">
        {services.map((s, index) => (
          <div className="col-md-4" key={index}>
            <Link to={s.link} style={{ textDecoration: "none" }}>
              <div
                className="shadow rounded overflow-hidden h-100"
                style={{
                  background: "#fff",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-4">
                  <h4 className="fw-bold mb-2" style={{ color: "orange" }}>
                    {s.title}
                  </h4>
                  <p style={{ color: "#555" }}>{s.desc}</p>
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