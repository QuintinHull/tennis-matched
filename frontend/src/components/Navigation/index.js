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
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav_container">
      <div className="nav_items">
        <div className="nav_left">
          <NavLink exact to="/">
            <i className="fas fa-home" />
          </NavLink>
        </div>
        <div className="nav_center">
          <h1>GotNext</h1>
        </div>
        <div className="nav_right">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
