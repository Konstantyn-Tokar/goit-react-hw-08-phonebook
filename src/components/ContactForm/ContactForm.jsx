import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getItems } from "../../redux/contacts/contacts-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumder] = useState("");
  console.log("NAME", name);
  const dispatch = useDispatch();
  const сontacts = useSelector(getItems);

  const handelChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumder(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      сontacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
        // (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`Пользователь с именем ${name} уже добавлен`);
    }

    dispatch(addContact({ name, number }));
    toСlear();
  };

  const toСlear = () => {
    setName("");
    setNumder("");
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handelChange}
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handelChange}
          autoComplete="off"
        />
      </Form.Group>

      <Button type="submit" variant="outline-secondary" className="mx-6">
        Add contact
      </Button>
    </Form>
  );
}
