import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">Cerca un libro</Form.Label>
      <Form.Control type="text" id="inputPassword5" />
      <Form.Text id="passwordHelpBlock"></Form.Text>
    </>
  );
}

export default SearchBar;
