import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/fabrication.jpg";

function FabricationPage() {
  return (
    <div className="container py-5">
      
      {/* Back */}
      <Link to="/" className="btn btn-secondary mb-4">⬅ Back</Link>

      {/* Hero */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="fw-bold">Fabrication Work</h1>
          <p>
            We provide high-quality industrial and commercial fabrication
            solutions with strong durability and precision.
          </p>

          <ul>
            <li>Industrial Structure Fabrication</li>
            <li>Custom Metal Work</li>
            <li>High Quality Materials</li>
          </ul>
        </div>

        <div className="col-md-6">
          <img src={img} className="img-fluid rounded shadow" alt="fabrication" />
        </div>
      </div>

    </div>
  );
}

export default FabricationPage;