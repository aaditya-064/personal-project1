// components/Card.js
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-gray-800 text-white shadow-lg rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
