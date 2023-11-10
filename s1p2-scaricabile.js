/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//  In JavaScript i principali datatype sono number, string, boolean, undefined e null. Si chiamano primitive datatypes. 
// Questi ci servono a classificare la qualità della informazione salvata in una variabile. Possiamo creare variabili di un determinato datatype e impedire che un qualsiasi altro datatype ci finisca dentro. 
// Ci permette di essere più esatto nel handling dell'informazione.  

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Pratticamente, un oggetto è un contenittore di informazioni diverse. Può avere diverse carateristiche tutte accesibili e sfrutabili nei nostri programmi.   */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let somma;
somma = 12 + 20;
console.log (somma);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x;
x = 12;
console.log (x);
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
let name;
name = "André Paulo Oliveira Ferreira";
console.log(name);
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
sottrazione = 4 - x;
console.log(sottrazione);
 */


/*ESERCIZIO 7
Crea un oggetto di Javascript che ti rappresenti (proprietà nome, cognome, hobby)
*/

/* 
let myself = {
    nome: "André",
    cognome: "Ferreira",
    hobby: "playing football",
}
console.log(myself);
*/

/* ESERCIZIO 8
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*  

let name1;
let name2;

name1 ="john";
name2 ="John";

let same;
same = name1 === name2;
console.log(same);
console.log(name1===name2.toLocaleLowerCase());

*/

