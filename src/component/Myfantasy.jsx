import Fantasy from "../data/fantasy.json";
import { Card } from "react-bootstrap";

const Myfantasy = () => {
  return (
    <>
      {Fantasy.slice(0, 4).map((book) => {
        return (
          <Card
            style={{ width: "10rem" }}
            key={book.asin}
            className="m
          -5"
          >
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.asin}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Card.Text>€{book.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Myfantasy;
