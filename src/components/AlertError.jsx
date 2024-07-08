import Alert from "react-bootstrap/Alert";

export const AlertError = ({ isError, setIsError }) => {
  return (
    <Alert variant="danger" onClose={() => setIsError(false)} dismissible>
      <Alert.Heading>ERROR</Alert.Heading>
      {isError}
    </Alert>
  );
};
