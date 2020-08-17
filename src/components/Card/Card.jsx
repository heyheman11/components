import * as React from "react";
import Chevron from "../../assets/Chevron.svg";
import "./Card.scss";

const Card = ({ heading, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const getClasses = () => {
    let classList = ["card-container"];
    if (isOpen) {
      classList.push("card-container__active");
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
