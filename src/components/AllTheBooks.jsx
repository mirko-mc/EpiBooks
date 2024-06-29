import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";
import { BookCard } from "./BookCard";

export const AllTheBooks = (genre) => {
  // console.log(Fantasy);
  console.log("ALLTHEBOOKS => genre\n", genre);
  switch (genre) {
    case "fantasy":
      genre = Fantasy.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH FANTASY => genre\n", genre);
      break;
    case "history":
      genre = History.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH HISTORY=> genre\n", genre);
      break;
    case "horror":
      genre = Horror.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH HORROR=> genre\n", genre);
      break;
    case "romance":
      genre = Romance.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH ROMANCE=> genre\n", genre);
      break;
    case "scifi":
      genre = Scifi.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH SCIFI=> genre\n", genre);
      break;

    default:
      genre = Fantasy.slice(0, 24);
      console.log("ALLTHEBOOKS SWITCH DEFAULT=> genre\n", genre);
      break;
  }
  // console.log(Fantasy.length);
  return genre.map((book) => <BookCard key={book.asin} props={book} />);
};
