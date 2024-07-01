LA TUA PRIMA APP IN REACT!
EPIBOOKS
Crea la tua prima applicazione React, EpiBooks!
  - 1. Utilizza il template create-react-app per creare una nuova applicazione.
  - 2. Installa e importa bootstrap + react-bootstrap nell'applicazione.
  - 3. Crea un componente di nome MyNav, che renderizzi una navbar di bootstrap con seguenti link: Home, About e Browse.
       Nota: non conosciamo ancora come re-indirizzare l'utente su una diversa pagina, quindi inserisci '#' come href su ogni link.
  - 4. Crea un componente di nome MyFooter, che renderizzerà un footer per l'applicazione.
  - 5. Crea un componente di nome Welcome, che renderizzerà un Alert e un titolo per l'applicazione.
  - 6. Crea un componente di nome AllTheBooks: questo componente deve leggere da UNO dei file .json forniti e renderizzare una griglia contenente le copertine dei libri.
  

CONTINUIAMO A LAVORARE SU EPIBOOKS!
  - Crea un componente di nome SingleBook. Questo componente riceverà un libro come prop, e renderizzerà la sua copertina e il suo titolo. Utilizza il componente Card di react-bootstrap (la struttura dell'oggetto del libro sarà quella dei libri dell'ultimo esercizio!)
  - Modifica il componente AllTheBooks in modo che il .map() renderizzi non delle immagini isolate, ma una lista di componenti SingleBook.
  - Crea un input controllato all'interno del componente AllTheBooks.
    Il componente deve utilizzare il valore di questo input come filtro e mostrare solamente i libri che contengono nel titolo il testo cercato.
    (Suggerimento: salva il contenuto del campo di testo nello stato del componente e utilizzalo insieme a filter, .includes e .map).
  
  EXTRA
  Crea lo stato all'interno di SingleBook e inserisci una proprietà booleana di nome selected.
  Cliccando sulla copertina di un libro, la proprietà selected deve cambiare valore. Se selected ha valore true, la copertina del libro deve aggiungere un bordo rosso.