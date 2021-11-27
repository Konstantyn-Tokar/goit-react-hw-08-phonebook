import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import Loader from "react-loader-spinner";
import { getLoading } from "../redux/contacts/contacts-selectors";
// import RegisterView from "./RegisterView";
// import LoginView from "./LoginView";

export default function TodosView() {
  const loader = useSelector(getLoading);
  return (
    <Container className="p-3">
      <Row>
        <Col sm={4}>
          <ContactForm />
          <Container className="p-5">
            {loader && (
              <Loader
                className="loader"
                type="Oval"
                color="#5C636A"
                height={60}
                width={60}
              />
            )}
          </Container>
        </Col>
        <Col sm={8}>
          <Filter />
          <ContactList />
        </Col>
      </Row>
      {/* <RegisterView />
      <LoginView /> */}
    </Container>
  );
}
