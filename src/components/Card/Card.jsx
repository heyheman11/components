import React, { useState } from "react";
import Chevron from "../../assets/Chevron.svg";
import "./Card.scss";

const Card = ({ heading, children, hover, animated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getClasses = () => {
    let classList = ["card-container"];
    if (animated) {
      classList.push("card-container__animated");
    }
    if (hover) {
      classList.push("card-container__hover");
    }
    return classList.join(" ");
  };

  return (
    <div className={getClasses()}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <h4>{heading}</h4>
        <Chevron />
      </button>
      <div className="card-body">{isOpen ? children : null}</div>
    </div>
  );
};

export { Card };
