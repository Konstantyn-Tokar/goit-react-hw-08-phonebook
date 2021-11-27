import React from "react";
import Nav from "react-bootstrap/Nav";

// const styles = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 700,
//     color: "#2A363B",
//   },
//   activeLink: {
//     color: "#E84A5F",
//   },
// };

export default function AuthNav() {
  return (
    <>
      <Nav.Link
        href="/register"
        // to="/register"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Регистрация
      </Nav.Link>
      <Nav.Link
        href="/login"
        // to="/login"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Логин
      </Nav.Link>
    </>
  );
}
