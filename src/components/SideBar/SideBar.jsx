import * as React from "react";
import "./SideBar.scss";
// import PropTypes from "prop-types";
import Chevron from "../../assets/Chevron.svg";

const SideBar = ({ items, expandable }) => {
  const [isSideBarExanded, setIsSideBarExpanded] = React.useState(false);

  const getRowBody = ({ icon, title }) => {
    if (expandable) {
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
      <button
        className="side-bar__back-button"
        onClick={() => setIsSideBarExpanded(!isSideBarExanded)}
      >
        <Chevron />
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
    <nav className={getClassList()}>
      <ul className="side-bar__list">{getItems()}</ul>
      {expandable ? getExpandedButton() : null}
    </nav>
  );
};

// SideBar.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       icon: PropTypes.element,
//       title: PropTypes.string,
//       link: PropTypes.string,
//     })
//   ).isRequired,
//   expandable: PropTypes.bool,
// };

// SideBar.defaultProps = {
//   expandable: false,
// };

export { SideBar };
