import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <>
      <NavLink
        to="/register"
        className="nav-link-my"
        activeClassName="nav-link-active-my"
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link-my"
        activeClassName="nav-link-active-my"
      >
        Login
      </NavLink>
    </>
  );
}
