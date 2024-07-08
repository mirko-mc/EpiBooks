import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div className="d-flex w-100 justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
