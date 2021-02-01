import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink class="nav_link__signup" to="/signup">
          sign up
        </NavLink>
      </>
    );
  }

  return (
    <div className="nav_container">
      <div className="nav_left">
        <NavLink exact to="/">
          <i className="fas fa-home" />
          <input type="text" placeholder="    search groups.."></input>
        </NavLink>
      </div>
      <div className="nav_center">
        <h1>TennisMatched</h1>
      </div>
      <div className="nav_right">
        <NavLink exact to="/skill-guide">
          <button className="skill_button">skill guide</button>
        </NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
