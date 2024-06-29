import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import { BookCard } from "./BookCard";

export const AllTheBooks = (genre) => {
  console.log("ALLTHEBOOKS => genre\n", genre);
  switch (genre) {
    case "fantasy":
      genre = Fantasy.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH FANTASY => genre");
      // console.table(genre);
      break;
    case "history":
      genre = History.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH HISTORY=> genre");
      // console.table(genre);
      break;
    case "horror":
      genre = Horror.slice(0, 24);
      console.table("ALLTHEBOOKS SWITCH HORROR=> genre");
      // console.table(genre);
      break;
    case "romance":
      genre = Romance.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH ROMANCE=> genre");
      // console.table(genre);
      break;
    case "scifi":
      genre = Scifi.slice(0, 24);
      console.table("ALLTHEBOOKS SWITCH SCIFI=> genre");
      // console.table(genre);
      break;

    default:
      genre = Fantasy.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH DEFAULT => genre");
      // console.table(genre);
      break;
  }
  // console.log(genre.length);
  return genre.map((book) => <BookCard key={book.asin} props={book} />);
};
