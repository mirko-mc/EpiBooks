import fantasy from "../data/fantasy.json";
import { SingleBook } from "./SingleBook";

export const AllTheBooks = ({showHideCart, setAddCart, addCart }) => {
  // console.log(fantasy);
  fantasy = fantasy.slice(0, 6);
  // console.log(fantasy.length);
  return fantasy.map((b) => (
    <SingleBook
      showHideCart={showHideCart}
      addCart={addCart}
      setAddCart={setAddCart}
      key={b.asin}
      book={b}
    />
  ));
};
