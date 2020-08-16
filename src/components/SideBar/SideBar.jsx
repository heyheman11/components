import React, { useState } from "react";
import "./SideBar.scss";
import PropTypes from "prop-types";
import Chevron from "../../assets/Chevron.svg";

const SideBar = ({ items, expanded }) => {
  const [isSideBarExanded, setIsSideBarExpanded] = useState(false);
  const isExpandable = expanded.byButton || expanded.byMouse;

  const getRowBody = ({ icon, title }) => {
    if (isExpandable) {
      return (
        <>
          <div className="side-bar__list-item-icon">{icon}</div>
          <span
            className={`side-bar__list-item-title${
              isSideBarExanded ? "" : "--hide"
            }`}
          >
            {title}
          </span>
        </>
      );
    }
    return <div className="side-bar__list-item-icon">{icon}</div>;
  };

  const getItems = () => {
    return items.map((item, index) => {
      return (
        <li className="side-bar__list-item" key={index}>
          <a href={item.link}>{getRowBody(item)}</a>
        </li>
      );
    });
  };

  const getExpandedButton = () => {
    return (
      <button className="side-bar__back-button" onClick={() => setIsSideBarExpanded(!isSideBarExanded)}>
        <Chevron width={20} height={20} />
      </button>
    );
  };

  const getClassList = () => {
    const classList = ["side-bar"];
    if (isSideBarExanded) {
      classList.push("side-bar--expanded");
    }
    return classList.join(" ");
  };

  return (
    <div className={getClassList()}>
      <ul className="side-bar__list">{getItems()}</ul>
      {expanded.byButton ? getExpandedButton() : null}
    </div>
  );
};

SideBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
  expanded: PropTypes.shape({
    byButton: PropTypes.bool,
    byMouse: PropTypes.bool,
  }),
};

SideBar.defaultProps = {
  expanded: {
    byButton: false,
    byMouse: false,
  },
};

export { SideBar };
