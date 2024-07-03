import { SingleBook } from "./SingleBook";
/** il componente ALLTHEBOOKS riceve l'oggetto contenente i dati da renderizzare */
export const AllTheBooks = ({ books }) => {
  return books.map((book) => <SingleBook key={book.asin} props={book} />);
};
