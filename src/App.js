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
  /** PREMESSA
   * inizialmente gli stati e lo switch erano dichiarati nel componente SingleBook.jsx e MyNav.jsx
   * ma li ho spostati qui perchè servono a partire da questo componente (App.js) ad altri componenti di più basso livello.
   */
  /** lo stato GENRE serve ad impostare da quale json dovranno essere prelevati i dati da renderizzare */
  const [genre, setGenre] = useState("fantasy");
  /** lo stato BOOKS contiene il json da cui prelevare i dati */
  const [books, setBooks] = useState(Fantasy.slice(0, 6));
  /** la funzione handleGenreChange serve a definire l'oggetto nello stato BOOKS */
  const handleGenreChange = (gender) => {
    /** dal link della nav ci viene fornita la categoria del libro */
    setGenre(gender);
    /** controllo la variabile che contiene la categoria del libro (gender) e definisco l'oggetto nello stato
     *  .slice(0,6) serve a prendere solo i primi 6 libri sui 150 presenti nell'oggetto in attesa di sviluppare la visualizzazione a pagine
     */
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
      {/** al componente MYNAV gli passo come props la funzione per impostare il genere scelto dall'utente */}
      <MyNav setGenre={handleGenreChange} />
      {/* al componente WELCOME gli passo come props l'oggetto contenente i dati da renderizzare */}
      <Welcome books={books} />
      <MyFooter />
    </>
  );
}

export default App;
