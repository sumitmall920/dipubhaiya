import React, { useState } from 'react';

const PopupForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('Fire Alarm Systems');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Inline CSS
  const styles = {
    backdrop: {
      position: 'fixed',
      top: 20,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    content: {
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      width: '300px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      border: 'none',
      background: 'none',
      fontSize: '18px',
      cursor: 'pointer',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginTop: '10px',
    },
    input: {
      padding: '8px',
      marginTop: '5px',
      marginBottom: '15px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    confirmation: {
      textAlign: 'center',
      padding: '20px',
    }
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.content}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>

        {submitted ? (
          <div style={styles.confirmation}>
            <h3>Thank you!</h3>
            <p>We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Get Started</h2>

            <label style={styles.label}>Name:</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />

            <label style={styles.label}>Contact Number:</label>
            <input 
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              pattern="[0-9]{10}"
              maxLength="10"
              placeholder="Enter 10-digit number"
              style={styles.input}
            />

            <label style={styles.label}>Service Inquiry:</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={styles.input}
            >
              <option value="Fabrication Work">Fabrication Work</option>
              <option value="Fire Extinguishers">Fire Extinguishers</option>
              <option value="Safety Training">Safety Training</option>
              <option value="Maintenance Contracts">Maintenance Contracts</option>
            </select>

            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              Submit
            </button>

          </form>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
