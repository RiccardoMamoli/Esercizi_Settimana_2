/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser.
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// Tra i principali datatype in Javascript abbiamo:
//  1. String: una stringa è una sequenza di caratteri utilizzata per rappresentare e modifcare il testo.
//  2. Number: variabila a dati numerici 
//  3. Boolean: è un dato che può assumere solo due valori: true o false (vero o falso)
//  4. Null: è un dato al quale non ho ancora assegnato un valore (volontariamente)
//  5. Undefined: è un dato al quale ho dichiarato una variabile ma non ho assegnato un valore.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// // const myName = 'Riccardo'
// // console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//  let number1 = 12;
//  let number2 = 20;
//  let sum = number1 + number2;
//  console.log(sum)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

// var x = 12;
// console.log(typeof(x))

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// myName = 'Mamoli'
// console.log(myName) ---> errore poichè utilizzando const abbiamo un valore che non può essere riassegnato

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

// let z = 4 - x;
// console.log(z)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

// let name1 = 'john';
// let name2 = 'John';
// let results = (name1 !== name2) ? 'name1 e name2 sono diversi' : 'name1 e name2 sono uguali';
// console.log(results);

// EXTRA
// name1 = name1.toLowerCase();
// name2 = name2.toLowerCase();

// let results = (name1 !== name2) ? 'name1 e name2 sono diversi' : 'name1 e name2 sono uguali';
// console.log(results)


