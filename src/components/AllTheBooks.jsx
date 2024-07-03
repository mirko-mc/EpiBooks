import fantasy from "../data/fantasy.json";
import { SingleBook } from "./SingleBook";

export const AllTheBooks = ({ setAddCart }) => {
  // console.log(fantasy);
  fantasy = fantasy.slice(0, 6);
  // console.log(fantasy.length);
  return fantasy.map((b) => <SingleBook setAddCard={setAddCart} key={b.asin} book={b} />);
};
