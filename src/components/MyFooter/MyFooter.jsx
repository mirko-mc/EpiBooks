import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
// import { ThemeContext } from "../context/Context";
import { ThemeContext } from "../../context/ThemeContextProvider";
export const MyFooter = () => {
  const { useTheme } = useContext(ThemeContext);
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-center">
          <Col
            className={
              ("justify-content-center border-top",
              useTheme("bg-dark", "bg-light"))
            }
          >
            <div>
              <span className={useTheme("text-bg-dark", "text-muted")}>
                Sirena Impicciona © 2024 ConLaK
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
