import Alert from "react-bootstrap/Alert";

function Myalert() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>BENVENUTO A QUESTA ESPERIENZA MISTICA DOVE POTRAI TROVARE LIBRI SCONTATISSIMI</p>
      <hr />
      <p className="mb-0">PS: I LIBRI NON SONO RUBATI</p>
    </Alert>
  );
}

export default Myalert;
