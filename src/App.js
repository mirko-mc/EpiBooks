import Fantasy from "./data/fantasy.json";
import History from "./data/history.json";
import Horror from "./data/horror.json";
import Romance from "./data/romance.json";
import Scifi from "./data/scifi.json";
import { MyNav } from "./components/MyNav";
import { MyFooter } from "./components/MyFooter";
import { Welcome } from "./components/Welcome";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState("fantasy");
  const [books, setBooks] = useState(Fantasy.slice(0, 6));
  const handleGenreChange = (gender) => {
    setGenre(gender);
    console.log("ALLTHEBOOKS => genre\n", genre);
    switch (gender) {
      case "fantasy":
        setBooks(Fantasy.slice(0, 6));
        break;
      case "history":
        setBooks(History.slice(0, 6));
        break;
      case "horror":
        setBooks(Horror.slice(0, 6));
        break;
      case "romance":
        setBooks(Romance.slice(0, 6));
        break;
      case "scifi":
        setBooks(Scifi.slice(0, 6));
        break;

      default:
        setBooks(Fantasy.slice(0, 6));
        break;
    }
  };
  return (
    <>
      <MyNav setGenre={handleGenreChange} />
      <Welcome books={books} />
      <MyFooter />
    </>
  );
}

export default App;
