import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Loading } from "../Loading";
import { saveComment } from "../../data/Fetch";
import { AlertCustom } from "../AlertCustom";
export const AddComment = ({ asin, handleSetComments }) => {
  const initialAlertState = {
    isAlert: false,
    heading: "",
    message: "",
    variant: "",
  };
  const [inAlert, setInAlert] = useState(initialAlertState);
  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin,
  });
  const [isFetching, setIsFetching] = useState(false);
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };
  const handleSaveComment = async () => {
    if (parseInt(formValue.rate) < 0 || parseInt(formValue.rate) > 5) {
      setInAlert({
        isAlert: true,
        heading: "Rate not valid",
        message: "Rate must be between 0 and 5",
        variant: "danger",
      })
    } else if (formValue.comment === "") {
      setInAlert({
        isAlert: true,
        heading: "Comment is empty",
        message: "You forgot to enter the comment.",
        variant: "danger",
      })
    } else {
    setIsFetching(true);
    await saveComment(formValue)
      .catch((e) => {
        setInAlert({
          isAlert: true,
          heading: `Error ${e.message}`,
          message: "Try Later",
          variant: "danger",
        })
      })
      .finally(
        setInAlert(initialAlertState)
      );
    setFormValue(initialFormState);
    await handleSetComments(asin);
    setIsFetching(false);
    }
  };
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  return (
    <Form className="mb-3 d-flex flex-column align-items-center">
      <Form.Group className="mb-3 w-100" controlId="ControlInput">
        <Form.Label>Rate from 0 to 5</Form.Label>
        <Form.Control
          type="number"
          placeholder="Rate"
          min="0"
          max="5"
          step="1"
          required
          name="rate"
          onChange={handleChange}
          value={formValue.rate}
        />
      </Form.Group>
      <Form.Group className="mb-3 w-100" controlId="ControlTextarea">
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
      {inAlert.isAlert && <AlertCustom variant={inAlert.variant} heading={inAlert.heading} message={inAlert.message} />}
      <Button
        className="w-25"
        variant="primary"
        onClick={() => handleSaveComment(formValue)}
      >
        {isFetching ? <Loading /> : "💾"}
      </Button>
    </Form>
  );
};
