import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container className="p-5">
      <div className="view_container">
        <h1>Registration page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              minLength="3"
              maxLength="10"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              multiple
              minLength="5"
              maxLength="30"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              minLength="7"
              maxLength="15"
            />
          </Form.Group>
          <Button type="submit" variant="outline-secondary" className="mx-6">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}
