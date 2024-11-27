import { Container, Row } from "react-bootstrap";

function Myfooter() {
  return (
    <Container fluid>
      <Row>
        <div className="col col-4">
          <h3>il nostro sito</h3>
        </div>
        <div className="col col-4">
          <h3>iI nostri contatti </h3>
        </div>
        <div className="col col-4">
          <h3>operativi dal 1654</h3>
        </div>
      </Row>
    </Container>
  );
}

export default Myfooter;
