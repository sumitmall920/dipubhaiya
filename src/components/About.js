import React from "react";
/*import aboutimg from "../assets/aboutimg.jpg"; *///  Apni image ka path yaha lagana

function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5" >About US</h2>
      <div className="row align-items-start">
        

        {/* LEFT SIDE TEXT */}
        <div className="col-md-6">

          
          <h2 className="fw-bold">
            About <span style={{ color: "#f7931e" }}>Company</span>
          </h2>

          <ul style={{ lineHeight: "1.9", marginTop: "15px",fontSize:"20px" }}>
            <li>Shree Ram Enterprises is a trusted name in the business of fabrication and firefighting.</li>
            <li>Expertise in custom fabrication</li>
            <li>Providing innovative firefighting solutions</li>
            <li>Committed to safety and quality</li>
            <li>Serving industrial, commercial, and residential clients</li>
          </ul>

        
          <h3 className="fw-bold mt-4" style={{ color: "#f7931e" }}>
            Vision :
          </h3>
          <ul style={{ lineHeight: "1.9", fontSize:"20px" }}>
            <li>
              To be a leading enterprise in fabrication and firefighting, ensuring safety and reliability.
            </li>
          </ul>

          
          <h3 className="fw-bold mt-4" style={{ color: "#f7931e" }}>
            Mission :
          </h3>
          <ul style={{ lineHeight: "1.9", fontSize:"20px" }}>
            <li>Deliver world-class fabrication works</li>
            <li>Provide advanced firefighting solutions</li>
            <li>Build long-term relationships with clients</li>
            <li>Ensure safety through innovation and quality</li>
          </ul>

        </div>

        {/* RIGHT SIDE IMAGE */}
         <div className="col-md-6 mt-4 mt-md-0"> 
        
          <img
            src="https://media.istockphoto.com/id/1192097505/photo/metal-worker-using-a-grinder.jpg?s=612x612&w=0&k=20&c=c2N4MG21oiB9QIJ4MMl_moRaDRx3QEHbCieIHDBXY3E="
            alt="About"
            className="img-fluid rounded shadow"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
  );
}

export default About;
