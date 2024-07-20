import { Alert } from "react-bootstrap";

export const AlertCustom = ({ variant, heading, message }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};
