import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./component/Mynavbar";
import Myfooter from "./component/Myfooter";

import { Container, Row } from "react-bootstrap";
import Myfantasy from "./component/Myfantasy";
import Myhistory from "./component/Myhistory";
import Myalert from "./component/Myalert";
import Mybooklist from "./component/Mybooklist";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";

const books = [...fantasy, ...history];

function App() {
  return (
    <div className="App">
      <header>
        <Container fluid>
          <Row>
            <Mynavbar />
          </Row>
        </Container>
        <Myalert />
      </header>
      <main>
        <Container>
          <Row className="d-flex justify-content-center pt-3">
            <Mybooklist books={books} />
          </Row>
        </Container>
      </main>
      <footer>
        <Myfooter />
      </footer>
    </div>
  );
}

export default App;
