import { useState } from "react";
import { Button, Form } from "react-bootstrap";
export const AddComment = ({ asin }) => {
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3NDRhNjdmNmI0YjAwMTU0MjhmYzciLCJpYXQiOjE3MjAyMDAyNTUsImV4cCI6MTcyMTQwOTg1NX0.zZibZx8Lb7pxmIuZfS7vIoDYM9jCEZlJOXbMzKHa1vo";
  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin,
  });
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  const handleSaveComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(formValue),
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
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
      <Button variant="primary" onClick={handleSaveComment}>
        Send comment
      </Button>
    </Form>
  );
};
