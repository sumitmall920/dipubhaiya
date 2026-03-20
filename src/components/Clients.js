import React, { useState } from "react";
import "./Clients.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    position: "Factory Owner",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Fabrication work bahut strong aur durable tha. Team ne time pe delivery di."
  },
  {
    name: "Priya Verma",
    position: "Office Manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Fire alarm system installation bahut professional tha. Ab safety ka full confidence hai."
  },
  {
    name: "Amit Patel",
    position: "Warehouse Owner",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    text: "Fire hydrant system perfectly install hua. Emergency ke liye best setup hai."
  },
  {
    name: "Neha Singh",
    position: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Fire safety training session bahut informative tha. Staff ko real knowledge mila."
  },
  {
    name: "Rakesh Gupta",
    position: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "AMC service lene ke baad maintenance tension khatam ho gaya."
  },
  {
    name: "Sneha Kapoor",
    position: "Company Director",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    text: "Overall service quality excellent hai. Highly recommended."
  }
];

const Clients = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const nextSlide = () => {
    if (startIndex + cardsPerPage >= testimonials.length) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex === 0) {
      setStartIndex(testimonials.length - cardsPerPage);
    } else {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="clients-container container py-5">

      <div className="clients-head">
        <h4><span>Happy</span> Clients</h4>
        <p>We value our customers and their trust.</p>
      </div>

      <div className="clients-cards">
        {visibleTestimonials.map((item, index) => (
          <div className="clients-item" key={index}>
            
            {/* ✅ Indian style profile image */}
            <img src={item.image} alt={item.name} className="client-img" />

            <p className="clients-text">“{item.text}”</p>
            <h6>{item.name}</h6>
            <span>{item.position}</span>
          </div>
        ))}
      </div>

      <div className="clients-buttons">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>

    </div>
  );
};

export default Clients;