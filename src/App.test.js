import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

test("Verifica che il componente Welcome venga montato correttamente.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const isBenvenuto = screen.getByText(/benvenuto/i);
  const isFagiolo = screen.getByText(/fagiolo/i);
  expect(isBenvenuto).toBeInTheDocument();
  expect(isFagiolo).toBeInTheDocument();
});

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  expect(bookCards).toHaveLength(6);
});

test("Verifica che il componente CommentArea venga renderizzato correttamente.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  const isAddRate = screen.getByPlaceholderText(/rate/i);
  expect(isAddRate).toBeInTheDocument();
  const isAddComment = screen.getByPlaceholderText(/leave a comment here/i);
  expect(isAddComment).toBeInTheDocument();
});

test("Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  let inputSearch = screen.getByPlaceholderText("Search your favourite book");
  fireEvent.change(inputSearch, { target: { value: "destiny" } });
  let bookCards = screen.getAllByTestId("bookCards");
  expect(bookCards).toHaveLength(2);
  inputSearch = screen.getByPlaceholderText("Search your favourite book");
  fireEvent.change(inputSearch, { target: { value: "whi" } });
  bookCards = screen.queryAllByTestId("bookCards");
  expect(bookCards).toHaveLength(0);
});

test("Verifica che, cliccando su un libro, il suo bordo cambi colore.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  const selectedCard = screen.getAllByTestId("redBorder");
  expect(selectedCard[0]).toHaveClass("redBorder");
});

test("Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  let selectedCard = screen.getAllByTestId("redBorder");
  expect(selectedCard[0]).toHaveClass("redBorder");
  fireEvent.click(bookCards[1]);
  expect(selectedCard[0]).not.toHaveClass("redBorder");
});

test("Verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all'interno del DOM.", () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const SingleComment = screen.queryAllByText(/Recensione di/i);
  expect(SingleComment).toHaveLength(0);
});

test("Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all'interno del DOM.", async () => {
  render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
  const bookCards = screen.getAllByTestId("bookCards");
  fireEvent.click(bookCards[0]);
  const review = await screen.findAllByText(/Recensione di/i);
  expect(review).not.toHaveLength(0);
});
