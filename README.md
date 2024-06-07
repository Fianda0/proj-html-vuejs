
PHLOX PRO   

Phlox pro è un sito di un agenzia web che si occupa della creazione e mauntanzione di altri siti web, i principali servizi sono:
- Ottimizzazione della velocità del sito 
- Soluzioni per il cloud
- Progettazione del sito 
- Marketing online

La progettazione del sito è stata divisa in 3 parti:
- Giuseppe si cupato della creazione dell'Header, del Carosello e della sezione dei Servizi offerti.
- Claudio si è occupato di Latest News & Our Blog e del Footer.Ho suddiviso la mia parte di progetto in 7 parti
- Matteo si è occupato ...

Il progetto è stato creato con l'utilizzo di javascript con le funzionalità di VUE e  VITE; Inoltre per lo style è stato utilizzato BOOTSTRAP.

GIUSEPPE:

---------- HEADER 

L'Header è stato creato con 3 colonne dove la prima e l'ultima hanno la stessa dimensione, per la colonna centrale la dimansione è maggiore, l'inserimento dei link è stato fatto con un ciclo V-FOR su un array all'interno dello store.

---------- CAROSELLO / JUMBOTRONE 

Per il carosello è stata utilizzata una variabile 'slideActive' per tracciare la slide attiva, per il cambiamento delle slide sono state utilizzate 2 funzioni collegate a dei bottoni:
- next: per incrementare la variabile 'slideActive' e passare alla slide successiva
- back: per decrementare la variabile 'slideActive' e passare alla slide precedente
Gli elementi all'interno sono stati inseriti richiamando un array di oggetti all'interno dello store.

---------- SEZIONE SERVIZI

La sezione dei Servizi è stata creata in maniera più statica inserendo manualmente il titolo e le card dei servizi

MATTEO:

---------- TITOLO 
 titolo della sezione

---------- TRE CARTE
ho creato un componente "card" dove ho preso i dati da un array di oggetti nello store.js e fatto ciclare in un v-for in PageFooter tramite props.

---------- PRIMO BOTTONE 
bottone "VEIW ALL POST"

----------DUE CARTE 
realizzate creando una struttura di base in html e css prendendo i dati da un array di oggetti "dueCarte" nello store.js.

---------- IMMAGINI PUBBLICITA' 
ho creato un componente "cardImage" dove ho preso le immagini che ho messo in un array di oggetti tramite la funzione getImg e fatto ciclare in un v-for in PageFooter tramite props.

---------- QUATTRO COLONNE CON INFO
struttura base in css, informazioni estrapolate da un array di oggetti nello store.js

---------- FASCIONE NERO CON SOCIAL costruito in html semplice con uno span sulla sinistra e 3 icone social sulla destra.