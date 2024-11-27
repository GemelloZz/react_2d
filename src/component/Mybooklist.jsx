import SingleBook from "./SingleBook";

const Mybooklist = ({ books }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
};

export default Mybooklist;
