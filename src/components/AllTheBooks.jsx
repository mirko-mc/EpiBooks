import fantasy from "../data/fantasy.json";
import { BookCard } from "./BookCard";

export const AllTheBooks = () => {
  // console.log(fantasy);
  fantasy = fantasy.slice(0,24);
  // console.log(fantasy.length);
  return fantasy.map((b) => <BookCard key={b.asin} book={b} />);
};
