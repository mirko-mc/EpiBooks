import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
// import { ThemeContext } from "../context/Context";
import { ThemeContext } from "../../context/ThemeContextProvider";
export const MyFooter = () => {
  const { useTheme } = useContext(ThemeContext);
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col
            className={useTheme(
              "bg-dark p-4 text-center",
              "bg-light p-4 text-center"
            )}
          >
            <span className={useTheme("text-bg-dark", "text-muted")}>
              Mirko ConLaK © 2024
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
