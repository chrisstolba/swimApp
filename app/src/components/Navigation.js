import React from "react";
import { Link } from "react-router-dom";

const navButtons = [
  "Top Times",
  "Search Times",
  "Search Swimmers",
  "Search Lineups",
  "Submit Times",
  "Create Lineup",
  "Create Swimmer",
  "Create Meet"
];

const Navigation = props => {
  return (
    <div className="NavigationContainer">
      {navButtons.map(button => {
        const buttonPath = "/" + button.split(" ").join("");
        return <Link className="NavigationButton" key={buttonPath} to={buttonPath}>{button}</Link>;
      })}
    </div>
  );
};

export default Navigation;
