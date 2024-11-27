import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "10rem" }} className="m-5">
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.asin}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Card.Text>€{book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
