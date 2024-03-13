import React from 'react';

function FlightCard({ title, imageSrc, date, duration, price }) {
  return (
    <div className="flight-card">
      <div className="flight-details">
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} />
        <p>{date}</p>
        <p>{duration}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default FlightCard;
