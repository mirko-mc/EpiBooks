import { fireEvent, render, screen } from '@testing-library/react';
import { Welcome } from './components/Welcome';
import { AllTheBooks } from './components/AllTheBooks/AllTheBooks';
import { CommentArea } from './components/CommentArea/CommentArea';
import { click } from '@testing-library/user-event/dist/click';
import { CardBody } from 'react-bootstrap';

test("Verifica che il componente Welcome venga montato correttamente.", () => {
  render(<Welcome />);
  const isBenvenuto = screen.getByText(/benvenuto/i);
  const isFagiolo = screen.getByText(/fagiolo/i);
  expect(isBenvenuto);
  expect(isFagiolo);
});

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
  render(<AllTheBooks />);
  const PRICE = screen.getAllByText(/price/i);
  console.log(PRICE);
  expect(PRICE.length === 6);
});

test("Verifica che il componente CommentArea venga renderizzato correttamente.", () => {
  render(<AllTheBooks />);
  // render(<CommentArea />)
  fireEvent(click(CardBody[0]));
  const isAddRate = screen.getByPlaceholderText(/rate/i);
  const isAddComment = screen.getByPlaceholderText(/leave a comment here/i);
  const isAuthor = screen.getAllByText(/recensione di/i);
  const isComment = screen.getAllByText(/There aren't any reviews/i);
  expect(isAddRate);
  expect(isAddComment);
  expect(isAuthor || isComment);
});

// test("Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.", () => {});

// test("Verifica che, cliccando su un libro, il suo bordo cambi colore.", () => { });

// test("Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.", () => {});

// test("Verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all'interno del DOM.", () => {});

// test("Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all'interno del DOM.", () => {});