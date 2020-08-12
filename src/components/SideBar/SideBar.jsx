import React from "react";
import "./SideBar.scss";
import PropTypes from "prop-types";

const SideBar = ({ items }) => {
  const getItems = () => {
    return items.map((item, index) => {
      return (
        <li className="side-bar__list-item" key={index}>
          <a href={item.link}>
            <div className="side-bar__list-item-icon">{item.icon}</div>
            <span className="side-bar__list-item-title">{item.title}</span>
          </a>
        </li>
      );
    });
  };
  return (
    <div className="side-bar">
      <div className="side-bar__header"></div>
      <ul className="side-bar__list">{getItems()}</ul>
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
  ),
};

export { SideBar };
