import { Component } from "react";

class CommentArea extends Component {
  state = {
    valutation: [],
  };
  getValutation = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmU5ZjA2ZmM4YzAwMTU2Yjg2ZmEiLCJpYXQiOjE3MzI4MDAxNTksImV4cCI6MTczNDAwOTc1OX0.RHgu1NW2y00_fl9Qn6jU-lgs9kAh3JxgCiVd330S7a8",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((arrayOfValutation) => {
        this.setState({
          valutation: arrayOfValutation,
        });
      })
      .catch((error) => {});
  };
  componentDidMount() {
    this.getValutation();
  }
  render() {
    const { valutation } = this.state;
    return (
      <>
        <h6>Valutaziuone degli utenti</h6>
        <ul>
          {valutation.length > 0 ? (
            valutation.map((comment) => <li key={comment._id}>{comment.comment || "Nessun testo disponibile"}</li>)
          ) : (
            <p>Nessun commento disponibile.</p>
          )}
        </ul>
      </>
    );
  }
}

export default CommentArea;
