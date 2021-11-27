import React from "react";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome to the site </h1>
    <p>to get started on the site, login to your account or register</p>
  </div>
);

export default HomeView;
