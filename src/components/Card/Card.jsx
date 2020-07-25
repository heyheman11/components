import React from "react";
import "./Card.scss";

const Card = ({ heading, children }) => {
  return (
    <div className="card-container">
      <h4>{heading}</h4>
      <div className="card-body">{children}</div>
    </div>
  );
};

export { Card };
