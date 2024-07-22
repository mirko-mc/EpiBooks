import { useContext } from "react";
import { Col, Image } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContextProvider";

export const NotFound = () => {
  const { useTheme } = useContext(ThemeContext);
  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Image
        src={useTheme(
          "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg",
          "https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg"
        )}
      />
    </Col>
  );
};
