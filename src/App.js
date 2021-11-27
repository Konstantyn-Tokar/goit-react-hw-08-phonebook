import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";

import AppBar from "./components/AppBar";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
// import { useSelector } from "react-redux";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";
// import Loader from "react-loader-spinner";
// import { getLoading } from "../redux/contacts/contacts-selectors";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loadind</p>}>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
