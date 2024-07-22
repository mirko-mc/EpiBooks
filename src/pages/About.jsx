import { Col } from "react-bootstrap";

export const About = () => {
  return (
    <Col height="100px" width="100px">
      <h1 className="text-center">
        Applicazione Web realizzata da Mirko Campetiello
      </h1>
      <p>
        Tutti le richieste della commessa sono state soddisfatte ed ho preferito
        sacrificare l'aspetto grafico in favore di alcune funzionalità extra non
        incluse nella commessa.
      </p>
      <p>
        Nello specifico sono presenti le seguenti caratteristiche/funzionalità
        della commessa:
      </p>
      <ul>
        <li>tema chiaro/scuro</li>
        <li>visualizzazione singolo libro</li>
        <li>visualizzazione recensioni</li>
        <li>creazione recensione</li>
        <li>aggiornamento recensione</li>
        <li>eliminazione recensione</li>
        <li>alert per operazioni CRUD</li>
        <li>pagina 404 in caso di pagina non trovata</li>
      </ul>

      <p>
        Nello specifico sono presenti le seguenti caratteristiche/funzionalità
        di mia iniziativa:
      </p>
      <ul>
        <li>scelta categoria libro</li>
        <li>aggiunta al carrello</li>
        <li>rimozione dal carrello</li>
        <li>svuotamento del carrello</li>
        <li>visualizzazione e aggiornamento totale carrello</li>
        <li>
          impaginazione con aggiornamento libri ad ogni pagina (potevo usare
          usePagination di react-bootstrap ma ho preferito sviluppare
          personalmente la logica)
        </li>
        <li>alert per aggiunta libro al carrello</li>
        <li>tutti gli alert scompaiono dopo 3 secondi</li>
      </ul>
    </Col>
  );
};
