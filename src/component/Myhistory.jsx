import History from "../data/history.json"
import { Card, } from "react-bootstrap";

const Myhistory = () => {
    return (
        <>
        {History.slice(0 ,4).map((book)=> {
            return(
          
          <Card  style={{ width: '10rem' }} key={book.asin} className="me-5" >
    <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.asin}</Card.Title>
        <Card.Text>
          {book.category}
        </Card.Text>
        <Card.Text>€{ book.price}</Card.Text>
      </Card.Body>
      </Card>
      
      )  
    })}
    </>
  );
}


    export default Myhistory