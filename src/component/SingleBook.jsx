import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card style={{ width: "10rem", border: this.state.selected ? `3px solid red` : `` }} className="m-5">
        <Card.Img
          onClick={() => {
            this.setState((prevState) => ({
              selected: !prevState.selected,
            }));
            console.log("selezionato", this.state.selected);
          }}
          variant="top"
          src={this.props.book.img}
          style={{ cursor: "pointer", height: "100%" }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.asin}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Card.Text>€{this.props.book.price}</Card.Text>
          <CommentArea id={this.props.book.id} />
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
