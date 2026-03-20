import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false); // Thank you band → Form wapas dikhega
    setName("");
    setContact("");
    setMessage("");
  };

  return (
    <div className="container py-5 " style={{ background: "white" }}>
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <div className="row">
        <div className="col-md-6">

          <div className="shadow p-4 rounded">

            {submitted ? (
              // SUCCESS MESSAGE WITH CLOSE BUTTON
              <div className="text-center py-4">
                <h3>Thank You!</h3>
                <p>We will contact you soon.</p>

                <button
                  className="btn btn-secondary mt-3"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            ) : (
              // FORM
              <form onSubmit={handleSubmit}>

                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  className="form-control mb-3"
                  type="tel"
                  placeholder="Contact Number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  maxLength="10"
                  pattern="[0-9]{10}"
                />

                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button className="btn btn-primary w-100">Send Message</button>
              </form>
            )}

          </div>
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="col-md-6">
          {/* <h4>Address</h4>
          <p>Shop no 1,2,3 Bastapur mod, Mujahana Rahim Hata pin code: 274203</p>
          <p>Shop no 2, R L Market Bhadakmora near Gujarati School vapi Valsad-396195</p>

          <p><b>Email:</b> Shreeramenterprise7226@gmail.com</p>

          <p>
            <b>Phone:</b><br />
            +91 72260 23372<br />
            +91 83203 70280
          </p> */}


          <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>Contact Details</h4>

          <p style={{ fontWeight: "600" }}>
            <FaMapMarkerAlt style={{ color: "orange", marginRight: "8px" }} />
            Shop no 1,2,3 Bastapur mod, Mujahana Rahim Hata - 274203
          </p>

          <p style={{ fontWeight: "600" }}>
            <FaMapMarkerAlt style={{ color: "orange", marginRight: "8px" }} />
            Shop no 2, R L Market Bhadakmora near Gujarati School, Vapi Valsad - 396195
          </p>

          <p style={{ fontWeight: "600", marginTop: "10px" }}>
            <FaEnvelope style={{ color: "orange", marginRight: "8px" }} />
            Shreeramenterprise7226@gmail.com
          </p>

          <p style={{ fontWeight: "600", marginTop: "10px" }}>
            <FaPhoneAlt style={{ color: "orange", marginRight: "8px" }} />
            +91 72260 23372
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +91 83203 70280
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
