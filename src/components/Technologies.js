import React from "react";

// Local images import
import fabrication from "../assets/cnc.jpg";
import firealarm from "../assets/fire.jpg";
import firehydrant from "../assets/hydrant.webp";
import firesafety from "../assets/firetraning.jpg";
import annualmaintenance from "../assets/maintanance.jpg";

function Technologies() {
  const services = [
    {
      title: "Fabrication Work",
      desc: "We use advanced CNC machining and modern welding techniques in our fabrication work",
      img: fabrication,
    },
    {
      title: "Fire Alarm System",
      desc: "Our fire alarm systems are equipped with the latest smoke and heat detection technology.",
      img: firealarm,
    },
    {
      title: "Fire Hydrant System",
      desc: "Use of durable pipes and hydraulic calculations to ensure proper water flow.",
      img: firehydrant,
    },
    {
      title: "Fire Safety Training",
      desc: "We implement VR-based training modules for comprehensive fire safety training.",
      img: firesafety,
    },
    {
      title: "Annual Maintenance Contract",
      desc: "Our maintenance services use advanced inspection tools and CMMS software to ensure reliability .",
      img: annualmaintenance,
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Technologies We Use</h2>

      <div className="row g-4">
        {services.map((s, index) => (
          <div className="col-md-4" key={index}>
            <div className="shadow rounded overflow-hidden h-100" style={{ background: "#fff" }}>
              
              {/* Image */}
              <img
                src={s.img}
                alt={s.title}
                className="img-fluid"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              {/* Text */}
              <div className="p-4">
                <h4 className=" mb-2" style={{color:"orange"}} >{s.title}</h4>
                <p className=" mb-2">{s.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies ;
