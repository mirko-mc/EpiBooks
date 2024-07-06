import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { handleSaveComment } from "../data/Fetch";
export const AddComment = ({ asin }) => {
  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin,
  });
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          type="text"
          placeholder="rate"
          name="rate"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={() => handleSaveComment(formValue)}>
        Send comment
      </Button>
    </Form>
  );
};
