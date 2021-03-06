import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import { FcNook } from "react-icons/fc";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";

import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navBar">
          <FcNook className="navBar-logo" />
          <NavLink
            exact
            to="/"
            className="nav-link-my"
            activeClassName="nav-link-active-my"
          >
            Phonebook
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/contacts"
              className="nav-link-my"
              activeClassName="nav-link-active-my"
            >
              Contacts
            </NavLink>
          )}
        </Navbar.Brand>
        <Navbar.Brand className="navBar">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
