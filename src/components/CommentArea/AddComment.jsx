import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { handleSaveComment } from "../../data/Fetch";
import { Loading } from "../Loading";
import { AlertError } from "../AlertError";
export const AddComment = ({ asin, setUpdateComments }) => {
  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin,
  });
  const [isSaving, setIsSaving] = useState(false);
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };
  const [isError, setIsError] = useState("");
  useEffect(() => {
    !isSaving && setFormValue(initialFormState);
  }, [isSaving]);
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  return (
    <Form className="mb-3 d-flex flex-column align-items-center">
      {isError && <AlertError isError={isError} setIsError={setIsError} />}
      <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          type="text"
          placeholder="rate"
          name="rate"
          onChange={handleChange}
          value={formValue.rate}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 w-100"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          rows={3}
          name="comment"
          onChange={handleChange}
          value={formValue.comment}
        />
      </Form.Group>
      <Button
        className="w-25"
        variant="primary"
        onClick={() =>
          handleSaveComment(
            formValue,
            setIsSaving,
            setIsError,
            setUpdateComments
          )
        }
      >
        {isSaving ? <Loading /> : "💾"}
      </Button>
    </Form>
  );
};
