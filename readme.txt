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


CONTINUIAMO A LAVORARE SU EPIBOOKS!
  - Se ancora non lo hai fatto, crea lo stato all'interno di SingleBook e inserisci una proprietà booleana di nome selected.
    Cliccando sulla copertina di un libro, la proprietà selected deve cambiare valore.
    Se selected ha valore true, la copertina del libro deve aggiungere un bordo rosso.
  - Inserisci le operazioni GET e POST in modo che l'utente possa leggere, e creare recensioni sui libri.
    Troverai le informazioni sull'API nelle slide successive alle Task.
  
  TASKS:
    1. Crea un componente CommentArea e incorporalo nel componente SingleBook.
       Quando un utente clicca su un SingleBook, il componente CommentArea deve venire renderizzato (suggerimento: puoi usare l'operatore && e la proprietà "selected").
    2. CommentArea deve eseguire una fetch (useEffect) e salvare tutte le recensioni del libro all'interno del suo stato.
       Deve inoltre renderizzare altri due componenti dentro di sé: CommentList e AddComment.
    3. CommentsList riceverà la lista di recensioni da CommentArea con una prop, e dovrà renderizzare la lista utilizzando un componente SingleComment.
    4. AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5.
       Una volta raccolti i dati tramite un pulsante (onClick!) verrà effettuata una chiamata POST per inviare la recensione alle API.
  EXTRA (FACOLTATIVI):
    1. Inserisci la possibilità di eseguire un'operazione di DELETE e PUT.
    2. Inserisci spinner e messaggi d'errore.
  
  API E AUTENTICAZIONE
    Il tuo endpoint per tutto il CRUD si trova su:
    GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
    POST https://striveschool-api.herokuapp.com/api/comments/:elementId con il body che trovi nella prossima slide.
    PUT e DELETE https://striveschool-api.herokuapp.com/api/comments/:elementId
    Ciò significa che puoi effettuare operazioni di GET, DELETE, POST e PUT.

    !! IMPORTANTE !!
    Per utilizzare l'endpoint avrai bisogno di un header di autenticazione. Puoi ottenerne uno, insieme ad un esempio su come implementarlo, su https://strive.school/studentlogin
  
  API - STRUTTURA DI UN COMMENTO + AVVERTENZA!
    {
      "comment": string,    // testo della recensione
      "rate": string,       // valore compreso tra 1 e 5
      "elementId": string   // l'identificativo ASIN del libro
    }

CONTINUIAMO A LAVORARE SU EPIBOOKS!
  Il tuo compito per oggi è mettere in pratica la state elevation.
  Sposta il campo di ricerca all'interno del componente MyNavbar; dovrà sempre essere utilizzato per filtrare i libri della lista all'interno di AllTheBooks.
  
  Nelle prossime slide troverai le istruzioni passo per passo!

  TASKS: 
    1. E' necessario spostare l'input di ricerca dal componente AllTheBooks a MyNav, in modo da poter filtrare i libri comodamente dalla barra di navigazione.
    2. Attenzione però: il valore inserito nel campo di ricerca non può essere parte dello stato di MyNav, perché in questo modo risulta irraggiungibile dal componente AllTheBooks. Fisicamente l'input deve trovarsi dentro MyNav, ma la logica con cui interagisce (in lettura e scrittura) deve trovarsi in un componente superiore: App.
    3. Una volta fatto interagire l'input di ricerca in MyNav con lo stato di App (sarà necessario passare da App a MyNav delle props, in modo da poter leggere lo stato per riempire il valore dell'input ma anche per cambiare lo stato di App ogni volta che viene inserito un carattere nell'input), il più è fatto: ora sempre da App puoi passare il valore dell'input anche al componente AllTheBooks.
    4. Usa questa prop in AllTheBooks per filtrare i libri. Dovresti già avere questa funzionalità, dovrai solo cambiare l'origine della query, che non sarà più salvata nel suo stato ma proverrà dalle props.

  EXTRA (facoltativo):
    Utilizza React.Context per condividere con l'intera applicazione una proprietà 'theme': il suo valore può essere light o dark, e deve influenzare qualche proprietà visiva dei componenti principali (MyNav, BookList, SingleBook etc.).
    Fornisci anche un modo per cambiare valore alla proprietà theme (da light a dark e viceversa) e verifica che l'applicazione riceva il nuovo valore alla modifica dello stesso.

m5w3d4 - CONTINUIAMO A LAVORARE SU EPIBOOKS!
  1. Oggi devi modificare il layout dell'applicazione: crea due colonne, quella di sinistra continuerà a mostrare le copertine del libri, mentre quella sulla destra mostrerà SEMPRE un componente CommentArea. Infine rimuovi l'altra istanza di CommentArea, quella presente all'interno di SingleBook.
  
  2. Al caricamento dell'applicazione, CommentArea non riceverà più immediatamente un libro per effettuare la fetch delle recensioni;
  Fai in modo che CommentArea non provochi un crash dell'intera applicazione quando ancora non possiede dati da mostrare (ricordi i valori iniziali dello state?).
  
  3. Se non lo hai fatto, cambia il modo in cui viene salvato "selected".
  Non deve più essere salvato in SingleBook, ma in LatestRelease e non deve più contenere un booleano, ma l'asin del libro su cui si è cliccato.
  Per farlo, implementa lo state lifting e modifica SingleBook di conseguenza.

  4. Passa il valore di "selected" sia a SingleBook che a CommentArea.
  Quando cambia il valore di "selected", CommentArea deve eseguire una nuova fetch con il nuovo valore di "selected", e le recensioni nella colonna di destra devono riflettere il libro selezionato nella colonna di sinistra.
  Utilizza componentDidUpdate e non dimenticarti di sfruttare le sue prop per non imbatterti in un loop infinito.
  
  5. Assicurati che l'asin del libro (nella prop "selected") arrivi anche a AddComment in modo da mantenere aggiornata la sua proprietà elementId (necessaria per la richiesta POST) con il libro attualmente selezionato.

  API E AUTENTICAZIONE
  Il tuo endpoint per tutto il CRUD si trova su:
    https://striveschool-api.herokuapp.com/api/comments/
  
  Ciò significa che puoi effettuare operazioni di GET, DELETE, POST e PUT.
  
  !!! IMPORTANTE !!!
  Per utilizzare l'endpoint avrai bisogno di un header di autenticazione. Puoi ottenerne uno, insieme ad un esempio su come implementarlo, su:
    https://strive.school/studentlogin

  API - STRUTTURA DI UN COMMENTO + AVVERTENZA!
    {
      "comment": string,//testo della recensione
      "rate": string,//valore compreso tra 1 e 5
      "elementId": string//l'identificativo ASIN del libro
    }
    
    ATTENZIONE!!!
    Facendo un'operazione di GET su:
      https://striveschool-api.herokuapp.com/api/comments/
    riceverai TUTTE le recensioni presenti nel database.
    Probabilmente quello che a te interessa maggiormente sono le recensioni relative ad un singolo libro: puoi ottenerli aggiungendo l'ASIN del libro sul tuo endpoint:
      https://striveschool-api.herokuapp.com/api/comments/:elementId
      ES: https://striveschool-api.herokuapp.com/api/comments/0316438960