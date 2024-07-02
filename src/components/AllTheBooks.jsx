import { SingleBook } from "./SingleBook";

export const AllTheBooks = ({ books }) => {
  return books.map((book) => <SingleBook key={book.asin} props={book} />);
};
