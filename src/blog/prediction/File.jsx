import React from 'react';
import './prediction.css';

export default function File() {
  return (
    <div className="prediction-container">
      <section className="prediction">
        <div className="prediction-content">
          <h2>🏁 The Competition Has Ended!</h2>
          <p>
            Thank you for visiting us! 🙏 <br />
            We will be back with exciting new competitions soon. ✨
          </p>
          <a href="/" className="visit-btn">Visit Us 🏠</a> 
        </div>
      </section>
    </div>
  );
}