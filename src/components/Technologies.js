import React from "react";
import "./Technologies.css";

// Images
import fabrication from "../assets/cnc.jpg";
import firealarm from "../assets/fire.jpg";
import firehydrant from "../assets/hydrant.webp";
import firesafety from "../assets/firetraning.jpg";
import annualmaintenance from "../assets/maintanance.jpg";

const Technologies = () => {
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
      desc: "Our maintenance services use advanced inspection tools and CMMS software to ensure reliability.",
      img: annualmaintenance,
    },
  ];

  return (
    <div className="tech-container container py-5">

      <div className="section-head">
        <h4><span>Technologies</span> We Use</h4>
        <p>We use modern tools and advanced systems to deliver high-quality services.</p>
      </div>

      <div className="tech-cards">
        {services.map((s, index) => (
          <div className="tech-item" key={index}>

            <div className="tech-img">
              <img src={s.img} alt={s.title} />
            </div>

            <h6>{s.title}</h6>
            <p>{s.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;