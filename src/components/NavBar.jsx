import * as React from "react";
import IconNav from "./IconNav";
import Cross from "./Cross";

const NavBar = ({
  click,
  handleHomeClicked,
  handleClicked,
  homeIconClicked,
}) => {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid sub-navbar">
          <button className="navbar-brand">
            <span style={{ userSelect: "none" }}>
              <div className="movie-icon">📽️</div>
              <div className="sub">
                <span className="l-channel">L</span> Channel
              </div>
              <div className="movie-icon">📽️</div>
            </span>
          </button>
          <div className="list-container">
            <IconNav
              homeIconClicked={homeIconClicked}
              handleHomeClicked={handleHomeClicked}
            />
          </div>
          <svg
            onClick={() => handleClicked(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-list"
            id="nav-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d={
                click
                  ? "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  : "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              }
            />
          </svg>
          {click && (
            <Cross
              handleClicked={handleClicked}
              handleHomeClicked={handleHomeClicked}
              homeIconClicked={homeIconClicked}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
