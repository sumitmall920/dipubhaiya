import React from "react";
import "./WhyChooseUs.css";
import {
  FaUsers,
  FaTools,
  FaHeadset,
  FaDraftingCompass,
  FaClock,
  FaRupeeSign
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="why-container container py-5">

      <div className="section-head">
        <h4><span>Why Choose</span> Us?</h4>
        <p>
          With over 10 years of fabrication experience, we deliver reliable,
          high-quality solutions using modern technology and skilled expertise.
        </p>
      </div>

      <div className="cards">

        <div className="item">
          <FaUsers className="icon"/>
          <h6>Skilled Workforce</h6>
          <p>Our experienced professionals ensure precision and durability.</p>
        </div>

        <div className="item">
          <FaTools className="icon"/>
          <h6>State-of-the-art Equipment</h6>
          <p>Advanced machines for accurate fabrication and finishing.</p>
        </div>

        <div className="item">
          <FaHeadset className="icon"/>
          <h6>24x7 Support</h6>
          <p>Always available to help and guide you anytime.</p>
        </div>

        <div className="item">
          <FaDraftingCompass className="icon"/>
          <h6>Custom Design Solutions</h6>
          <p>Tailor-made designs based on your project needs.</p>
        </div>

        <div className="item">
          <FaClock className="icon"/>
          <h6>On-time Completion</h6>
          <p>Projects delivered on schedule without quality compromise.</p>
        </div>

        <div className="item">
          <FaRupeeSign className="icon"/>
          <h6>Affordable Cost</h6>
          <p>Best fabrication services at competitive pricing.</p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;